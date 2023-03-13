const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');


startBtn.addEventListener("click", handleClick);
stopBtn.addEventListener("click", handleClick);

let nIntervId; // jak to należy zadeklarować ?

function startBtn() {
        if (!nIntervId) {
      nIntervId = setInterval(getRandomHexColor, 1000);
      buttonStart.disabled = true;
    }
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function stopBtn() {
    clearInterval(nIntervId);
       nIntervId = null;
       buttonStart.disabled = false;
  }

