const button = document.querySelectorAll("button");
const startBtn = button[0];
const pauseBtn = button[1];
const resetBtn = button[2];
const FcsFTBtn = button[3];
const FcsHTBtn = button[4];
const BrkTBtn = button[5];
const icon = document.querySelectorAll(".bi");
const timerDisplay = document.getElementById("pomodoroclock");
///Timer Rules
///initial Value
let countdown = 1500;
let ResetCnDw = 1500;
let BreakCnDw;
let min = "";
let sec = "";
min = parseInt(countdown / 60);
sec = countdown % 60;
let display;
initialColors();
Rule();
// min = parseInt(countdown / 60);
// sec = countdown % 60;
// let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
var Alarm = new Audio("AlarmSound1.mp3");
///setInterval Functions
let timer; ///This is Start Timer Function
let AnimeWork;
var Water = document.getElementById("WaterAnime");
var AnimeTop = 105;

///Buttons : Control Timer
///startBtn : Click 'Start'button on page Timer start
///pauseBtn : Click 'Pause'button on page Timer pause  and click 'Start'button ,after click 'Pause'Button, Timer resume
///resetBtn : Click 'Reset'button on page Timer stop and reset

///Timer : initial vlaue
startBtn.addEventListener("click", startTimer);
///Buttons : Quick Set Time
FcsFTBtn.addEventListener("click", setTimer50m);
FcsHTBtn.addEventListener("click", setTimer25m);

function startTimer() {
  timer = setInterval(pomodorotimer, 1000);
  AnimeWork = setInterval(AnimeRule, 50);
  BtnColors();
  startBtn.removeEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}

function pauseTimer() {
  clearInterval(timer);
  clearInterval(AnimeWork);
  pausesound();
  startBtn.addEventListener("click", startTimer);
}
function resetTimer() {
  pauseTimer();
  AnimeReset();
  pausesound();
  resetBtn.removeEventListener("click", resetTimer);

  AnimeTop = 105;
  countdown = ResetCnDw;
  Rule();
}
function setTimer50m() {
  clearInterval(timer);
  resetTimer();
  countdown = 3000;
  ResetCnDw = 3000;
  Rule();
}

function setTimer25m() {
  clearInterval(timer);
  resetTimer();
  countdown = 1500;
  ResetCnDw = 1500;
  Rule();
}

function BreakTime() {
  clearInterval(timer);
  if (ResetCnDw === 1500) {
    ResetCnDw = 300;
    countdown = 300;
  } else {
    ResetCnDw = 600;
    countdown = 600;
  }
  min = parseInt(countdown / 60);
  sec = countdown % 60;

  Rule();
}
///Cal Anime Value : initial top(value) = 105px, target top = -155px, total = 260px box move initial pos

function AnimeRule() {
  if (AnimeTop < -155) {
    clearInterval(AnimeWork);
  } else if (ResetCnDw === 1500) {
    AnimeTop = AnimeTop - 0.00867;
    Water.style.top = AnimeTop + "px";
  } else if (ResetCnDw === 3000) {
    AnimeTop = AnimeTop - 0.00433;
    Water.style.top = AnimeTop + "px";
  } else if (ResetCnDw === 300) {
    AnimeTop = AnimeTop - 0.04333;
    Water.style.top = AnimeTop + "px";
  } else {
    AnimeTop = AnimeTop - 0.02167;
    Water.style.top = AnimeTop + "px";
  }
}

function AnimeReset() {
  Water.style.top = "105px";
}
function playsonud() {
  Alarm.play();
}
function pausesound() {
  Alarm.pause();
  Alarm.currentTime = 0;
}

function pomodorotimer() {
  countdown--;
  Rule();
  if (countdown === 0) {
    clearInterval(timer);
    startBtn.addEventListener("click", startTimer);
    BrkTBtn.addEventListener("click", BreakTime);
    pauseBtn.removeEventListener("click", pauseTimer);
    countdown = 15;
    playsonud();
    timerDisplay.innerText = "Nice!";
  } else if (countdown < 0) {
    timerDisplay.innerText = "Set Time";
  }
}
function Rule() {
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerText = display;
}
function BtnColors() {
  startBtn.style.backgroundColor = "#3fabc3";
}
function initialColors() {
  pauseBtn.style.backgroundColor = "#5b5b5b";
  resetBtn.style.backgroundColor = "#5b5b5b";
  BrkTBtn.style.backgroundColor = "#5b5b5b";
}
// !!!TEST Code!!!
// Activate below codes and Deactivate same formet codes upper, if you want TEST Timer works
// function setTimer50m() {
//   clearInterval(timer);
//   resetTimer();
//   countdown = 10;
//   ResetCnDw = 10;
//   Rule();
// }
// function setTimer25m() {
//   clearInterval(timer);
//   resetTimer();
//   countdown = 5;
//   ResetCnDw = 5;
//   Rule();
// }
// function BreakTime() {
//   clearInterval(timer);
//   if (ResetCnDw === 5) {
//     countdown = 3;
//   } else {
//     countdown = 6;
//   }
//   min = parseInt(countdown / 60);
//   sec = countdown % 60;

//   Rule();
// }
// function AnimeRule() {
//   if (AnimeTop < -155) {
//     clearInterval(AnimeWork);
//   } else {
//     AnimeTop = AnimeTop - 0.867;
//     Water.style.top = AnimeTop + "px";
//   }
