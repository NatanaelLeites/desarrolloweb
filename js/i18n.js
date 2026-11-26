import { setClockLocale } from './clock.js';
import { renderProjects } from './projects.js';
import { setContactLocale } from './contact.js';

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
    'contact.title': 'Contacto',
    'contact.subtitle':
      '¿Tenés un proyecto, una idea o necesitás una web a medida? Escribime directo.',
    'contact.description':
      'Trabajo en interfaces web, landing pages y aplicaciones frontend enfocadas en rendimiento, claridad y experiencia real de usuario.',
    'contact.whatsapp': 'Escribir por WhatsApp',
    'contact.emailBtn': 'Enviar correo',
    'contact.copyEmail': 'Copiar email',
    'footer.rights': 'Natanael — Desarrollador Frontend. Hecho con HTML, CSS y JavaScript.',
    'footer.location': 'Montevideo, Uruguay',
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
    'contact.title': 'Contact',
    'contact.subtitle':
      'Have a project, an idea, or need a custom website? Reach out directly.',
    'contact.description':
      'I build web interfaces, landing pages, and frontend applications focused on performance, clarity, and real user experience.',
    'contact.whatsapp': 'Message on WhatsApp',
    'contact.emailBtn': 'Send email',
    'contact.copyEmail': 'Copy email',
    'footer.rights': 'Natanael — Frontend Developer. Built with HTML, CSS, and JavaScript.',
    'footer.location': 'Montevideo, Uruguay',
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
    'contact.title': 'Contato',
    'contact.subtitle':
      'Tem um projeto, uma ideia ou precisa de um site sob medida? Fale comigo direto.',
    'contact.description':
      'Desenvolvo interfaces web, landing pages e aplicações frontend com foco em desempenho, clareza e experiência real do usuário.',
    'contact.whatsapp': 'Chamar no WhatsApp',
    'contact.emailBtn': 'Enviar e-mail',
    'contact.copyEmail': 'Copiar e-mail',
    'footer.rights': 'Natanael — Desenvolvedor Frontend. Feito com HTML, CSS e JavaScript.',
    'footer.location': 'Montevidéu, Uruguai',
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
  setContactLocale(lang);
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