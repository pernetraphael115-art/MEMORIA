import { translateData, getRandomPhrase, translateLevels } from '../data/translate/index.js';
import { speak } from '../core/audio.js';
import db, { recordStudy } from '../core/db.js';
import { showToast, updateNavBadge } from '../main.js';

let currentLevel = 'a1';
let currentPhrase = null;
let isProgressiveMode = false;
let progressiveLevel = 'a1';
let consecutiveCorrect = 0;
let score = { correct: 0, wrong: 0 };
let hasAnswered = false;
let direction = 'es→fr'; // alternates
let usedPhraseIds = new Set();

const PROGRESSIVE_THRESHOLD = 3; // correct answers to level up
const LEVEL_ORDER = ['a1', 'a2', 'b1', 'b2'];

export async function renderTranslate() {
  const el = document.createElement('div');

  el.innerHTML = `
    <div class="page-header">
      <h1>Traduire ✍️</h1>
      <p class="subtitle">Traduis des phrases et progresse niveau par niveau</p>
    </div>
    
    <div style="padding: 0 var(--space-md);">
      <div class="chip-group" id="translate-level-chips">
        ${translateLevels.map(l => `
          <button class="chip ${(l.id === 'a1' && !isProgressiveMode) || (l.id === 'progressive' && isProgressiveMode) ? 'active' : ''}" data-level="${l.id}">
            ${l.emoji} ${l.id === 'progressive' ? 'Progressif' : l.id.toUpperCase()}
          </button>
        `).join('')}
      </div>
    </div>
    
    <div id="translate-area"></div>
  `;

  setTimeout(() => {
    el.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        el.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        if (chip.dataset.level === 'progressive') {
          isProgressiveMode = true;
          progressiveLevel = 'a1';
          consecutiveCorrect = 0;
        } else {
          isProgressiveMode = false;
          currentLevel = chip.dataset.level;
        }
        
        score = { correct: 0, wrong: 0 };
        usedPhraseIds = new Set();
        hasAnswered = false;
        loadNewPhrase(el);
      });
    });

    loadNewPhrase(el);
  }, 0);

  return el;
}

function getActiveLevel() {
  return isProgressiveMode ? progressiveLevel : currentLevel;
}

function loadNewPhrase(el) {
  const level = getActiveLevel();
  
  // Get a phrase we haven't used yet
  const available = translateData.filter(t => 
    t.level === level && !usedPhraseIds.has(t.es)
  );
  
  // If we've exhausted all phrases for this level, reset
  if (available.length === 0) {
    usedPhraseIds.clear();
    currentPhrase = getRandomPhrase(level);
  } else {
    currentPhrase = available[Math.floor(Math.random() * available.length)];
  }
  
  if (!currentPhrase) {
    const area = el.querySelector('#translate-area');
    area.innerHTML = `
      <div class="review-summary">
        <div class="summary-icon">📭</div>
        <h2>Aucune phrase disponible</h2>
        <p style="color: var(--text-secondary); margin-top: var(--space-sm);">
          Choisis un autre niveau pour continuer.
        </p>
      </div>
    `;
    return;
  }
  
  usedPhraseIds.add(currentPhrase.es);
  
  // Alternate direction
  direction = direction === 'es→fr' ? 'fr→es' : 'es→fr';
  hasAnswered = false;
  
  renderPhrase(el);
}

function renderPhrase(el) {
  const area = el.querySelector('#translate-area');
  if (!area || !currentPhrase) return;

  const isEsToFr = direction === 'es→fr';
  const prompt = isEsToFr ? currentPhrase.es : currentPhrase.fr;
  const dirLabel = isEsToFr ? '🇪🇸 → 🇫🇷' : '🇫🇷 → 🇪🇸';
  const promptInstruction = isEsToFr ? 'Traduis en français' : 'Traduis en espagnol';
  const levelLabel = getActiveLevel().toUpperCase();

  area.innerHTML = `
    <div class="translate-score-bar">
      <div class="translate-score-item correct">
        <span>✅</span> <span>${score.correct}</span>
      </div>
      ${isProgressiveMode ? `
        <div class="translate-progressive-indicator">
          <span class="level-tag ${getActiveLevel()}">${levelLabel}</span>
          <div class="progressive-dots">
            ${Array.from({length: PROGRESSIVE_THRESHOLD}, (_, i) => `
              <div class="progressive-dot ${i < consecutiveCorrect ? 'filled' : ''}"></div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      <div class="translate-score-item wrong">
        <span>❌</span> <span>${score.wrong}</span>
      </div>
    </div>
    
    <div class="translate-card">
      <div class="translate-direction-badge">${dirLabel}</div>
      <div class="translate-level-badge">
        <span class="level-tag ${getActiveLevel()}">${levelLabel}</span>
      </div>
      
      <div class="translate-prompt">
        <div class="translate-prompt-text">${prompt}</div>
        ${isEsToFr ? `
          <button class="translate-audio-btn" id="speak-btn">🔊</button>
        ` : ''}
      </div>
      
      <div class="translate-instruction">${promptInstruction}</div>
      
      <div class="translate-input-area">
        <textarea 
          id="translate-input" 
          class="translate-input" 
          placeholder="Tape ta traduction ici..."
          rows="2"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        ></textarea>
        <button class="btn btn-primary translate-check-btn" id="check-btn">
          Vérifier ✓
        </button>
      </div>
    </div>
    
    <div id="translate-result" class="translate-result-container"></div>
  `;

  setTimeout(() => {
    const input = area.querySelector('#translate-input');
    const checkBtn = area.querySelector('#check-btn');
    const speakBtn = area.querySelector('#speak-btn');

    // Focus input
    input?.focus();

    // Enter key to submit
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!hasAnswered) {
          checkAnswer(el, input.value);
        }
      }
    });

    checkBtn?.addEventListener('click', () => {
      if (!hasAnswered) {
        checkAnswer(el, input.value);
      }
    });

    speakBtn?.addEventListener('click', () => {
      speak(currentPhrase.es);
    });
  }, 0);
}

function normalizeForComparison(str) {
  return str
    .toLowerCase()
    .trim()
    // Remove accents
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Remove punctuation
    .replace(/[¿¡?!.,;:'"()…\-–—]/g, '')
    // Normalize spaces
    .replace(/\s+/g, ' ')
    .trim();
}

function checkAnswer(el, userAnswer) {
  if (hasAnswered) return;
  hasAnswered = true;

  const isEsToFr = direction === 'es→fr';
  const correctAnswer = isEsToFr ? currentPhrase.fr : currentPhrase.es;
  
  const normalizedUser = normalizeForComparison(userAnswer);
  const normalizedCorrect = normalizeForComparison(correctAnswer);
  
  // Check if the answer is correct (or close enough)
  const isCorrect = normalizedUser === normalizedCorrect;
  
  // Also check partial match (at least 80% of words match)
  const userWords = normalizedUser.split(' ').filter(w => w.length > 0);
  const correctWords = normalizedCorrect.split(' ').filter(w => w.length > 0);
  const matchingWords = userWords.filter(w => correctWords.includes(w));
  const matchRatio = correctWords.length > 0 ? matchingWords.length / correctWords.length : 0;
  const isClose = matchRatio >= 0.8 && !isCorrect;

  if (isCorrect || isClose) {
    score.correct++;
    if (isProgressiveMode) {
      consecutiveCorrect++;
      if (consecutiveCorrect >= PROGRESSIVE_THRESHOLD) {
        levelUp();
      }
    }
  } else {
    score.wrong++;
    if (isProgressiveMode) {
      consecutiveCorrect = 0;
    }
  }

  // Record study
  recordStudy(isCorrect || isClose, 0).catch(console.error);
  updateNavBadge().catch(console.error);

  renderResult(el, isCorrect, isClose, userAnswer, correctAnswer);
}

function levelUp() {
  const currentIdx = LEVEL_ORDER.indexOf(progressiveLevel);
  if (currentIdx < LEVEL_ORDER.length - 1) {
    progressiveLevel = LEVEL_ORDER[currentIdx + 1];
    consecutiveCorrect = 0;
    showToast(`Bravo ! Tu passes au niveau ${progressiveLevel.toUpperCase()} 🚀`, 'success');
  } else {
    showToast('Tu as atteint le niveau maximum ! 🏆', 'success');
    consecutiveCorrect = 0;
  }
}

function renderResult(el, isCorrect, isClose, userAnswer, correctAnswer) {
  const resultArea = el.querySelector('#translate-result');
  if (!resultArea) return;

  const isEsToFr = direction === 'es→fr';
  const statusClass = isCorrect ? 'correct' : isClose ? 'close' : 'incorrect';
  const statusIcon = isCorrect ? '✅' : isClose ? '🟡' : '❌';
  const statusText = isCorrect ? 'Parfait !' : isClose ? 'Presque !' : 'Pas tout à fait...';

  // Update score display
  const scoreBar = el.querySelector('.translate-score-bar');
  if (scoreBar) {
    scoreBar.querySelector('.correct span:last-child').textContent = score.correct;
    scoreBar.querySelector('.wrong span:last-child').textContent = score.wrong;
    
    // Update progressive dots
    if (isProgressiveMode) {
      const indicator = scoreBar.querySelector('.translate-progressive-indicator');
      if (indicator) {
        const levelTag = indicator.querySelector('.level-tag');
        levelTag.className = `level-tag ${getActiveLevel()}`;
        levelTag.textContent = getActiveLevel().toUpperCase();
        
        const dots = indicator.querySelectorAll('.progressive-dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('filled', i < consecutiveCorrect);
        });
      }
    }
  }

  // Disable input
  const input = el.querySelector('#translate-input');
  const checkBtn = el.querySelector('#check-btn');
  if (input) {
    input.disabled = true;
    input.classList.add(statusClass);
  }
  if (checkBtn) {
    checkBtn.style.display = 'none';
  }

  // Build keyword highlights
  const keywordsHtml = (currentPhrase.keywords || []).map(kw => 
    `<span class="translate-keyword">${kw}</span>`
  ).join('');

  resultArea.innerHTML = `
    <div class="translate-result ${statusClass}" style="animation: slideUpIn 0.4s ease-out;">
      <div class="translate-result-header">
        <span class="translate-result-icon">${statusIcon}</span>
        <span class="translate-result-status">${statusText}</span>
      </div>
      
      ${!isCorrect ? `
        <div class="translate-comparison">
          <div class="translate-user-answer">
            <span class="translate-label">Ta réponse :</span>
            <span class="translate-answer-text ${statusClass}">${userAnswer || '(vide)'}</span>
          </div>
          <div class="translate-correct-answer">
            <span class="translate-label">Réponse correcte :</span>
            <span class="translate-answer-text correct">${correctAnswer}</span>
          </div>
        </div>
      ` : `
        <div class="translate-correct-confirmation">
          <span class="translate-answer-text correct">${correctAnswer}</span>
        </div>
      `}
      
      <div class="translate-full-pair">
        <div class="translate-pair-row">
          <span class="translate-pair-flag">🇪🇸</span>
          <span class="translate-pair-text">${currentPhrase.es}</span>
          <button class="translate-pair-audio" data-speak="${currentPhrase.es}">🔊</button>
        </div>
        <div class="translate-pair-row">
          <span class="translate-pair-flag">🇫🇷</span>
          <span class="translate-pair-text">${currentPhrase.fr}</span>
        </div>
      </div>
      
      <div class="translate-explanation">
        <div class="translate-explanation-title">💡 Explication</div>
        <div class="translate-explanation-text">${currentPhrase.explanation}</div>
        ${keywordsHtml ? `
          <div class="translate-keywords">
            <span class="translate-keywords-label">Mots clés :</span>
            ${keywordsHtml}
          </div>
        ` : ''}
      </div>
      
      <button class="btn btn-primary translate-next-btn" id="next-btn" style="width: 100%; margin-top: var(--space-lg);">
        Phrase suivante →
      </button>
    </div>
  `;

  // Attach events
  setTimeout(() => {
    resultArea.querySelector('#next-btn')?.addEventListener('click', () => {
      loadNewPhrase(el);
    });
    
    resultArea.querySelectorAll('[data-speak]').forEach(btn => {
      btn.addEventListener('click', () => speak(btn.dataset.speak));
    });
  }, 0);
}
