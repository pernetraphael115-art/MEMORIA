import db, { getDashboardStats } from '../core/db.js';
import { getDueCount } from '../core/srs.js';
import { navigate } from '../core/router.js';
import { grammarData, levels } from '../data/grammar/index.js';

export async function renderDashboard() {
  const stats = await getDashboardStats();
  const allCards = await db.cards.toArray();
  const dueCount = getDueCount(allCards);
  
  // Calculate progress per level
  const completedLessons = await db.lessons.where('completed').equals(1).count();
  const totalLessons = grammarData.length;
  const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  
  // Greeting based on time
  const hour = new Date().getHours();
  let greeting = "Buenos días";
  if (hour >= 14 && hour < 21) greeting = "Buenas tardes";
  if (hour >= 21 || hour < 6) greeting = "Buenas noches";

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="dashboard-greeting slide-up">
      <h1>${greeting} ☀️</h1>
      <p class="greeting-sub">Continue ton apprentissage de l'espagnol</p>
    </div>

    ${stats.streak > 0 ? `
      <div style="padding: 0 var(--space-md); margin-bottom: var(--space-md);">
        <div class="streak-indicator">
          🔥 ${stats.streak} jour${stats.streak > 1 ? 's' : ''} consécutif${stats.streak > 1 ? 's' : ''}
        </div>
      </div>
    ` : ''}

    ${dueCount > 0 ? `
      <div class="dashboard-review-card slide-up" id="review-card" style="animation-delay: 100ms">
        <div class="review-count">${dueCount}</div>
        <div class="review-label">carte${dueCount > 1 ? 's' : ''} à réviser</div>
        <div class="review-cta">Commencer la révision →</div>
      </div>
    ` : `
      <div class="dashboard-review-card slide-up" style="animation-delay: 100ms; border-color: rgba(16, 185, 129, 0.2); background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.04));">
        <div style="font-size: var(--font-2xl); margin-bottom: var(--space-sm);">✅</div>
        <div class="review-label">Aucune carte à réviser !</div>
        <div class="review-cta" style="color: var(--color-success-light);">Tu es à jour 👏</div>
      </div>
    `}

    <div class="stats-grid stagger-children" style="margin-top: var(--space-lg);">
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-primary-light)">${stats.todayReviewed}</div>
        <div class="stat-label">Aujourd'hui</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--color-success-light)">${stats.totalCards}</div>
        <div class="stat-label">Cartes total</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-secondary-light)">${stats.masteredCards}</div>
        <div class="stat-label">Maîtrisées</div>
      </div>
    </div>

    <div class="dashboard-section" style="margin-top: var(--space-lg);">
      <div class="section-title">
        <h2>Progression globale</h2>
        <span class="section-link">${progressPercent}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-bar-fill animate" style="width: ${progressPercent}%"></div>
      </div>
    </div>

    <div class="dashboard-section" style="margin-top: var(--space-xl);">
      <div class="section-title">
        <h2>Continuer</h2>
      </div>
      <div class="stagger-children">
        <div class="card card-clickable" id="goto-courses" style="margin-bottom: var(--space-sm);">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="font-size: 1.5rem;">📖</div>
            <div style="flex:1;">
              <div style="font-weight: 600;">Cours de grammaire</div>
              <div style="font-size: var(--font-xs); color: var(--text-secondary);">${completedLessons}/${totalLessons} leçons terminées</div>
            </div>
            <div style="color: var(--text-muted);">→</div>
          </div>
        </div>
        <div class="card card-clickable" id="goto-flashcards" style="margin-bottom: var(--space-sm);">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="font-size: 1.5rem;">🃏</div>
            <div style="flex:1;">
              <div style="font-weight: 600;">Flash Cards</div>
              <div style="font-size: var(--font-xs); color: var(--text-secondary);">Apprends du vocabulaire</div>
            </div>
            <div style="color: var(--text-muted);">→</div>
          </div>
        </div>
        <div class="card card-clickable" id="goto-phrases" style="margin-bottom: var(--space-sm);">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="font-size: 1.5rem;">💬</div>
            <div style="flex:1;">
              <div style="font-weight: 600;">Phrases & Expressions</div>
              <div style="font-size: var(--font-xs); color: var(--text-secondary);">Parle comme un natif</div>
            </div>
            <div style="color: var(--text-muted);">→</div>
          </div>
        </div>
        <div class="card card-clickable" id="goto-stats">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="font-size: 1.5rem;">📊</div>
            <div style="flex:1;">
              <div style="font-weight: 600;">Statistiques</div>
              <div style="font-size: var(--font-xs); color: var(--text-secondary);">Suis ta progression</div>
            </div>
            <div style="color: var(--text-muted);">→</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  setTimeout(() => {
    el.querySelector('#review-card')?.addEventListener('click', () => navigate('/review'));
    el.querySelector('#goto-courses')?.addEventListener('click', () => navigate('/courses'));
    el.querySelector('#goto-flashcards')?.addEventListener('click', () => navigate('/flashcards'));
    el.querySelector('#goto-phrases')?.addEventListener('click', () => navigate('/phrases'));
    el.querySelector('#goto-stats')?.addEventListener('click', () => navigate('/stats'));
  }, 0);

  return el;
}
