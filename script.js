// Agrega un saludo dinámico según la hora del día en el encabezado
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.profile-header p');
  const hour = new Date().getHours();
  
  let greeting = '¡Bienvenido a mi perfil!';
  if (hour >= 6 && hour < 12) {
    greeting = '¡Buenos días! Conéctate conmigo aquí:';
  } else if (hour >= 12 && hour < 20) {
    greeting = '¡Buenas tardes! Conéctate conmigo aquí:';
  } else {
    greeting = '¡Buenas noches! Conéctate conmigo aquí:';
  }

  if (header) {
    header.textContent = greeting;
  }
});
