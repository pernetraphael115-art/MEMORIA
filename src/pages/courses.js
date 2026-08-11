import { grammarData, levels, getLessonsByLevel } from '../data/grammar/index.js';
import { navigate } from '../core/router.js';
import db from '../core/db.js';

export async function renderCourses() {
  const completedLessons = await db.lessons.where('completed').equals(1).toArray();
  const completedIds = new Set(completedLessons.map(l => l.id));

  const el = document.createElement('div');
  
  let html = `
    <div class="page-header">
      <h1>Cours 📖</h1>
      <p class="subtitle">40 leçons de grammaire, du A1 au B2</p>
    </div>
  `;

  for (const level of levels) {
    const lessons = getLessonsByLevel(level.id);
    const completed = lessons.filter(l => completedIds.has(l.id)).length;
    const percent = Math.round((completed / lessons.length) * 100);
    
    html += `
      <div class="courses-level-section">
        <div class="courses-level-header">
          <div class="courses-level-badge" style="background: ${level.id === 'a1' ? 'var(--color-a1-bg)' : level.id === 'a2' ? 'var(--color-a2-bg)' : level.id === 'b1' ? 'var(--color-b1-bg)' : 'var(--color-b2-bg)'}; color: ${level.color};">
            ${level.id.toUpperCase()}
          </div>
          <div class="courses-level-info">
            <h3>${level.name}</h3>
            <div class="level-progress-text">${completed}/${lessons.length} leçons • ${percent}%</div>
          </div>
        </div>
        <div class="progress-bar" style="margin-bottom: var(--space-md);">
          <div class="progress-bar-fill" style="width: ${percent}%; background: ${level.color};"></div>
        </div>
        <div class="stagger-children">
    `;

    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      const isCompleted = completedIds.has(lesson.id);
      // First lesson of A1 is always unlocked; after that, need previous lesson completed
      const prevLesson = i > 0 ? lessons[i-1] : (level.id === 'a1' ? null : grammarData[grammarData.indexOf(lesson) - 1]);
      const isUnlocked = i === 0 && level.id === 'a1' || isCompleted || (prevLesson && completedIds.has(prevLesson.id));
      const isCurrent = isUnlocked && !isCompleted;
      
      html += `
        <div class="lesson-card ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''} ${isCurrent ? 'current' : ''}" 
             data-lesson-id="${lesson.id}" ${isUnlocked ? 'data-clickable="true"' : ''}>
          <div class="lesson-number">${isCompleted ? '✓' : lesson.number}</div>
          <div class="lesson-info">
            <h4>${lesson.title}</h4>
            <p class="lesson-desc">${lesson.desc}</p>
          </div>
          <div class="lesson-arrow">${isUnlocked ? '→' : '🔒'}</div>
        </div>
      `;
    }

    html += `</div></div>`;
  }

  el.innerHTML = html;

  // Click handlers
  setTimeout(() => {
    el.querySelectorAll('.lesson-card[data-clickable="true"]').forEach(card => {
      card.addEventListener('click', () => {
        navigate('/lesson', { id: card.dataset.lessonId });
      });
    });
  }, 0);

  return el;
}
