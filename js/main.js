import { initClock } from './clock.js';
import { initTheme } from './theme.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initTheme();
  initProjects();
  initContact();
  initI18n();
});