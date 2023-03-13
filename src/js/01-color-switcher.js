const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let myInterval = null; 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function start() {
  myInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor(); 
  }, 1000);
  startButton.disabled = true;
  }

function stop() {
  clearInterval(myInterval);
  startButton.disabled = false;
  }

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);