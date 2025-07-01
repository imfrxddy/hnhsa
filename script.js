const empezarBtn = document.getElementById('empezar-btn');
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaMensajes = document.getElementById('pantalla-mensajes');
const mensajesDiv = document.getElementById('mensajes');
const musica = document.getElementById('musica');
const corazonesContainer = document.getElementById('corazones');

// Mensajes personalizados ❤️
const mensajes = [
  "Hola, mi amor 💖",
  "Sé que hoy estás triste... y eso me parte el alma 💔",
  "Solo quiero recordarte que eres una persona increíble ✨",
  "Estoy aquí para ti, siempre 🫂",
  "Mereces toda la felicidad del mundo 🌎",
  "Gracias por existir 🌸",
  "Espero que esta pequeña sorpresa te saque una sonrisa 😊",
  "Te amo, con todo mi corazón ❤️"
];

function mostrarMensajes() {
  let i = 0;
  const intervalo = setInterval(() => {
    if (i >= mensajes.length) {
      clearInterval(intervalo);
      return;
    }
    const msg = document.createElement('div');
    msg.classList.add('mensaje');
    msg.textContent = mensajes[i];
    mensajesDiv.appendChild(msg);
    mensajesDiv.scrollTop = mensajesDiv.scrollHeight;
    i++;
  }, 2000); // cada 2 segundos
}

function lanzarCorazones() {
  setInterval(() => {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = '💗';
    corazon.style.left = `${Math.random() * 100}%`;
    corazon.style.fontSize = `${20 + Math.random() * 20}px`;
    corazonesContainer.appendChild(corazon);
    setTimeout(() => corazon.remove(), 5000);
  }, 300);
}

empezarBtn.addEventListener('click', () => {
  pantallaInicio.style.display = 'none';
  pantallaMensajes.style.display = 'flex';
  musica.play();
  mostrarMensajes();
  lanzarCorazones();
});
