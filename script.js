document.addEventListener('DOMContentLoaded', () => {
  // Detectar si el usuario viene desde una URL específica (ej. https://pacureok.github.io/social/?from=YT o ?ref=youtube)
  const urlParams = new URLSearchParams(window.location.search);
  const source = urlParams.get('from') || urlParams.get('ref') || urlParams.get('src');

  const banner = document.getElementById('referrer-banner');

  if (source && banner) {
    const cleanSource = source.toUpperCase();
    
    // Muestra un mensaje personalizado indicando desde dónde vinieron
    banner.textContent = `¡Gracias por venir desde ${cleanSource}! 👋`;
    banner.classList.remove('hidden');
  }
});
