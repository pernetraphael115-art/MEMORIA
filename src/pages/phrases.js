import { phrasesData, phraseCategories } from '../data/phrases/index.js';
import { speak } from '../core/audio.js';

let activeTab = 'everyday';
let activeCategory = null;

export async function renderPhrases() {
  const el = document.createElement('div');
  
  el.innerHTML = `
    <div class="page-header">
      <h1>Phrases & Expressions 💬</h1>
      <p class="subtitle">Des trucs utiles que les gens disent vraiment</p>
    </div>
    
    <div style="padding: 0 var(--space-md);">
      <div style="display: flex; gap: var(--space-sm); margin-bottom: var(--space-md);">
        <button class="btn ${activeTab === 'everyday' ? 'btn-primary' : 'btn-secondary'}" data-tab="everyday" style="flex: 1;">
          🗣️ Phrases utiles
        </button>
        <button class="btn ${activeTab === 'idioms' ? 'btn-primary' : 'btn-secondary'}" data-tab="idioms" style="flex: 1;">
          🎭 Expressions
        </button>
      </div>
    </div>
    
    <div id="category-chips" style="padding: 0 var(--space-md);"></div>
    <div id="phrases-list" style="margin-top: var(--space-md);"></div>
  `;

  setTimeout(() => {
    // Tab switching
    el.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.dataset.tab;
        activeCategory = null;
        el.querySelectorAll('[data-tab]').forEach(b => {
          b.className = `btn ${b.dataset.tab === activeTab ? 'btn-primary' : 'btn-secondary'}`;
          b.style.flex = '1';
        });
        renderCategories(el);
        renderPhrasesList(el);
      });
    });
    
    renderCategories(el);
    renderPhrasesList(el);
  }, 0);

  return el;
}

function renderCategories(el) {
  const container = el.querySelector('#category-chips');
  const cats = phraseCategories[activeTab] || [];
  
  container.innerHTML = `
    <div class="chip-group">
      <button class="chip ${!activeCategory ? 'active' : ''}" data-cat="all">Toutes</button>
      ${cats.map(c => `
        <button class="chip ${activeCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
          ${c.emoji} ${c.name}
        </button>
      `).join('')}
    </div>
  `;
  
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.cat === 'all' ? null : chip.dataset.cat;
      renderPhrasesList(el);
    });
  });
}

function renderPhrasesList(el) {
  const container = el.querySelector('#phrases-list');
  let items = phrasesData[activeTab] || [];
  
  if (activeCategory) {
    items = items.filter(p => p.category === activeCategory);
  }
  
  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">💬</div>
        <div class="empty-title">Aucune phrase</div>
        <div class="empty-text">Sélectionne une autre catégorie.</div>
      </div>
    `;
    return;
  }
  
  if (activeTab === 'everyday') {
    container.innerHTML = items.map(p => {
      const situationsHtml = (p.situations || []).map(s => `
        <div class="phrase-situation">💡 ${s}</div>
      `).join('');
      
      return `
      <div class="phrase-card">
        <div class="phrase-es">${p.es}</div>
        <div class="phrase-fr">${p.fr}</div>
        <div class="phrase-context">📍 ${p.context}</div>
        ${situationsHtml ? `<div class="phrase-situations">${situationsHtml}</div>` : ''}
        <div style="display: flex; align-items: center; gap: var(--space-sm); margin-top: var(--space-sm);">
          <button class="phrase-audio-btn" data-speak="${p.es}">🔊 Écouter</button>
          <span class="level-tag ${p.level}">${p.level.toUpperCase()}</span>
        </div>
      </div>
    `}).join('');
  } else {
    container.innerHTML = items.map(p => {
      const situationsHtml = (p.situations || []).map(s => `
        <div class="phrase-situation">💡 ${s}</div>
      `).join('');
      
      return `
      <div class="phrase-card">
        <div class="phrase-es" style="font-size: var(--font-lg);">${p.es}</div>
        <div class="phrase-fr" style="font-weight: 600; color: var(--accent-primary-light);">${p.fr}</div>
        <div class="phrase-literal">📖 Litt. : "${p.literal}"</div>
        <div style="font-size: var(--font-xs); color: var(--text-secondary); margin-top: var(--space-xs);">
          ${p.equivalent}
        </div>
        <div class="phrase-context">📍 ${p.context}</div>
        ${situationsHtml ? `<div class="phrase-situations">${situationsHtml}</div>` : ''}
        <div style="display: flex; align-items: center; gap: var(--space-sm); margin-top: var(--space-sm);">
          <button class="phrase-audio-btn" data-speak="${p.es}">🔊 Écouter</button>
          <span class="level-tag ${p.level}">${p.level.toUpperCase()}</span>
        </div>
      </div>
    `}).join('');
  }
  
  // Audio
  container.querySelectorAll('[data-speak]').forEach(btn => {
    btn.addEventListener('click', () => speak(btn.dataset.speak));
  });
}
