const feedbackMessages = {
  es: {
    copied: 'Correo copiado al portapapeles (nathaxx09@hotmail.com)',
    error: 'No se pudo copiar automáticamente. Podés escribir a nathaxx09@hotmail.com',
  },
  en: {
    copied: 'Email copied to clipboard (nathaxx09@hotmail.com)',
    error: 'Could not copy automatically. You can write to nathaxx09@hotmail.com',
  },
  pt: {
    copied: 'E-mail copiado para a área de transferência (nathaxx09@hotmail.com)',
    error: 'Não foi possível copiar automaticamente. Escreva para nathaxx09@hotmail.com',
  },
};

let activeLang = 'es';
const EMAIL = 'nathaxx09@hotmail.com';

export function setContactLocale(lang) {
  activeLang = feedbackMessages[lang] ? lang : 'es';
}

export function initContact() {
  const copyBtn = document.getElementById('copy-email-btn');
  const feedbackEl = document.getElementById('copy-feedback');
  if (!copyBtn || !feedbackEl) return;

  copyBtn.addEventListener('click', async () => {
    const msgs = feedbackMessages[activeLang] || feedbackMessages.es;

    try {
      await navigator.clipboard.writeText(EMAIL);
      feedbackEl.textContent = msgs.copied;
    } catch {
      feedbackEl.textContent = msgs.error;
    }
  });
}