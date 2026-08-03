document.addEventListener('DOMContentLoaded', () => {
  // Leer la URL exacta que está en la barra de direcciones del navegador
  const urlParams = new URLSearchParams(window.location.search);
  const fromValue = urlParams.get('from'); // Busca "?from=ALGO"
  
  // Si existe el parámetro "from" en la URL...
  if (fromValue) {
    const banner = document.getElementById('referrer-banner');
    
    if (banner) {
      // Pone el nombre en mayúsculas (ej: youtube -> YOUTUBE)
      const plataforma = fromValue.toUpperCase();
      
      // Escribe el texto
      banner.textContent = `¡Gracias por venir desde ${plataforma}! 👋`;
      
      // Fuerza a que el banner sea visible (cambia display: none a display: block)
      banner.style.display = 'block';
    }
  }
});
