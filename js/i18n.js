import { setClockLocale } from './clock.js';
import { renderProjects } from './projects.js';

const STORAGE_KEY = 'portfolio-lang';

const translations = {
  es: {
    'hero.badge': 'Disponible para proyectos freelance',
    'hero.title': 'Hola, soy Natanael. Construyo interfaces web limpias y funcionales.',
    'hero.subtitle':
      'Desarrollador Frontend enfocado en HTML, CSS y JavaScript moderno, creando aplicaciones rápidas, responsivas y fáciles de usar.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaContact': 'Hablemos',
    'stack.label': 'Tecnologías principales',
    'projects.title': 'Proyectos destacados',
    'projects.subtitle':
      'Aplicaciones reales creadas para resolver necesidades concretas de negocio, gestión y producto.',
    'projects.filterAll': 'Todos',
    'projects.filterWebapp': 'Web Apps',
    'projects.filterLanding': 'Sitios & Landing',
  },
  en: {
    'hero.badge': 'Available for freelance projects',
    'hero.title': "Hi, I'm Natanael. I build clean and functional web interfaces.",
    'hero.subtitle':
      'Frontend Developer focused on modern HTML, CSS, and JavaScript, crafting fast, responsive, and user-friendly applications.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': "Let's talk",
    'stack.label': 'Core technologies',
    'projects.title': 'Featured projects',
    'projects.subtitle':
      'Real-world applications built to solve concrete business, management, and product needs.',
    'projects.filterAll': 'All',
    'projects.filterWebapp': 'Web Apps',
    'projects.filterLanding': 'Sites & Landing',
  },
  pt: {
    'hero.badge': 'Disponível para projetos freelance',
    'hero.title': 'Olá, sou Natanael. Construo interfaces web limpas e funcionais.',
    'hero.subtitle':
      'Desenvolvedor Frontend focado em HTML, CSS e JavaScript moderno, criando aplicações rápidas, responsivas e fáceis de usar.',
    'hero.ctaProjects': 'Ver projetos',
    'hero.ctaContact': 'Vamos conversar',
    'stack.label': 'Tecnologias principais',
    'projects.title': 'Projetos em destaque',
    'projects.subtitle':
      'Aplicações reais criadas para resolver necessidades concretas de negócio, gestão e produto.',
    'projects.filterAll': 'Todos',
    'projects.filterWebapp': 'Web Apps',
    'projects.filterLanding': 'Sites & Landing',
  },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  setClockLocale(lang);
  renderProjects(lang);
}

export function initI18n() {
  const savedLang = localStorage.getItem(STORAGE_KEY) || 'es';
  applyLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.dataset.lang;
      localStorage.setItem(STORAGE_KEY, selectedLang);
      applyLanguage(selectedLang);
    });
  });
}