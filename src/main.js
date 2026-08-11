/* ============================================
   MÉMORÍA — Main Entry Point
   ============================================ */

import './styles/index.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/animations.css';

import { initRouter, route, navigate } from './core/router.js';
import { initAudio } from './core/audio.js';
import db, { initDB } from './core/db.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderCourses } from './pages/courses.js';
import { renderLesson } from './pages/lesson.js';
import { renderFlashcards } from './pages/flashcards.js';
import { renderLexicon } from './pages/lexicon.js';
import { renderPhrases } from './pages/phrases.js';
import { renderReview } from './pages/review.js';
import { renderStats } from './pages/stats.js';
import { getDueCount } from './core/srs.js';

// Build app shell
async function initApp() {
  const app = document.getElementById('app');
  
  // Initialize database
  await initDB();
  
  // Initialize audio
  initAudio();
  
  // Get due cards count for nav badge
  const allCards = await db.cards.toArray();
  const dueCount = getDueCount(allCards);
  
  // Create navigation
  app.innerHTML = `
    <nav class="bottom-nav" id="bottom-nav">
      <button class="nav-item active" data-path="/" id="nav-home">
        <span class="nav-icon">🏠</span>
        <span>Accueil</span>
      </button>
      <button class="nav-item" data-path="/courses" id="nav-courses">
        <span class="nav-icon">📖</span>
        <span>Cours</span>
      </button>
      <button class="nav-item" data-path="/review" id="nav-review">
        <span class="nav-icon">🔄</span>
        <span>Réviser</span>
        ${dueCount > 0 ? `<span class="nav-badge">${dueCount > 99 ? '99+' : dueCount}</span>` : ''}
      </button>
      <button class="nav-item" data-path="/vocab" id="nav-vocab">
        <span class="nav-icon">🃏</span>
        <span>Vocab</span>
      </button>
      <button class="nav-item" data-path="/phrases" id="nav-phrases">
        <span class="nav-icon">💬</span>
        <span>Phrases</span>
      </button>
    </nav>
  `;
  
  // Nav click handlers
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      navigate(item.dataset.path);
    });
  });
  
  // Register routes
  route('/', renderDashboard);
  route('/courses', renderCourses);
  route('/lesson', renderLesson);
  route('/flashcards', renderFlashcards);
  route('/vocab', renderLexicon);
  route('/phrases', renderPhrases);
  route('/review', renderReview);
  route('/stats', renderStats);
  
  // Initialize router
  initRouter();
}

// Update nav badge periodically
export async function updateNavBadge() {
  const allCards = await db.cards.toArray();
  const dueCount = getDueCount(allCards);
  const reviewNav = document.getElementById('nav-review');
  
  if (reviewNav) {
    const existingBadge = reviewNav.querySelector('.nav-badge');
    if (existingBadge) existingBadge.remove();
    
    if (dueCount > 0) {
      const badge = document.createElement('span');
      badge.className = 'nav-badge';
      badge.textContent = dueCount > 99 ? '99+' : dueCount;
      reviewNav.appendChild(badge);
    }
  }
}

// Show toast notification
export function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Start the app
initApp().catch(console.error);

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swPath = import.meta.env.BASE_URL + 'sw.js';
    navigator.serviceWorker.register(swPath)
      .then((reg) => {
        console.log('✅ Service Worker registered', reg.scope);
      })
      .catch((err) => {
        console.warn('Service Worker registration failed:', err);
      });
  });
}
