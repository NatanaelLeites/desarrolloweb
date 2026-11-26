let currentLocale = 'es-UY';

const localeMap = {
  es: 'es-UY',
  en: 'en-US',
  pt: 'pt-BR',
};

export function setClockLocale(lang) {
  currentLocale = localeMap[lang] || 'es-UY';
  updateClock();
}

function updateClock() {
  const dateEl = document.getElementById('live-date');
  const timeEl = document.getElementById('live-time');
  if (!dateEl || !timeEl) return;

  const now = new Date();

  const dateStr = new Intl.DateTimeFormat(currentLocale, {
    timeZone: 'America/Montevideo',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(now);

  const timeStr = new Intl.DateTimeFormat(currentLocale, {
    timeZone: 'America/Montevideo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now);

  dateEl.textContent = dateStr;
  timeEl.textContent = timeStr;
}

export function initClock() {
  updateClock();
  setInterval(updateClock, 1000);
}