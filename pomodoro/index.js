const button = document.querySelectorAll("button");
const startBtn = button[0];
const pauseBtn = button[1];
const resetBtn = button[2];
const FTBtn = button[3];
const HTBtn = button[4];
const BrkTBtn = button[5];
const icon = document.querySelectorAll(".bi");
const timerDisplay = document.getElementById("pomodoroclock");
const Water = document.getElementById("WaterAnime");
///Timer Rules
///initial Value
// let countdown = 1500;
// let ResetCnDw = 1500;
let countdown = 10;
let ResetCnDw = 10;
let min = "";
let sec = "";
min = parseInt(countdown / 60);
sec = countdown % 60;
let ActBtn;
let display;
Rule();
ResetColor();
// min = parseInt(countdown / 60);
// sec = countdown % 60;
// let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
let Alarm = new Audio("AlarmSound1.mp3");
///setInterval Functions
let timer; ///This is Start Timer Function
let AnimeWork;
let AnimeTop = 250;

///Buttons : Control Timer
///startBtn : Click 'Start'button on page Timer start
///pauseBtn : Click 'Pause'button on page Timer pause  and click 'Start'button ,after click 'Pause'Button, Timer resume
///resetBtn : Click 'Reset'button on page Timer stop and reset

///Timer : initial vlaue
startBtn.addEventListener("click", startTimer);
///Buttons : Quick Set Time
FTBtn.addEventListener("click", setTimer50m);
HTBtn.addEventListener("click", setTimer25m);
BrkTBtn.addEventListener("click", BreakTime);

function startTimer() {
  timer = setInterval(pomodorotimer, 1000);
  AnimeWork = setInterval(AnimeRule, 50);
  StartColor();
  WaterDrop();
  startBtn.removeEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
  if (ResetCnDw === 10) {
    HTBtn.removeEventListener("click", setTimer25m);
  } else if (ResetCnDw === 16) {
    FTBtn.removeEventListener("click", setTimer50m);
  }
}

function pauseTimer() {
  clearInterval(timer);
  clearInterval(AnimeWork);
  WaterDropStop();
  PauseColor();
  startBtn.addEventListener("click", startTimer);
}
function resetTimer() {
  pauseTimer();
  AnimeReset();
  pausesound();
  WaterDropStop();
  pauseBtn.removeEventListener("click", pauseTimer);
  ResetColor();
  AnimeTop = 250;
  countdown = ResetCnDw;
  if (ResetCnDw === 10) {
    HTBtn.addEventListener("click", setTimer25m);
  } else if (ResetCnDw === 16) {
    SelectFTColor();
    FTBtn.addEventListener("click", setTimer50m);
  }
  Rule();
}
// function setTimer50m() {
//   clearInterval(timer);
//   resetTimer();
//   WaterDropStop();
//   countdown = 3000;
//   ResetCnDw = 3000;
//   Rule();
//   SelectFTColor();
// }

// function setTimer25m() {
//   clearInterval(timer);
//   resetTimer();
//   WaterDropStop();
//   countdown = 1500;
//   ResetCnDw = 1500;
//   Rule();
// }

// function BreakTime() {
//   clearInterval(timer);
//   WaterDropStop();
//   if (ResetCnDw === 1500) {
//     ResetCnDw = 300;
//     countdown = 300;
//   } else {
//     ResetCnDw = 600;
//     countdown = 600;
//   }
//   min = parseInt(countdown / 60);
//   sec = countdown % 60;

//   Rule();
//   SelectBrktColor();
// }
///Cal Anime Value : initial top(value) = 105px, target top = -155px, total = 260px box move initial pos

// function AnimeRule() {
//   if (AnimeTop < 0) {
//     clearInterval(AnimeWork);
//   } else if (ResetCnDw === 1500) {
//     AnimeTop = AnimeTop - 0.00833;
//     Water.style.top = AnimeTop + "px";
//   } else if (ResetCnDw === 3000) {
//     AnimeTop = AnimeTop - 0.00417;
//     Water.style.top = AnimeTop + "px";
//   } else if (ResetCnDw === 300) {
//     AnimeTop = AnimeTop - 0.04167;
//     Water.style.top = AnimeTop + "px";
//   } else {
//     AnimeTop = AnimeTop - 0.02;
//     Water.style.top = AnimeTop + "px";
//   }
// }

function AnimeReset() {
  Water.style.top = "250px";
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
    countdown = ResetCnDw;
    playsonud();
    timerDisplay.innerText = "Nice!";
    setTimeout(resetTimer, 10 * 1000);
  } else if (countdown < 0) {
    timerDisplay.innerText = "Set Time";
  }
  if (ResetCnDw != 10) {
    HTBtn.addEventListener("click", setTimer25m);
  } else if (ResetCnDw != 16) {
    FTBtn.addEventListener("click", setTimer50m);
  }
}
function HTButton() {
  ActBtn = 1;
  HTBtn.addEventListener("click", setTimer25m);
}
function FTButton() {
  ActBtn = 2;
  FTBtn.addEventListener("click", setTimer50m);
}

function Rule() {
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerText = display;
}
function ResetColor() {
  startBtn.setAttribute("class", "Thover");
  resetBtn.setAttribute("class", "OffBtn");
  pauseBtn.setAttribute("class", "OffBtn");
  FTBtn.setAttribute("class", "Thover");
  HTBtn.setAttribute("class", "TSelected");
  BrkTBtn.setAttribute("class", "Thover");
}
function StartColor() {
  startBtn.setAttribute("class", "TSelected");
  resetBtn.setAttribute("class", "Thover");
  pauseBtn.setAttribute("class", "Thover");
}
function PauseColor() {
  startBtn.setAttribute("class", "Thover");
  pauseBtn.setAttribute("class", "TSelected");
}
function SelectFTColor() {
  FTBtn.setAttribute("class", "TSelected");
  HTBtn.setAttribute("class", "Thover");
}
function SelectBrktColor() {
  BrkTBtn.setAttribute("class", "TSelected");
  FTBtn.setAttribute("class", "Thover");
  HTBtn.setAttribute("class", "Thover");
}
function WaterDrop() {
  document.getElementById("DropWater").setAttribute("class", "WaterDrop");
}
function WaterDropStop() {
  document.getElementById("DropWater").setAttribute("class", "WaterDropST");
}

// !!!TEST Code!!!
// Activate below codes and Deactivate same formet codes upper, if you want TEST Timer works

function AnimeRule() {
  if (AnimeTop < 0) {
    clearInterval(AnimeWork);
  } else if (ResetCnDw === 10) {
    AnimeTop = AnimeTop - 1.25;
    Water.style.top = AnimeTop + "px";
  } else if (ResetCnDw === 16) {
    AnimeTop = AnimeTop - 0.78125;
    Water.style.top = AnimeTop + "px";
  } else if (ResetCnDw === 6) {
    AnimeTop = AnimeTop - 2.08333;
    Water.style.top = AnimeTop + "px";
  } else {
    AnimeTop = AnimeTop - 3.125;
    Water.style.top = AnimeTop + "px";
  }
}
function setTimer50m() {
  clearInterval(timer);
  resetTimer();
  WaterDropStop();
  countdown = 16;
  ResetCnDw = 16;
  Rule();
  SelectFTColor();
}

function setTimer25m() {
  clearInterval(timer);
  resetTimer();
  WaterDropStop();
  ResetColor();
  countdown = 10;
  ResetCnDw = 10;
  Rule();
}

function BreakTime() {
  clearInterval(timer);
  WaterDropStop();
  if (ResetCnDw === 10) {
    ResetCnDw = 4;
    countdown = 4;
  } else {
    ResetCnDw = 6;
    countdown = 6;
  }
  min = parseInt(countdown / 60);
  sec = countdown % 60;

  Rule();
  SelectBrktColor();
}
