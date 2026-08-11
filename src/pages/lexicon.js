import { vocabularyData, themes, searchVocab } from '../data/vocabulary/index.js';
import { speak } from '../core/audio.js';

let activeTheme = null;
let activeLevel = null;

export async function renderLexicon() {
  const el = document.createElement('div');
  
  el.innerHTML = `
    <div class="page-header">
      <h1>Lexique 📚</h1>
      <p class="subtitle">${vocabularyData.length} mots à explorer</p>
    </div>
    
    <div style="padding: 0 var(--space-md); margin-bottom: var(--space-md);">
      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" id="search-input" placeholder="Chercher un mot..." autocomplete="off" />
      </div>
    </div>
    
    <div style="padding: 0 var(--space-md);">
      <div class="chip-group" id="level-filter">
        <button class="chip active" data-level="all">Tous</button>
        <button class="chip" data-level="a1">A1</button>
        <button class="chip" data-level="a2">A2</button>
        <button class="chip" data-level="b1">B1</button>
        <button class="chip" data-level="b2">B2</button>
      </div>
    </div>
    
    <div style="padding: 0 var(--space-md); margin-top: var(--space-sm);">
      <div class="chip-group" id="theme-filter" style="flex-wrap: wrap;">
        <button class="chip active" data-theme="all">Tous les thèmes</button>
        ${themes.map(t => `<button class="chip" data-theme="${t.id}">${t.emoji} ${t.name}</button>`).join('')}
      </div>
    </div>
    
    <div id="word-list" class="lexicon-list" style="margin-top: var(--space-md);"></div>
    <div id="word-count" style="text-align: center; padding: var(--space-md); font-size: var(--font-xs); color: var(--text-tertiary);"></div>
  `;

  setTimeout(() => {
    const searchInput = el.querySelector('#search-input');
    const wordList = el.querySelector('#word-list');
    const wordCount = el.querySelector('#word-count');
    
    function renderWords() {
      let words = [...vocabularyData];
      
      // Filter by search
      const query = searchInput.value.trim();
      if (query) {
        words = searchVocab(query);
      }
      
      // Filter by level
      if (activeLevel && activeLevel !== 'all') {
        words = words.filter(w => w.level === activeLevel);
      }
      
      // Filter by theme
      if (activeTheme && activeTheme !== 'all') {
        words = words.filter(w => w.theme === activeTheme);
      }
      
      wordCount.textContent = `${words.length} mot${words.length > 1 ? 's' : ''} trouvé${words.length > 1 ? 's' : ''}`;
      
      if (words.length === 0) {
        wordList.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">🔍</div>
            <div class="empty-title">Aucun résultat</div>
            <div class="empty-text">Essaie un autre terme de recherche ou filtre.</div>
          </div>
        `;
        return;
      }
      
      wordList.innerHTML = words.map(w => {
        const exs = w.examples || (w.example ? [w.example] : []);
        return `
        <div class="lexicon-item" data-word="${w.es}">
          <div style="flex: 1; min-width: 0;">
            <div class="lexicon-word">
              <div class="es">${w.es} ${w.gender !== 'n' ? `<span class="gender">(${w.gender === 'm' ? 'm.' : 'f.'})</span>` : ''}</div>
              <div class="fr">${w.fr}</div>
            </div>
            ${exs.length > 0 ? `<div class="lexicon-examples">${exs.map(ex => `<div class="lexicon-example">"${ex}"</div>`).join('')}</div>` : ''}
          </div>
          <span class="level-tag ${w.level}">${w.level.toUpperCase()}</span>
          <button class="phrase-audio-btn" data-speak="${w.es}" style="margin: 0;">🔊</button>
        </div>
      `}).join('');
      
      // Audio buttons
      wordList.querySelectorAll('[data-speak]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          speak(btn.dataset.speak);
        });
      });
    }
    
    // Search
    searchInput.addEventListener('input', renderWords);
    
    // Level filter
    el.querySelectorAll('#level-filter .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        el.querySelectorAll('#level-filter .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeLevel = chip.dataset.level;
        renderWords();
      });
    });
    
    // Theme filter
    el.querySelectorAll('#theme-filter .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        el.querySelectorAll('#theme-filter .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeTheme = chip.dataset.theme;
        renderWords();
      });
    });
    
    renderWords();
  }, 0);

  return el;
}
