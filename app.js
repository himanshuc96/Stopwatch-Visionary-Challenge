let stopwatch;
let timerDisplay = document.querySelector(".display");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");
let isRunning = false;

function startTimer() {
  if (isRunning) {
    return; // do nothing if already running
  }
  isRunning = true; // update state
  let startTime = Date.now();
  stopwatch = setInterval(function () {
    let elapsedTime = Date.now() - startTime;
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = elapsedTime % 1000;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    if (milliseconds < 100) milliseconds = "0" + milliseconds;
    if (milliseconds < 10) milliseconds = "0" + milliseconds;
    timerDisplay.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
  }, 10);
}

function stopTimer() {
  clearInterval(stopwatch);
  isRunning = false; // update state
}

function resetTimer() {
  clearInterval(stopwatch);
  timerDisplay.innerHTML = "00:00:00";
  isRunning = false; // update state
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
