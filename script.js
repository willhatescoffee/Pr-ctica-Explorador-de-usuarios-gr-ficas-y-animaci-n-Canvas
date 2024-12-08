const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Configuración inicial para la animación
let angle = 0; // Ángulo inicial
const centerX = canvas.width / 2; // Centro del lienzo en X
const centerY = canvas.height / 2; // Centro del lienzo en Y
const radius = 80; // Radio del círculo mayor
const ballRadius = 15; // Radio de la bola amarilla
const speed = 0.05; // Velocidad de rotación

// Función para animar
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const ballX = centerX + radius * Math.cos(angle);
  const ballY = centerY + radius * Math.sin(angle);

  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.closePath();

  angle += speed;
  requestAnimationFrame(animate);
}

// Función para obtener datos de la API
async function fetchRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const user = data.results[0];

  document.getElementById('userImage').src = user.picture.large;
  document.getElementById('userName').textContent = `Nombre: ${user.name.first} ${user.name.last}`;
  document.getElementById('userEmail').textContent = `Correo: ${user.email}`;
}

// Agregar evento al botón
document.getElementById('fetchDataBtn').addEventListener('click', fetchRandomUser);

// Iniciar la animación
animate();
