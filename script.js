const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const messagesDiv = document.getElementById('messages');
const messageText = document.getElementById('messageText');
const finalLetter = document.getElementById('finalLetter');
const music = document.getElementById('music');
const fireworksCanvas = document.getElementById('fireworks');
const ctx = fireworksCanvas.getContext('2d');

const messages = [
  "Eres el sueño que jamás quiero despertar. 🌙✨",
  "Tu risa es mi melodía favorita. 🎶💖",
  "Mi mundo entero empieza y termina en tus ojos. 👀💘",
  "Gracias por ser mi sol en los días grises. 🌞☁️",
  "Te amo más de lo que las palabras pueden expresar. 💕"
];

let currentMessage = 0;
let typingInterval;

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  messagesDiv.classList.remove('hidden');
  music.play();
  typeMessage(messages[currentMessage]);
});

nextBtn.addEventListener('click', () => {
  currentMessage++;
  if (currentMessage < messages.length) {
    typeMessage(messages[currentMessage]);
  } else {
    messagesDiv.classList.add('hidden');
    showFinalLetter();
    launchFireworks();
  }
});

// Máquina de escribir
function typeMessage(message) {
  clearInterval(typingInterval);
  let index = 0;
  messageText.textContent = '';
  typingInterval = setInterval(() => {
    if (index < message.length) {
      messageText.textContent += message.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50); // velocidad de escritura
}

// Mostrar carta final
function showFinalLetter() {
  finalLetter.classList.remove('hidden');
}

// Fuegos artificiales
function launchFireworks() {
  fireworksCanvas.classList.remove('hidden');
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;

  setInterval(() => {
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    for (let i = 0; i < 5; i++) {
      createHeartFirework();
    }
  }, 500);
}

function createHeartFirework() {
  const x = Math.random() * fireworksCanvas.width;
  const y = Math.random() * fireworksCanvas.height / 2;
  const size = Math.random() * 30 + 20;

  ctx.font = `${size}px Arial`;
  ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
  ctx.fillText("💖", x, y);
}
