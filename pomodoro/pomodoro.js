const button = document.querySelectorAll("button");
const STbutton = document.querySelectorAll(".ST-button");
const startBtn = button[0];
const pauseBtn = button[1];
const resetBtn = button[2];
const FcsFTBtn = button[3];
const FcsHTBtn = button[4];
const BrkTBtn = button[5];

// const MinU = STbutton[0];          --Deleted Operations
// const MinD = STbutton[1];
// const SecU = STbutton[2];
// const SecD = STbutton[3];          --Deleted Operations

///Timer Rules
let countdown = 15;
let min = "";
let sec = "";
min = parseInt(countdown / 60);
sec = countdown % 60;
let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
///setInterval Functions
let timer; ///This is Start Timer Function
let AnimeWork;
var Water = document.getElementById("WaterAnime");
var pos = 105;
// let HoldMU;
// let HoldMD;
// let HoldSU;
// let HoldSD;
const timerDisplay = document.getElementById("pomodoroclock");
timerDisplay.innerHTML = display;

///Control Timer Buttons
///startBtn : Click 'Start'button on page Timer start
///pauseBtn : Click 'Pause'button on page Timer pause  and click 'Start'button ,after click 'Pause'Button, Timer resume
///resetBtn : Click 'Reset'button on page Timer stop and reset
startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
///Quick Set Time Buttons
FcsFTBtn.addEventListener("click", setTimer50m);
FcsHTBtn.addEventListener("click", setTimer25m);
///Detail Set Time Buttons                          --Deleted Operations
// MinU.addEventListener("click", OneMinUp);
// MinD.addEventListener("click", OneMinDW);
// SecU.addEventListener("click", OneSecUp);
// SecD.addEventListener("click", OneSecDW);
///Fast Set Time Up and Down Buttons
// MinU.addEventListener("mousedown", holdMU);
// MinU.addEventListener("mouseup", RelMinUp);
// MinD.addEventListener("mousedown", holdMD);
// MinD.addEventListener("mouseup", RelMinDW);
// SecU.addEventListener("mousedown", holdSU);
// SecU.addEventListener("mouseup", RelSecUp);
// SecD.addEventListener("mousedown", holdSD);
// SecD.addEventListener("mouseup", RelSecDW);      --Deleted Operations

function startTimer() {
  timer = setInterval(pomodorotimer, 1000);
  AnimeWork = setInterval(AnimeRule, 50);
  startBtn.removeEventListener("click", startTimer);
}
// function holdMU() {                            --Deleted Operations
//   HoldMU = setInterval(HoldMinUp, 100);
// }
// function holdMD() {
//   HoldMD = setInterval(HoldMinDW, 100);
// }
// function holdSU() {
//   HoldSU = setInterval(HoldSecUp, 100);
// }
// function holdSD() {
//   HoldSD = setInterval(HoldSecDW, 100);
// }                                              --Deleted Operations

function pauseTimer() {
  clearInterval(timer);
  clearInterval(AnimeWork);
  startBtn.addEventListener("click", startTimer);
}
function resetTimer() {
  pauseTimer();
  AnimeReset();
  startBtn.addEventListener("click", startTimer);

  pos = 105;
  countdown = 1500;
  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}
function setTimer50m() {
  clearInterval(timer);

  countdown = 3000;

  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}
function setTimer25m() {
  clearInterval(timer);

  countdown = 1500;

  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}

function setTimer5m() {
  clearInterval(timer);

  countdown = 5;

  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}
function setTimer10m() {
  clearInterval(timer);

  countdown = 600;

  min = parseInt(countdown / 60);
  sec = countdown % 60;
  let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  timerDisplay.innerHTML = display;
}

// function OneMinUp() {                                                              --Deleted Operations
//   countdown = countdown + 60;

//   min = parseInt(countdown / 60);
//   sec = countdown % 60;
//   let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
//   timerDisplay.innerHTML = display;
// }
// function OneMinDW() {
//   if (countdown > 0) {
//     countdown = countdown - 60;
//   }

//   min = parseInt(countdown / 60);
//   sec = countdown % 60;
//   let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
//   timerDisplay.innerHTML = display;
// }
// function OneSecUp() {
//   countdown = countdown + 1;

//   min = parseInt(countdown / 60);
//   sec = countdown % 60;
//   let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
//   timerDisplay.innerHTML = display;
// }
// function OneSecDW() {
//   if (countdown > 0) {
//     countdown = countdown - 1;
//   }
//   min = parseInt(countdown / 60);
//   sec = countdown % 60;
//   let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
//   timerDisplay.innerHTML = display;
// }
// function HoldMinUp() {
//   countdown = countdown + 60;
//   min = parseInt(countdown / 60);
//   sec = countdown % 60;
//   let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
//   timerDisplay.innerHTML = display;
// }
// function HoldMinDW() {
//   if (countdown > 0) {
//     countdown = countdown - 60;
//   }
//   min = parseInt(countdown / 60);
//   sec = countdown % 60;
//   let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
//   timerDisplay.innerHTML = display;
// }                                                                                  --Deleted Operations

//function RelMinUp() {
//  clearInterval(HoldMU);
//}
//function RelMinDW() {
//  clearInterval(HoldMD);
//};

// This is ERROR code                                                                  --Deleted Operations
// function HoldSecUp() {
//   countdown = countdown + 1;
//   min = parseInt(countdown / 60);
//   sec = countdown % 60;
//   let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
//   timerDisplay.innerHTML = display;
// }
// function HoldSecDW() {
//   if (countdown > 0) {
//     countdown = countdown - 1;
//   }
//   min = parseInt(countdown / 60);
//   sec = countdown % 60;
//   let display = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
//   timerDisplay.innerHTML = display;
// }
// function RelSecUp() {
//   clearInterval(HoldSU);
// }
// function RelSecDW() {
//   clearInterval(HoldSD);
//}This is ERROR code                                                                   --Deleted Operations
function AnimeRule() {
  if (pos < -155) {
    clearInterval(AnimeWork);
  } else {
    pos = pos - 0.867;
    Water.style.top = pos + "px";
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
      countdown = 15;
      min = parseInt(countdown / 60);
      sec = countdown % 60;
      let display = `${min < 10 ? "0" + min : min}:${
        sec < 10 ? "0" + sec : sec
      }`;
      timerDisplay.innerText = display;
    }, 3000);
  }
}
