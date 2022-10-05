// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

const common = require("./common");

const start = 1900;
const limit = 2000;

const month30 = [4, 6, 9, 11];
const dayMap = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let weekday = 0;
let first = 0;

for(let year = start; year <= limit; year++) {
  let leap = false;
  if(checkLeap(year)) leap = true;
  for(let month = 1; month <= 12; month++) {
    let days = checkMonth(month, leap);
    for(let day = 1; day <= days; day++) {
      if(weekday >= 7) weekday = 0;
      // console.log(`${day}/${month}/${year} - ${dayMap[weekday]}`);
      if(weekday == 6 && day == 1 && year != 1900) first++;
      weekday++;
    }
  }
}

console.log(first);

function checkLeap(year) {
  if(year % 400 == 0) return true;
  else if(year % 100 == 0) return false;
  else if(year % 4 == 0) return true;
  else return false;
}

function checkMonth(month, leap) {
  if(month == 2 && leap) {
    return 29;
  }else if(month == 2){
    return 28;
  }else if(month30.filter(item => item == month).length != 0) {
    return 30;
  }else{
    return 31;
  }
}