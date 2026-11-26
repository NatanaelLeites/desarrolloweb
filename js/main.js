import { initClock } from './clock.js';
import { initTheme } from './theme.js';
import { initProjects } from './projects.js';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initTheme();
  initProjects();
  initI18n();
});