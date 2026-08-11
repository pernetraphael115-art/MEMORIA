import { getLessonById, grammarData } from '../data/grammar/index.js';
import { navigate, goBack } from '../core/router.js';
import db from '../core/db.js';
import { createSRSCard } from '../core/srs.js';
import { showToast } from '../main.js';

export async function renderLesson(params) {
  const lesson = getLessonById(params.id);
  if (!lesson) { navigate('/courses'); return ''; }

  const el = document.createElement('div');
  el.className = 'lesson-page';

  el.innerHTML = `
    <button class="lesson-back-btn" id="back-btn">← Retour aux cours</button>
    
    <div class="slide-up">
      <span class="level-tag ${lesson.level}">${lesson.level.toUpperCase()}</span>
      <h1 style="font-size: var(--font-2xl); font-weight: 800; margin-top: var(--space-sm); letter-spacing: -0.02em;">
        ${lesson.title}
      </h1>
      <p style="color: var(--text-secondary); font-size: var(--font-sm); margin-top: var(--space-xs);">
        Leçon ${lesson.number} • ${lesson.desc}
      </p>
    </div>

    <div class="lesson-content slide-up" style="animation-delay: 100ms;">
      ${lesson.content}
    </div>

    ${lesson.exercises && lesson.exercises.length > 0 ? `
      <div class="exercise-container slide-up" style="animation-delay: 200ms;">
        <h2 style="color: var(--accent-primary-light); margin-bottom: var(--space-lg);">📝 Exercices</h2>
        <div id="exercises-container"></div>
        <div id="exercise-results" style="display: none; margin-top: var(--space-lg);"></div>
        <button class="btn btn-primary btn-block" id="check-btn" style="margin-top: var(--space-lg);">
          Vérifier mes réponses
        </button>
        <button class="btn btn-primary btn-block" id="complete-btn" style="margin-top: var(--space-md); display: none;">
          ✅ Leçon terminée — Continuer
        </button>
      </div>
    ` : `
      <button class="btn btn-primary btn-block" id="complete-btn" style="margin-top: var(--space-xl);">
        ✅ Marquer comme terminée
      </button>
    `}
  `;

  setTimeout(() => {
    el.querySelector('#back-btn')?.addEventListener('click', () => navigate('/courses'));
    
    // Render exercises
    const container = el.querySelector('#exercises-container');
    if (container && lesson.exercises) {
      lesson.exercises.forEach((ex, i) => {
        container.appendChild(renderExercise(ex, i));
      });
    }

    // Check answers
    el.querySelector('#check-btn')?.addEventListener('click', () => {
      let correct = 0;
      lesson.exercises.forEach((ex, i) => {
        const result = checkExercise(el, ex, i);
        if (result) correct++;
      });
      
      const total = lesson.exercises.length;
      const percent = Math.round((correct / total) * 100);
      
      const resultsEl = el.querySelector('#exercise-results');
      resultsEl.style.display = 'block';
      resultsEl.innerHTML = `
        <div class="card" style="text-align: center; border-color: ${percent >= 70 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'};">
          <div style="font-size: 2rem; margin-bottom: var(--space-sm);">${percent >= 70 ? '🎉' : '💪'}</div>
          <div style="font-size: var(--font-xl); font-weight: 800;">${correct}/${total} correct${correct > 1 ? 's' : ''}</div>
          <div style="font-size: var(--font-sm); color: var(--text-secondary); margin-top: var(--space-xs);">
            ${percent >= 70 ? 'Bravo ! Tu peux passer à la suite.' : 'Continue à t\'entraîner, tu vas y arriver !'}
          </div>
        </div>
      `;
      
      el.querySelector('#check-btn').style.display = 'none';
      el.querySelector('#complete-btn').style.display = 'block';
    });

    // Complete lesson
    el.querySelector('#complete-btn')?.addEventListener('click', async () => {
      // Mark as completed
      await db.lessons.put({ id: lesson.id, level: lesson.level, completed: 1, unlockedAt: Date.now() });
      
      // Unlock next lesson
      const currentIndex = grammarData.findIndex(l => l.id === lesson.id);
      if (currentIndex < grammarData.length - 1) {
        const next = grammarData[currentIndex + 1];
        const existing = await db.lessons.get(next.id);
        if (!existing || !existing.unlockedAt) {
          await db.lessons.put({ id: next.id, level: next.level, completed: 0, unlockedAt: Date.now() });
        }
      }

      // Create SRS cards from exercises
      if (lesson.exercises) {
        for (const ex of lesson.exercises) {
          const cardId = `grammar-${lesson.id}-${ex.question.substring(0, 20)}`;
          const existing = await db.cards.get(cardId);
          if (!existing) {
            await db.cards.put(createSRSCard(cardId, 'grammar', {
              question: ex.question,
              answer: ex.type === 'qcm' ? ex.options[ex.correct] : ex.answer,
              lesson: lesson.title,
              level: lesson.level,
            }));
          }
        }
      }
      
      showToast(`Leçon "${lesson.title}" terminée ! 🎉`);
      navigate('/courses');
    });
  }, 0);

  return el;
}

function renderExercise(ex, index) {
  const div = document.createElement('div');
  div.className = 'exercise-card';
  div.dataset.index = index;
  
  if (ex.type === 'qcm') {
    div.innerHTML = `
      <div class="exercise-question">${ex.question}</div>
      <div class="exercise-options">
        ${ex.options.map((opt, i) => `
          <button class="exercise-option" data-value="${i}" data-exercise="${index}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
    `;
    
    setTimeout(() => {
      div.querySelectorAll('.exercise-option').forEach(btn => {
        btn.addEventListener('click', () => {
          div.querySelectorAll('.exercise-option').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });
    }, 0);
  } else if (ex.type === 'fill') {
    div.innerHTML = `
      <div class="exercise-question">${ex.question}</div>
      ${ex.hint ? `<div style="font-size: var(--font-xs); color: var(--text-tertiary); margin-bottom: var(--space-md); font-style: italic;">💡 ${ex.hint}</div>` : ''}
      <input type="text" class="exercise-fill-input" data-exercise="${index}" placeholder="Ta réponse..." autocomplete="off" autocapitalize="off" />
    `;
  }

  return div;
}

function checkExercise(pageEl, ex, index) {
  if (ex.type === 'qcm') {
    const selected = pageEl.querySelector(`.exercise-option.selected[data-exercise="${index}"]`);
    const options = pageEl.querySelectorAll(`.exercise-option[data-exercise="${index}"]`);
    
    if (!selected) return false;
    
    const selectedValue = parseInt(selected.dataset.value);
    const isCorrect = selectedValue === ex.correct;
    
    options.forEach(opt => {
      const val = parseInt(opt.dataset.value);
      if (val === ex.correct) opt.classList.add('correct');
      else if (val === selectedValue && !isCorrect) opt.classList.add('incorrect');
      opt.style.pointerEvents = 'none';
    });
    
    return isCorrect;
  } else if (ex.type === 'fill') {
    const input = pageEl.querySelector(`.exercise-fill-input[data-exercise="${index}"]`);
    if (!input) return false;
    
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = ex.answer.toLowerCase();
    const isCorrect = userAnswer === correctAnswer || 
                      userAnswer === correctAnswer.replace('...', '').trim();
    
    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    input.readOnly = true;
    
    if (!isCorrect) {
      const feedback = document.createElement('div');
      feedback.className = 'exercise-feedback incorrect';
      feedback.textContent = `Réponse correcte : ${ex.answer}`;
      input.parentNode.appendChild(feedback);
    }
    
    return isCorrect;
  }
  
  return false;
}
