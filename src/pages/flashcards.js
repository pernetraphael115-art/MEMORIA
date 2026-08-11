import { vocabularyData, getVocabByLevel } from '../data/vocabulary/index.js';
import { speak } from '../core/audio.js';
import { createSRSCard } from '../core/srs.js';
import db from '../core/db.js';
import { showToast, updateNavBadge } from '../main.js';

let currentDeck = []; // Array of { card, direction } objects
let currentIndex = 0;
let isFlipped = false;
let selectedLevel = 'a1';

export async function renderFlashcards() {
  const el = document.createElement('div');
  
  el.innerHTML = `
    <div class="page-header">
      <h1>Flash Cards 🃏</h1>
      <p class="subtitle">Apprends du vocabulaire avec la répétition espacée</p>
    </div>
    
    <div style="padding: 0 var(--space-md);">
      <div class="chip-group" id="level-chips">
        <button class="chip ${selectedLevel === 'a1' ? 'active' : ''}" data-level="a1">A1</button>
        <button class="chip ${selectedLevel === 'a2' ? 'active' : ''}" data-level="a2">A2</button>
        <button class="chip ${selectedLevel === 'b1' ? 'active' : ''}" data-level="b1">B1</button>
        <button class="chip ${selectedLevel === 'b2' ? 'active' : ''}" data-level="b2">B2</button>
        <button class="chip" data-level="all">Tous</button>
      </div>
    </div>
    
    <div id="flashcard-area"></div>
  `;

  setTimeout(() => {
    el.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        el.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedLevel = chip.dataset.level;
        loadCards(el);
      });
    });
    
    loadCards(el);
  }, 0);

  return el;
}

/**
 * Fisher-Yates shuffle — proper random shuffle
 */
function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build the deck: each word appears twice (ES→FR and FR→ES),
 * but we guarantee the same word never appears in both directions
 * back-to-back. We also shuffle so the order is always different.
 */
function buildDeck(words) {
  // Create two entries per word
  const esfrEntries = words.map(w => ({ card: w, direction: 'es→fr' }));
  const fresEntries = words.map(w => ({ card: w, direction: 'fr→es' }));
  
  // Shuffle each half independently
  const shuffledEsfr = shuffle(esfrEntries);
  const shuffledFres = shuffle(fresEntries);
  
  // Interleave: take from ES→FR and FR→ES alternately, 
  // but with some randomness and spacing
  const deck = [];
  let ei = 0, fi = 0;
  const usedRecently = new Set(); // track last few words to avoid proximity
  
  while (ei < shuffledEsfr.length || fi < shuffledFres.length) {
    // Build candidates from both pools
    const candidates = [];
    
    if (ei < shuffledEsfr.length) {
      candidates.push({ pool: 'esfr', entry: shuffledEsfr[ei], idx: ei });
    }
    if (fi < shuffledFres.length) {
      candidates.push({ pool: 'fres', entry: shuffledFres[fi], idx: fi });
    }
    
    // Prefer candidates whose word wasn't used in the last 5 cards
    const safe = candidates.filter(c => !usedRecently.has(c.entry.card.es));
    const pick = safe.length > 0
      ? safe[Math.floor(Math.random() * safe.length)]
      : candidates[Math.floor(Math.random() * candidates.length)];
    
    deck.push(pick.entry);
    
    // Track recent words (sliding window of 5)
    usedRecently.add(pick.entry.card.es);
    if (usedRecently.size > 5) {
      const oldest = usedRecently.values().next().value;
      usedRecently.delete(oldest);
    }
    
    // Advance the index of the pool we picked from
    if (pick.pool === 'esfr') {
      ei++;
    } else {
      fi++;
    }
  }
  
  return deck;
}

function loadCards(el) {
  const words = selectedLevel === 'all' ? [...vocabularyData] : getVocabByLevel(selectedLevel);
  
  currentDeck = buildDeck(words);
  currentIndex = 0;
  isFlipped = false;
  
  renderCard(el);
}

function renderCard(el) {
  const area = el.querySelector('#flashcard-area');
  if (!area) return;
  
  if (currentIndex >= currentDeck.length) {
    const totalWords = currentDeck.length / 2;
    area.innerHTML = `
      <div class="review-summary">
        <div class="summary-icon">🎉</div>
        <h2>Série terminée !</h2>
        <p style="color: var(--text-secondary); margin-top: var(--space-sm);">
          Tu as vu ${totalWords} mots dans les deux sens.
        </p>
        <button class="btn btn-primary" id="restart-btn" style="margin-top: var(--space-xl);">
          Recommencer
        </button>
      </div>
    `;
    setTimeout(() => {
      area.querySelector('#restart-btn')?.addEventListener('click', () => loadCards(el));
    }, 0);
    return;
  }
  
  const { card, direction: dir } = currentDeck[currentIndex];
  isFlipped = false;
  
  // Build front and back based on direction
  const isEsToFr = dir === 'es→fr';
  const dirLabel = isEsToFr ? '🇪🇸 → 🇫🇷' : '🇫🇷 → 🇪🇸';
  const frontWord = isEsToFr ? card.es : card.fr;
  const backWord = isEsToFr ? card.fr : card.es;
  const frontPrompt = isEsToFr ? 'Traduis en français' : 'Traduis en espagnol';
  
  // Pick examples to show (2 max)
  const examples = card.examples || (card.example ? [card.example] : []);
  const examplesHtml = examples.slice(0, 2).map(ex => `<div class="flashcard-example">"${ex}"</div>`).join('');
  
  area.innerHTML = `
    <div class="flashcard-progress">
      <span>${currentIndex + 1}/${currentDeck.length}</span>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${((currentIndex + 1) / currentDeck.length) * 100}%"></div>
      </div>
    </div>
    
    <div class="flashcard-direction-badge">${dirLabel}</div>
    
    <div class="flashcard-container">
      <div class="flashcard" id="flashcard">
        <div class="flashcard-face flashcard-front">
          ${isEsToFr ? `<button class="flashcard-audio-btn" id="audio-btn-front">🔊</button>` : ''}
          <span class="flashcard-category">
            <span class="level-tag ${card.level}">${card.level.toUpperCase()}</span>
          </span>
          <div class="flashcard-word">${frontWord}</div>
          ${!isEsToFr && card.gender !== 'n' ? `<div style="font-size: var(--font-sm); color: var(--text-tertiary);">Devine le mot espagnol</div>` : ''}
          ${isEsToFr && card.gender !== 'n' ? `<div style="font-size: var(--font-sm); color: var(--text-tertiary);">${card.gender === 'm' ? '(masculin)' : '(féminin)'}</div>` : ''}
          <div class="flashcard-hint">${frontPrompt}</div>
        </div>
        <div class="flashcard-face flashcard-back">
          ${isEsToFr ? '' : `<button class="flashcard-audio-btn" id="audio-btn-back">🔊</button>`}
          <span class="flashcard-category">
            <span class="level-tag ${card.level}">${card.level.toUpperCase()}</span>
          </span>
          <div class="flashcard-translation">${backWord}</div>
          ${!isEsToFr && card.gender !== 'n' ? `<div style="font-size: var(--font-sm); color: var(--text-tertiary); margin-bottom: var(--space-sm);">${card.gender === 'm' ? '(masculin)' : '(féminin)'}</div>` : ''}
          ${examplesHtml}
        </div>
      </div>
    </div>
    
    <div class="flashcard-actions" id="card-actions" style="opacity: 0; pointer-events: none; transition: opacity 0.3s;">
      <button class="flashcard-action-btn btn-fail" data-quality="1">
        <span>😵</span>
        <span>Raté</span>
      </button>
      <button class="flashcard-action-btn btn-hard" data-quality="3">
        <span>🤔</span>
        <span>Difficile</span>
      </button>
      <button class="flashcard-action-btn btn-good" data-quality="4">
        <span>😊</span>
        <span>Bien</span>
      </button>
      <button class="flashcard-action-btn btn-easy" data-quality="5">
        <span>🤩</span>
        <span>Facile</span>
      </button>
    </div>
  `;

  setTimeout(() => {
    const flashcard = area.querySelector('#flashcard');
    const actions = area.querySelector('#card-actions');
    
    // Flip card
    flashcard?.addEventListener('click', (e) => {
      if (e.target.closest('.flashcard-audio-btn')) return;
      isFlipped = !isFlipped;
      flashcard.classList.toggle('flipped', isFlipped);
      
      if (isFlipped) {
        actions.style.opacity = '1';
        actions.style.pointerEvents = 'auto';
        // Auto-play audio when revealing the Spanish side
        if (!isEsToFr) {
          speak(card.es);
        }
      }
    });
    
    // Audio buttons
    area.querySelector('#audio-btn-front')?.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(card.es);
    });
    area.querySelector('#audio-btn-back')?.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(card.es);
    });
    
    // Quality buttons
    area.querySelectorAll('.flashcard-action-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const quality = parseInt(btn.dataset.quality);
        const succeeded = quality >= 3;
        
        if (!succeeded) {
          // Failed: re-insert this card a few positions later so user retries
          const retryEntry = { card, direction: dir };
          const retryPos = Math.min(currentIndex + 3 + Math.floor(Math.random() * 3), currentDeck.length);
          currentDeck.splice(retryPos, 0, retryEntry);
        }
        
        // Save/update SRS card
        const cardId = `vocab-${card.es}`;
        let srsCard = await db.cards.get(cardId);
        
        if (!srsCard) {
          srsCard = createSRSCard(cardId, 'vocabulary', {
            es: card.es,
            fr: card.fr,
            examples: card.examples || (card.example ? [card.example] : []),
            level: card.level,
          });
        }
        
        // Apply SRS
        const { calculateNextReview } = await import('../core/srs.js');
        const updated = calculateNextReview(srsCard, quality);
        await db.cards.put(updated);
        
        // Record study
        const { recordStudy } = await import('../core/db.js');
        await recordStudy(succeeded, 0);
        
        await updateNavBadge();
        
        // Move to next card
        currentIndex++;
        renderCard(el);
      });
    });
  }, 0);
}
