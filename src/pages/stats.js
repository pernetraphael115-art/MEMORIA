import db from '../core/db.js';
import { grammarData } from '../data/grammar/index.js';

export async function renderStats() {
  const allCards = await db.cards.toArray();
  const completedLessons = await db.lessons.where('completed').equals(1).count();
  const totalLessons = grammarData.length;
  
  // Compute stats
  const totalCards = allCards.length;
  const masteredCards = allCards.filter(c => c.repetition >= 3 && c.efactor >= 2.5).length;
  const learningCards = allCards.filter(c => c.repetition > 0 && c.repetition < 3).length;
  const newCards = allCards.filter(c => c.repetition === 0).length;
  
  // Get daily stats from the last 7 days
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  const weekAgo = new Date(now - 7 * dayMs);
  weekAgo.setHours(0, 0, 0, 0);
  
  const weekStats = await db.dailyStats.where('date').above(weekAgo.toISOString().slice(0, 10)).toArray();
  
  // Calculate streak
  let streak = 0;
  const today = new Date().toISOString().slice(0, 10);
  const allStats = await db.dailyStats.orderBy('date').reverse().toArray();
  
  let checkDate = new Date();
  for (let i = 0; i < 365; i++) {
    const dateStr = checkDate.toISOString().slice(0, 10);
    const stat = allStats.find(s => s.date === dateStr);
    if (stat && stat.cardsReviewed > 0) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else if (dateStr === today) {
      checkDate.setDate(checkDate.getDate() - 1);
      continue;
    } else {
      break;
    }
  }
  
  // Week chart data
  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const chartData = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now - i * dayMs);
    const dateStr = d.toISOString().slice(0, 10);
    const stat = weekStats.find(s => s.date === dateStr);
    chartData.push({
      day: weekDays[d.getDay() === 0 ? 6 : d.getDay() - 1],
      count: stat ? stat.cardsReviewed : 0,
    });
  }
  const maxCount = Math.max(...chartData.map(d => d.count), 1);

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="page-header">
      <h1>Statistiques 📊</h1>
      <p class="subtitle">Suis ta progression</p>
    </div>
    
    ${streak > 0 ? `
      <div style="padding: 0 var(--space-md); margin-bottom: var(--space-md);">
        <div class="streak-indicator" style="font-size: var(--font-lg);">
          🔥 ${streak} jour${streak > 1 ? 's' : ''} consécutif${streak > 1 ? 's' : ''}
        </div>
      </div>
    ` : ''}

    <div class="stats-grid" style="grid-template-columns: repeat(2, 1fr);">
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-primary-light)">${totalCards}</div>
        <div class="stat-label">Cartes totales</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--color-success-light)">${masteredCards}</div>
        <div class="stat-label">Maîtrisées</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-secondary-light)">${learningCards}</div>
        <div class="stat-label">En cours</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--text-secondary)">${newCards}</div>
        <div class="stat-label">Nouvelles</div>
      </div>
    </div>

    <div class="dashboard-section" style="margin-top: var(--space-xl);">
      <div class="section-title">
        <h2>Cette semaine</h2>
      </div>
      <div class="card">
        <div class="week-chart">
          ${chartData.map(d => `
            <div class="chart-bar-container">
              <div class="chart-bar" style="height: ${d.count > 0 ? Math.max((d.count / maxCount) * 100, 8) : 4}%; ${d.count > 0 ? 'background: var(--gradient-primary);' : 'background: var(--bg-surface-2); min-height: 4px;'}">
              </div>
              <div class="chart-count">${d.count}</div>
              <div class="chart-day">${d.day}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="dashboard-section" style="margin-top: var(--space-xl);">
      <div class="section-title">
        <h2>Cours de grammaire</h2>
        <span class="section-link">${completedLessons}/${totalLessons}</span>
      </div>
      <div class="progress-bar" style="margin-bottom: var(--space-md);">
        <div class="progress-bar-fill animate" style="width: ${(completedLessons / totalLessons * 100)}%"></div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-sm);">
        ${['a1', 'a2', 'b1', 'b2'].map(level => {
          const total = grammarData.filter(l => l.level === level).length;
          return `
            <div class="stat-card" style="padding: var(--space-sm);">
              <div class="stat-value" style="font-size: var(--font-md); color: var(--color-${level})">${level.toUpperCase()}</div>
              <div class="stat-label">${total} leçons</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    ${totalCards > 0 ? `
    <div class="dashboard-section" style="margin-top: var(--space-xl);">
      <div class="section-title">
        <h2>Répartition SRS</h2>
      </div>
      <div class="card">
        <div class="srs-distribution">
          <div class="srs-segment" style="flex: ${Math.max(newCards, 1)}; background: var(--text-muted);" title="Nouvelles"></div>
          <div class="srs-segment" style="flex: ${Math.max(learningCards, 1)}; background: var(--accent-secondary-light);" title="En cours"></div>
          <div class="srs-segment" style="flex: ${Math.max(masteredCards, 1)}; background: var(--color-success-light);" title="Maîtrisées"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: var(--space-sm); font-size: var(--font-xs); color: var(--text-secondary);">
          <span>🟤 Nouvelles</span>
          <span>🟣 En cours</span>
          <span>🟢 Maîtrisées</span>
        </div>
      </div>
    </div>
    ` : ''}
  `;

  return el;
}
