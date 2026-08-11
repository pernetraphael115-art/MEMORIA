/* ============================================
   MÉMORÍA — SM-2 Spaced Repetition Algorithm
   ============================================
   Based on the SuperMemo 2 algorithm by Piotr Woźniak.
   
   Each card tracks:
   - interval: days until next review
   - repetition: consecutive correct answers
   - efactor: easiness factor (min 1.3)
   - nextReview: timestamp of next review date
   - lastReview: timestamp of last review
*/

/**
 * Quality ratings for user responses
 */
export const Quality = {
  BLACKOUT: 0,     // Total blackout
  INCORRECT: 1,    // Incorrect, but recognized after seeing answer
  HARD: 2,         // Incorrect, but seemed easy to recall
  DIFFICULT: 3,    // Correct, but with significant difficulty
  GOOD: 4,         // Correct, with some hesitation
  PERFECT: 5,      // Perfect, instant recall
};

/**
 * Create a new SRS card with default values
 */
export function createSRSCard(id, type, data) {
  return {
    id,
    type, // 'vocabulary', 'grammar', 'phrase', 'conjugation'
    data,
    interval: 0,
    repetition: 0,
    efactor: 2.5,
    nextReview: Date.now(), // Available immediately
    lastReview: null,
    totalReviews: 0,
    correctReviews: 0,
    streak: 0,
  };
}

/**
 * SM-2 algorithm: calculate next review schedule
 * @param {Object} card - The SRS card to update
 * @param {number} quality - User's quality rating (0-5)
 * @returns {Object} Updated card with new schedule
 */
export function calculateNextReview(card, quality) {
  let { interval, repetition, efactor } = card;
  
  // Calculate new easiness factor
  let newEF = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (newEF < 1.3) newEF = 1.3;
  
  let newInterval;
  let newRepetition;
  
  if (quality < 3) {
    // Failed: reset repetition, show again soon
    newRepetition = 0;
    newInterval = 1;
  } else {
    // Passed: increase interval
    newRepetition = repetition + 1;
    
    if (newRepetition === 1) {
      newInterval = 1;
    } else if (newRepetition === 2) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * newEF);
    }
  }
  
  // Calculate next review date
  const now = Date.now();
  const nextReview = now + (newInterval * 24 * 60 * 60 * 1000);
  
  return {
    ...card,
    interval: newInterval,
    repetition: newRepetition,
    efactor: Math.round(newEF * 100) / 100,
    nextReview,
    lastReview: now,
    totalReviews: card.totalReviews + 1,
    correctReviews: quality >= 3 ? card.correctReviews + 1 : card.correctReviews,
    streak: quality >= 3 ? card.streak + 1 : 0,
  };
}

/**
 * Get all cards due for review
 * @param {Array} cards - All SRS cards
 * @param {number} limit - Maximum cards to return
 * @returns {Array} Cards due for review, sorted by priority
 */
export function getDueCards(cards, limit = 20) {
  const now = Date.now();
  
  return cards
    .filter(card => card.nextReview <= now)
    .sort((a, b) => {
      // Priority: overdue cards first, then by efactor (harder cards first)
      const overdueA = now - a.nextReview;
      const overdueB = now - b.nextReview;
      
      if (overdueA !== overdueB) return overdueB - overdueA;
      return a.efactor - b.efactor;
    })
    .slice(0, limit);
}

/**
 * Get the count of cards due for review
 */
export function getDueCount(cards) {
  const now = Date.now();
  return cards.filter(card => card.nextReview <= now).length;
}

/**
 * Get a human-readable time until next review
 */
export function getNextReviewText(interval) {
  if (interval === 0) return "Maintenant";
  if (interval === 1) return "Demain";
  if (interval < 7) return `Dans ${interval} jours`;
  if (interval < 30) return `Dans ${Math.round(interval / 7)} semaines`;
  if (interval < 365) return `Dans ${Math.round(interval / 30)} mois`;
  return `Dans ${Math.round(interval / 365)} an(s)`;
}

/**
 * Map quality button labels for the UI
 */
export function getQualityLabel(quality) {
  const labels = {
    [Quality.BLACKOUT]: "Aucune idée",
    [Quality.INCORRECT]: "Raté",
    [Quality.HARD]: "Presque",
    [Quality.DIFFICULT]: "Difficile",
    [Quality.GOOD]: "Bien",
    [Quality.PERFECT]: "Parfait !",
  };
  return labels[quality] || "";
}

/**
 * Calculate mastery percentage for a set of cards
 */
export function calculateMastery(cards) {
  if (cards.length === 0) return 0;
  
  const masteredCards = cards.filter(c => c.repetition >= 3 && c.efactor >= 2.0);
  return Math.round((masteredCards.length / cards.length) * 100);
}

/**
 * Get card status label
 */
export function getCardStatus(card) {
  if (card.repetition === 0 && card.totalReviews === 0) return 'new';
  if (card.repetition === 0) return 'relearning';
  if (card.repetition >= 5 && card.efactor >= 2.3) return 'mastered';
  if (card.repetition >= 3) return 'mature';
  return 'learning';
}
