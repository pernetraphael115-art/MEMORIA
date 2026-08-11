import { grammarA1 } from './a1.js';
import { grammarA2 } from './a2.js';
import { grammarB1 } from './b1.js';
import { grammarB2 } from './b2.js';

export const grammarData = [...grammarA1, ...grammarA2, ...grammarB1, ...grammarB2];

export function getLessonsByLevel(level) {
  return grammarData.filter(l => l.level === level);
}

export function getLessonById(id) {
  return grammarData.find(l => l.id === id);
}

export const levels = [
  { id: 'a1', name: 'A1 — Débutant', desc: 'Les bases de l\'espagnol', color: 'var(--color-a1)', lessons: grammarA1.length },
  { id: 'a2', name: 'A2 — Élémentaire', desc: 'Communiquer au quotidien', color: 'var(--color-a2)', lessons: grammarA2.length },
  { id: 'b1', name: 'B1 — Intermédiaire', desc: 'S\'exprimer avec aisance', color: 'var(--color-b1)', lessons: grammarB1.length },
  { id: 'b2', name: 'B2 — Avancé', desc: 'Maîtriser les nuances', color: 'var(--color-b2)', lessons: grammarB2.length },
];
