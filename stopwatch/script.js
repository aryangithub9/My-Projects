let h = document.getElementById("hours");
let m = document.getElementById("minutes");
let s = document.getElementById("seconds");
let ms = document.getElementById("milliseconds");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');
let minutes = 0;
let seconds = 0; 
let milliseconds = 0; 
let hours = 0;
let interval;

const starttimer = () => {
  clearInterval(interval);
  interval = setInterval(startwatch, 10);
};

const resettimer = () => {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  h.innerHTML = '00';
  m.innerHTML = '00';
  s.innerHTML = '00';
  ms.innerHTML = '00';
  clearInterval(interval);
};

const stoptimer = () => {
  clearInterval(interval);
};

function startwatch() {
  milliseconds++;
  if (milliseconds > 99) {
    milliseconds = 0;
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
      if (minutes > 59) {
        minutes = 0;
        hours++;
      }
    }
  }

  ms.innerHTML = formatTime(milliseconds);
  s.innerHTML = formatTime(seconds);
  m.innerHTML = formatTime(minutes);
  h.innerHTML = formatTime(hours);
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

startbtn.addEventListener('click', starttimer);
stopbtn.addEventListener('click', stoptimer);
resetbtn.addEventListener('click', resettimer);