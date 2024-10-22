var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var amPm = document.getElementById("am-pm");
var today = document.getElementById("date");
var circle = document.getElementById("circle");

setInterval(() => {
  var d = new Date();
  var hh = d.getHours();
  var mm = d.getMinutes();
  var ss = d.getSeconds();
  amPm.innerText = "AM";

  if (hh == 0) hh = 12;

  if (hh > 12) {
    hh = hh - 12;
    amPm.innerText = "PM";
  }

  if (hh < 10) hh = "0" + hh; //adding "0" if hours less than 10
  if (mm < 10) mm = "0" + mm; //adding "0" if minutes less than 10
  if (ss < 10) ss = "0" + ss; //adding "0" if seconds less than 10

  //Animate svg circle on running seconds
  circle.style.strokeDashoffset = 787 - (787 * ss) / 60;

  //Setting current date format using Moment.js library
  today.innerText = moment().format("MMM Do YY");

  //Setting current "hours", "minutes", and "seconds"
  hours.innerText = hh;
  minutes.innerText = mm;
  seconds.innerText = ss;
});
