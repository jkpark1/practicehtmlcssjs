const button = document.querySelectorAll("button");
const DayNightBtn = button[0];
const HelpBtn = button[1];
const startBtn = button[2];
const pauseBtn = button[3];
const resetBtn = button[4];
const FTBtn = button[5];
const HTBtn = button[6];
const BrkTBtn = button[7];
const closemodalBtn = button[8];
const timerDisplay = document.getElementById("pomodoroclock");
const icon = document.querySelectorAll(".bi");
const Water = document.getElementById("WaterAnime");
const dropdownmsg = document.getElementById("dropdown-content");
const titlecolok = document.getElementsByTagName("title")[0];
now_date_time();

function getTime() {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const dayname = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const clock = document.getElementById("nowdate");
  //clock.innerHTML = hour +":" + minutes + ":"+seconds;
  clock.innerHTML = `${dayname[day]} ${month + 1}/${date}<br>${
    hour < 10 ? `0${hour}` : hour
  }:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function now_date_time() {
  setInterval(getTime, 1000);
}
///Timer Rules
///initial Value
// let countdown = 1500;
// let ResetCnDw = 1500;
let countdown = 1500;
let ResetCnDw = 1500;
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
/// Buttons : color option, help modal
DayNightBtn.addEventListener("click", Dark_Light_mod);
closemodalBtn.addEventListener("click", Modal_close);
HelpBtn.addEventListener("click", Modal_open);

function startTimer() {
  timer = setInterval(pomodorotimer, 1000);
  AnimeWork = setInterval(AnimeRule, 50);
  StartColor();
  WaterDrop();
  titlecolok.innerText = display;
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
  titlecolok.innerHTML = "FocusHelper - pomodoro";
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
function setTimer50m() {
  clearInterval(timer);
  resetTimer();
  WaterDropStop();
  countdown = 3000;
  ResetCnDw = 3000;
  Rule();
  SelectFTColor();
}

function setTimer25m() {
  clearInterval(timer);
  resetTimer();
  WaterDropStop();
  ResetColor();
  countdown = 1500;
  ResetCnDw = 1500;
  Rule();
}

function BreakTime() {
  clearInterval(timer);
  WaterDropStop();
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
  SelectBrktColor();
}
//Cal Anime Value : initial top(value) = 105px, target top = -155px, total = 260px box move initial pos

function AnimeRule() {
  if (AnimeTop < 0) {
    clearInterval(AnimeWork);
  } else if (ResetCnDw === 1500) {
    AnimeTop = AnimeTop - 0.00833;
    Water.style.top = AnimeTop + "px";
  } else if (ResetCnDw === 3000) {
    AnimeTop = AnimeTop - 0.00417;
    Water.style.top = AnimeTop + "px";
  } else if (ResetCnDw === 300) {
    AnimeTop = AnimeTop - 0.04167;
    Water.style.top = AnimeTop + "px";
  } else {
    AnimeTop = AnimeTop - 0.02;
    Water.style.top = AnimeTop + "px";
  }
}

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
  titlecolok.innerText = display;
  if (countdown === 0) {
    clearInterval(timer);
    startBtn.addEventListener("click", startTimer);
    BrkTBtn.addEventListener("click", BreakTime);
    pauseBtn.removeEventListener("click", pauseTimer);
    countdown = ResetCnDw;
    playsonud();
    timerDisplay.innerText = "Nice!";
  } else if (countdown < 0) {
    timerDisplay.innerText = "Set Time";
  }
  if (ResetCnDw != 10) {
    HTBtn.addEventListener("click", setTimer25m);
  } else if (ResetCnDw != 16) {
    FTBtn.addEventListener("click", setTimer50m);
  }
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
function Modal_open() {
  let modal_T = document.getElementById("modal-layer");
  let blur_T = document.getElementsByClassName("modalblur");
  for (let i = 0; i < blur_T.length; i++) {
    blur_T[i].style.filter = "blur(5px)";
  }
  modal_T.style.display = "flex";
}
function Modal_close() {
  let modal_F = document.getElementById("modal-layer");
  let blur_F = document.getElementsByClassName("modalblur");
  for (let i = 0; i < blur_F.length; i++) {
    blur_F[i].style.filter = "none";
  }
  modal_F.style.display = "none";
}

function Dark_Light_mod() {
  let modeState = document.getElementById("modeIcon").className;
  let Dark_Light = document.getElementById("modeIcon");
  if (modeState === "bi bi-moon-fill") {
    Dark_Light.setAttribute("class", "bi bi-brightness-high-fill");
    ColorChange("#444", "#222", "whitesmoke");
  } else if (modeState === "bi bi-brightness-high-fill") {
    Dark_Light.setAttribute("class", "bi bi-moon-fill");
    ColorChange("whitesmoke", "#3fabc3", "#555");
  }
}
// function ColorChange_nav(color) {
//   for (let i = 0; i < G1BackColor.length; i++) {
//     G1BackColor[i].style.backgroundColor = color;
//   }
// }
function ColorChange(color, color2, color3) {
  let G1BackColor = document.getElementsByClassName("Group1");
  let G2BackColor = document.getElementsByClassName("Group2");
  let Circle_clcok = document.getElementsByClassName("AnimeBox")[0];
  for (let i = 0; i < G2BackColor.length; i++) {
    G2BackColor[i].style.backgroundColor = color;
  }
  for (let i = 0; i < G1BackColor.length; i++) {
    G1BackColor[i].style.backgroundColor = color2;
  }
  G2BackColor[0].style.color = color3;
  Circle_clcok.style.borderColor = color3;
}

// !!!TEST Code!!!
// Activate below codes and Deactivate same formet codes upper, if you want TEST Timer works

// function AnimeRule() {
//   if (AnimeTop < 0) {
//     clearInterval(AnimeWork);
//   } else if (ResetCnDw === 10) {
//     AnimeTop = AnimeTop - 1.25;
//     Water.style.top = AnimeTop + "px";
//   } else if (ResetCnDw === 16) {
//     AnimeTop = AnimeTop - 0.78125;
//     Water.style.top = AnimeTop + "px";
//   } else if (ResetCnDw === 6) {
//     AnimeTop = AnimeTop - 2.08333;
//     Water.style.top = AnimeTop + "px";
//   } else {
//     AnimeTop = AnimeTop - 3.125;
//     Water.style.top = AnimeTop + "px";
//   }
// }
// function setTimer50m() {
//   clearInterval(timer);
//   resetTimer();
//   WaterDropStop();
//   countdown = 16;
//   ResetCnDw = 16;
//   Rule();
//   SelectFTColor();
// }

// function setTimer25m() {
//   clearInterval(timer);
//   resetTimer();
//   WaterDropStop();
//   ResetColor();
//   countdown = 10;
//   ResetCnDw = 10;
//   Rule();
// }

// function BreakTime() {
//   clearInterval(timer);
//   WaterDropStop();
//   if (ResetCnDw === 10) {
//     ResetCnDw = 4;
//     countdown = 4;
//   } else {
//     ResetCnDw = 6;
//     countdown = 6;
//   }
//   min = parseInt(countdown / 60);
//   sec = countdown % 60;

//   Rule();
//   SelectBrktColor();
// }
