const STORAGE_KEY = 'portfolio-theme';

export function initTheme() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  root.setAttribute('data-theme', savedTheme);

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}