import db, { recordStudy } from '../core/db.js';
import { getDueCards, getDueCount, calculateNextReview, Quality, getNextReviewText } from '../core/srs.js';
import { speak } from '../core/audio.js';
import { navigate } from '../core/router.js';
import { showToast, updateNavBadge } from '../main.js';

let reviewCards = [];
let currentReviewIndex = 0;
let isFlipped = false;
let sessionStats = { total: 0, correct: 0, startTime: 0 };

export async function renderReview() {
  const allCards = await db.cards.toArray();
  const dueCount = getDueCount(allCards);
  
  if (dueCount === 0) {
    return renderNoCards();
  }
  
  reviewCards = getDueCards(allCards, 20);
  currentReviewIndex = 0;
  sessionStats = { total: reviewCards.length, correct: 0, startTime: Date.now() };
  
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="page-header">
      <h1>Révision 🔄</h1>
      <p class="subtitle">${reviewCards.length} carte${reviewCards.length > 1 ? 's' : ''} à réviser</p>
    </div>
    <div id="review-area"></div>
  `;
  
  setTimeout(() => renderReviewCard(el), 0);
  return el;
}

function renderNoCards() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="page-header">
      <h1>Révision 🔄</h1>
    </div>
    <div class="review-summary">
      <div class="summary-icon">✅</div>
      <h2>Tout est à jour !</h2>
      <p style="color: var(--text-secondary); margin-top: var(--space-sm);">
        Tu n'as aucune carte à réviser pour le moment.<br>
        Reviens plus tard ou apprends de nouveaux mots !
      </p>
      <div style="display: flex; gap: var(--space-md); justify-content: center; margin-top: var(--space-xl);">
        <button class="btn btn-primary" id="goto-flash">🃏 Flash Cards</button>
        <button class="btn btn-secondary" id="goto-courses">📖 Cours</button>
      </div>
    </div>
  `;
  
  setTimeout(() => {
    el.querySelector('#goto-flash')?.addEventListener('click', () => navigate('/flashcards'));
    el.querySelector('#goto-courses')?.addEventListener('click', () => navigate('/courses'));
  }, 0);
  
  return el;
}

function renderReviewCard(pageEl) {
  const area = pageEl.querySelector('#review-area');
  if (!area) return;
  
  if (currentReviewIndex >= reviewCards.length) {
    renderSessionComplete(area);
    return;
  }
  
  const card = reviewCards[currentReviewIndex];
  isFlipped = false;
  
  // Determine front and back content based on card type
  let frontContent = '';
  let backContent = '';
  
  if (card.type === 'vocabulary') {
    frontContent = `
      <div class="flashcard-word">${card.data.es}</div>
      <div class="flashcard-hint">Quelle est la traduction ?</div>
    `;
    backContent = `
      <div class="flashcard-translation">${card.data.fr}</div>
      ${card.data.example ? `<div class="flashcard-example">"${card.data.example}"</div>` : ''}
    `;
  } else if (card.type === 'grammar') {
    frontContent = `
      <div style="font-size: var(--font-md); font-weight: 600;">${card.data.question}</div>
      <div class="flashcard-hint" style="margin-top: var(--space-lg);">Tu connais la réponse ?</div>
    `;
    backContent = `
      <div class="flashcard-translation">${card.data.answer}</div>
      <div class="flashcard-example">${card.data.lesson}</div>
    `;
  } else {
    frontContent = `
      <div class="flashcard-word">${card.data.es || card.data.question || ''}</div>
      <div class="flashcard-hint">Touche pour retourner</div>
    `;
    backContent = `
      <div class="flashcard-translation">${card.data.fr || card.data.answer || ''}</div>
    `;
  }
  
  area.innerHTML = `
    <div class="flashcard-progress">
      <span>${currentReviewIndex + 1}/${reviewCards.length}</span>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${((currentReviewIndex + 1) / reviewCards.length) * 100}%"></div>
      </div>
    </div>
    
    <div class="flashcard-container">
      <div class="flashcard" id="review-flashcard">
        <div class="flashcard-face flashcard-front">
          ${card.data.es ? `<button class="flashcard-audio-btn" id="review-audio">🔊</button>` : ''}
          <span class="flashcard-category">
            <span class="level-tag ${card.data.level || ''}">${(card.data.level || '').toUpperCase()}</span>
          </span>
          ${frontContent}
        </div>
        <div class="flashcard-face flashcard-back">
          ${backContent}
        </div>
      </div>
    </div>
    
    <div class="flashcard-actions" id="review-actions" style="opacity: 0; pointer-events: none; transition: opacity 0.3s;">
      <button class="flashcard-action-btn btn-fail" data-quality="${Quality.INCORRECT}">
        <span>😵</span>
        <span>Raté</span>
      </button>
      <button class="flashcard-action-btn btn-hard" data-quality="${Quality.DIFFICULT}">
        <span>🤔</span>
        <span>Difficile</span>
      </button>
      <button class="flashcard-action-btn btn-good" data-quality="${Quality.GOOD}">
        <span>😊</span>
        <span>Bien</span>
      </button>
      <button class="flashcard-action-btn btn-easy" data-quality="${Quality.PERFECT}">
        <span>🤩</span>
        <span>Facile</span>
      </button>
    </div>
  `;
  
  const flashcard = area.querySelector('#review-flashcard');
  const actions = area.querySelector('#review-actions');
  
  flashcard?.addEventListener('click', (e) => {
    if (e.target.closest('.flashcard-audio-btn')) return;
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
    if (isFlipped) {
      actions.style.opacity = '1';
      actions.style.pointerEvents = 'auto';
    }
  });
  
  area.querySelector('#review-audio')?.addEventListener('click', (e) => {
    e.stopPropagation();
    speak(card.data.es);
  });
  
  area.querySelectorAll('.flashcard-action-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const quality = parseInt(btn.dataset.quality);
      
      // Update SRS
      const updated = calculateNextReview(card, quality);
      await db.cards.put(updated);
      
      // Record
      await recordStudy(quality >= 3, Date.now() - sessionStats.startTime);
      if (quality >= 3) sessionStats.correct++;
      
      await updateNavBadge();
      
      // Next
      currentReviewIndex++;
      renderReviewCard(pageEl);
    });
  });
}

function renderSessionComplete(area) {
  const percent = sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0;
  
  area.innerHTML = `
    <div class="review-summary scale-in">
      <div class="summary-icon">${percent >= 80 ? '🏆' : percent >= 50 ? '💪' : '📚'}</div>
      <h2>Session terminée !</h2>
      
      <div class="summary-stats">
        <div class="stat-card">
          <div class="stat-value" style="color: var(--accent-primary-light)">${sessionStats.total}</div>
          <div class="stat-label">Révisées</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color: var(--color-success-light)">${sessionStats.correct}</div>
          <div class="stat-label">Correctes</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color: var(--accent-secondary-light)">${percent}%</div>
          <div class="stat-label">Précision</div>
        </div>
      </div>
      
      <div style="display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-primary" id="review-done">🏠 Retour à l'accueil</button>
      </div>
    </div>
  `;
  
  area.querySelector('#review-done')?.addEventListener('click', () => navigate('/'));
  showToast(`Session terminée — ${percent}% de réussite !`);
}
