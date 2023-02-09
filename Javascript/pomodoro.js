const button = document.querySelectorAll(".button");

let countdown = 1500;
let min = "";
let sec = "";
min = parseInt(countdown / 60);
sec = countdown % 60;
let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
let timer;
const startBtn = button[0];
const pauseBtn = button[1];
const resetBtn = button[2];
const Btn25m = button[3];
const Btn5m = button[4];
const Btn10m = button[5];
const timerDisplay = document.getElementById("pomodoroclock");
timerDisplay.innerHTML = display;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
Btn25m.addEventListener("click", setTimer25m);
Btn5m.addEventListener("click", setTimer5m);
Btn10m.addEventListener("click", setTimer10m);

function startTimer() {
  timer = setInterval(pomodorotimer, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}
function resetTimer() {
  pauseTimer();
  countdown = 1500;
  let min = "";
  let sec = "";
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}
function setTimer25m() {
  clearInterval(timer);

  countdown = 1500;
  let min = "";
  let sec = "";
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}
function setTimer5m() {
  clearInterval(timer);

  countdown = 300;
  let min = "";
  let sec = "";
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}
function setTimer10m() {
  clearInterval(timer);

  countdown = 600;
  let min = "";
  let sec = "";
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}

function pomodorotimer() {
  countdown--;
  let min = "";
  let sec = "";
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;

  if (countdown === 0) {
    clearInterval(timer);
    timerDisplay.innerHTML = "Finished";
  }
}
