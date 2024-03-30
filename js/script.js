console.log("It works!");

const form = document.getElementById("timerForm");
const count = document.getElementById("timerCount");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");

let intervalId;
let countValue = 0;
let paused = false;

startBtn.addEventListener("click", () => {
  if (!intervalId) {
    startTimer();
  }
});

pauseBtn.addEventListener("click", () => {
  pauseTimer();
});

resumeBtn.addEventListener("click", () => {
  resumeTimer();
});

function startTimer() {
  countValue = count.valueAsNumber;

  if (countValue > 0) {
    result.innerHTML = formatTime(countValue);
  }

  intervalId = setInterval(() => {
    if (!paused) {
      if (countValue > 0) {
        countValue--;
        result.innerHTML = formatTime(countValue);
      } else {
        clearInterval(intervalId);
        intervalId = null;
      }
    }
  }, 1000);
}

function pauseTimer() {
  paused = true;
}

function resumeTimer() {
  paused = false;
}

function formatTime(timeInSth) {
  const hours = Math.floor(timeInSth / 3600);
  const minutes = Math.floor((timeInSth % 3600) / 60);
  const seconds = timeInSth % 60;
  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
    seconds
  )}`;
}

function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number.toString();
}
