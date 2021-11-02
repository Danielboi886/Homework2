'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
//inspired by the practice at : https://www.w3schools.com/jsref/met_win_setinterval.asp
function addCurrentTime() {
  const t = new Date();
  const localTime = t.toLocaleTimeString();
  document.getElementById('timeWrapper').textContent = localTime;
  console.log(localTime);
}

setInterval(addCurrentTime, 1000);
