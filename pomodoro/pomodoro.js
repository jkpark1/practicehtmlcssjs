const button = document.querySelectorAll("button");
const startBtn = button[0];
const pauseBtn = button[1];
const resetBtn = button[2];
const FcsFTBtn = button[3];
const FcsHTBtn = button[4];
const BrkTBtn = button[5];

///Timer Rules
let countdown = 15;
let ResetCnDw = 15;
let BreakCnDw = 0;
let min = "";
let sec = "";
min = parseInt(countdown / 60);
sec = countdown % 60;
let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
///setInterval Functions
let timer; ///This is Start Timer Function
let AnimeWork;
var Water = document.getElementById("WaterAnime");
var AnimeTop = 105;

const timerDisplay = document.getElementById("pomodoroclock");
timerDisplay.innerHTML = display;

///Buttons : Control Timer
///startBtn : Click 'Start'button on page Timer start
///pauseBtn : Click 'Pause'button on page Timer pause  and click 'Start'button ,after click 'Pause'Button, Timer resume
///resetBtn : Click 'Reset'button on page Timer stop and reset

///Timer : initial vlaue
startBtn.addEventListener("click", startTimer);

///Buttons : Quick Set Time
FcsFTBtn.addEventListener("click", setTimer50m);
FcsHTBtn.addEventListener("click", setTimer25m);
BrkTBtn.addEventListener("click", BreakTime);

function startTimer() {
  timer = setInterval(pomodorotimer, 1000);
  AnimeWork = setInterval(AnimeRule, 50);
  startBtn.removeEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}

function pauseTimer() {
  clearInterval(timer);
  clearInterval(AnimeWork);
  startBtn.addEventListener("click", startTimer);
}
function resetTimer() {
  pauseTimer();
  AnimeReset();
  resetBtn.removeEventListener("click", resetTimer);

  AnimeTop = 105;
  countdown = ResetCnDw;
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}
function setTimer50m() {
  clearInterval(timer);
  resetTimer();
  countdown = 10;
  ResetCnDw = 10;
  BreakCnDw = 2;

  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}
function setTimer25m() {
  clearInterval(timer);
  resetTimer();
  countdown = 5;
  ResetCnDw = 5;
  BreakCnDw = 1;
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}

function BreakTime() {
  clearInterval(timer);
  countdown = BreakCnDw;
  countdown = min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}

///Cal Anime Value : initial top(value) = 105px, target top = -155px, total = 260px box move initial pos
function AnimeRule() {
  if (AnimeTop < -155) {
    clearInterval(AnimeWork);
  } else {
    AnimeTop = AnimeTop - 0.867;
    Water.style.top = AnimeTop + "px";
  }
}
function AnimeReset() {
  Water.style.top = "105px";
}
function pomodorotimer() {
  countdown--;
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerText = display;

  if (countdown === 0) {
    clearInterval(timer);
    startBtn.addEventListener("click", startTimer);
    pauseBtn.removeEventListener("click", pauseTimer);
    countdown = 15;
    var AlarmSounds1 = new Audio("AlarmSound1.mp3");
    AlarmSounds1.play();
    timerDisplay.innerText = "END";
    setTimeout(() => {
      resetTimer();
    }, 3000);
  }
}
