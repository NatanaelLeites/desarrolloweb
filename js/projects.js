const projectsData = [
  {
    id: 'al-punto',
    category: 'webapp',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    repoUrl: 'https://github.com/tu-usuario',
    liveUrl: '#',
    title: {
      es: 'Al Punto — Viandas Saludables',
      en: 'Al Punto — Healthy Meal Delivery',
      pt: 'Al Punto — Marmitas Saudáveis',
    },
    description: {
      es: 'Aplicación web de pedidos con carrito interactivo, envío directo por WhatsApp y panel de administración conectado a Firebase.',
      en: 'Food ordering web app featuring an interactive cart, direct WhatsApp checkout, and a Firebase-backed admin dashboard.',
      pt: 'Aplicação web de pedidos com carrinho interativo, envio direto pelo WhatsApp e painel administrativo conectado ao Firebase.',
    },
  },
  {
    id: 'rmm-fisioterapia',
    category: 'landing',
    tags: ['HTML', 'CSS', 'JavaScript', 'Mobile-First'],
    repoUrl: 'https://github.com/tu-usuario',
    liveUrl: '#',
    title: {
      es: 'RMM Fisioterapia',
      en: 'RMM Physiotherapy',
      pt: 'RMM Fisioterapia',
    },
    description: {
      es: 'Sitio web profesional orientado a pacientes, deportistas y clubes, diseñado con navegación clara y enfoque en conversión.',
      en: 'Professional website tailored for patients, athletes, and sports clubs, built with clear navigation and conversion focus.',
      pt: 'Site profissional voltado para pacientes, atletas e clubes esportivos, projetado com navegação clara e foco em conversão.',
    },
  },
  {
    id: 'dividend-calc',
    category: 'webapp',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    repoUrl: 'https://github.com/tu-usuario',
    liveUrl: '#',
    title: {
      es: 'Calculadora de Dividendos (BR)',
      en: 'Brazilian Dividend Calculator',
      pt: 'Calculadora de Dividendos (BR)',
    },
    description: {
      es: 'Herramienta financiera en portugués integrada con API de mercado en tiempo real para proyectar ingresos por dividendos.',
      en: 'Portuguese-language financial tool integrated with a real-time market API to project dividend income.',
      pt: 'Ferramenta financeira integrada a uma API de mercado em tempo real para projetar renda com dividendos.',
    },
  },
  {
    id: 'work-tracker',
    category: 'webapp',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase Realtime'],
    repoUrl: 'https://github.com/tu-usuario',
    liveUrl: '#',
    title: {
      es: 'Control de Horas y Gastos',
      en: 'Work Hours & Expense Tracker',
      pt: 'Controle de Horas e Despesas',
    },
    description: {
      es: 'Aplicación colaborativa en tiempo real para registrar jornadas laborales, horas extras y liquidaciones compartidas.',
      en: 'Real-time collaborative web app to log work shifts, overtime, and shared expense settlements.',
      pt: 'Aplicação colaborativa em tempo real para registrar jornadas de trabalho, horas extras e acertos compartilhados.',
    },
  },
];

const uiLabels = {
  es: { webapp: 'Web App', landing: 'Sitio Web', code: 'Código', demo: 'Demo' },
  en: { webapp: 'Web App', landing: 'Website', code: 'Code', demo: 'Live' },
  pt: { webapp: 'Web App', landing: 'Site', code: 'Código', demo: 'Demo' },
};

let activeFilter = 'all';
let activeLang = 'es';

export function renderProjects(lang = activeLang) {
  activeLang = lang;
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const labels = uiLabels[lang] || uiLabels.es;
  const filtered =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((item) => item.category === activeFilter);

  grid.innerHTML = filtered
    .map(
      (project) => `
      <article class="project-card">
        <div>
          <div class="project-top">
            <span class="project-category">${labels[project.category]}</span>
            <div class="project-links">
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="${labels.code}">
                ${labels.code}
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="${labels.demo}">
                ${labels.demo} ↗
              </a>
            </div>
          </div>
          <h3 class="project-title">${project.title[lang] || project.title.es}</h3>
          <p class="project-desc">${project.description[lang] || project.description.es}</p>
        </div>
        <ul class="project-tags">
          ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
        </ul>
      </article>
    `
    )
    .join('');
}

export function initProjects() {
  renderProjects(activeLang);

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProjects(activeLang);
    });
  });
}