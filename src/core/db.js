/* ============================================
   MÉMORÍA — Database (IndexedDB via Dexie)
   ============================================ */

import Dexie from 'dexie';

const db = new Dexie('MemoriaDB');

db.version(1).stores({
  // SRS Cards
  cards: 'id, type, nextReview, repetition, efactor, [type+nextReview]',
  
  // User progress
  progress: 'id, lessonId, completed, score',
  
  // Lesson completion status
  lessons: 'id, level, completed, unlockedAt',
  
  // Daily stats
  dailyStats: 'date, cardsReviewed, correctAnswers, newCards, timeSpent',
  
  // User settings & global state
  settings: 'key',
});

export default db;

/**
 * Initialize the database with default settings
 */
export async function initDB() {
  const existing = await db.settings.get('initialized');
  if (existing) return;
  
  await db.settings.bulkPut([
    { key: 'initialized', value: true },
    { key: 'currentLevel', value: 'a1' },
    { key: 'streak', value: 0 },
    { key: 'lastStudyDate', value: null },
    { key: 'totalWordsLearned', value: 0 },
    { key: 'totalTimeSpent', value: 0 },
    { key: 'dailyGoal', value: 20 }, // cards per day
  ]);
  
  // Unlock first level lessons
  const { grammarData } = await import('../data/grammar/index.js');
  const a1Lessons = grammarData.filter(l => l.level === 'a1');
  
  for (let i = 0; i < a1Lessons.length; i++) {
    await db.lessons.put({
      id: a1Lessons[i].id,
      level: 'a1',
      completed: false,
      unlockedAt: i === 0 ? Date.now() : null,
    });
  }
}

/**
 * Get a setting value
 */
export async function getSetting(key) {
  const row = await db.settings.get(key);
  return row ? row.value : null;
}

/**
 * Set a setting value
 */
export async function setSetting(key, value) {
  await db.settings.put({ key, value });
}

/**
 * Record daily study activity
 */
export async function recordStudy(correct, timeMs) {
  const today = new Date().toISOString().split('T')[0];
  
  let stats = await db.dailyStats.get(today);
  
  if (!stats) {
    stats = {
      date: today,
      cardsReviewed: 0,
      correctAnswers: 0,
      newCards: 0,
      timeSpent: 0,
    };
  }
  
  stats.cardsReviewed++;
  if (correct) stats.correctAnswers++;
  stats.timeSpent += timeMs;
  
  await db.dailyStats.put(stats);
  
  // Update streak
  const lastDate = await getSetting('lastStudyDate');
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  
  if (lastDate === yesterday || lastDate === today) {
    if (lastDate !== today) {
      const streak = (await getSetting('streak')) || 0;
      await setSetting('streak', streak + 1);
    }
  } else if (lastDate !== today) {
    await setSetting('streak', 1);
  }
  
  await setSetting('lastStudyDate', today);
}

/**
 * Get study stats for the dashboard
 */
export async function getDashboardStats() {
  const today = new Date().toISOString().split('T')[0];
  const todayStats = await db.dailyStats.get(today) || {
    cardsReviewed: 0,
    correctAnswers: 0,
    newCards: 0,
    timeSpent: 0,
  };
  
  const streak = (await getSetting('streak')) || 0;
  const totalCards = await db.cards.count();
  const masteredCards = await db.cards.where('repetition').aboveOrEqual(5).count();
  
  return {
    todayReviewed: todayStats.cardsReviewed,
    todayCorrect: todayStats.correctAnswers,
    streak,
    totalCards,
    masteredCards,
  };
}

/**
 * Get recent daily stats for charts
 */
export async function getRecentStats(days = 30) {
  const stats = [];
  const now = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now - i * 86400000).toISOString().split('T')[0];
    const dayStat = await db.dailyStats.get(date);
    stats.push({
      date,
      cardsReviewed: dayStat?.cardsReviewed || 0,
      correctAnswers: dayStat?.correctAnswers || 0,
    });
  }
  
  return stats;
}
