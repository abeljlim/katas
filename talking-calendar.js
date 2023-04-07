const talkingCalendar = function(date) {
  // Extract each part of the YYYY/MM/DD string and then convert it to a new date
  // Could use an object's key-value pairs to store each month, but we haven't learned how to use objects like that for efficiency (yet?) and were told that strings as keys were bad practice (according to Udacity IIRC)
  let yearStr = date.substring(0, 4);

  let monthStr = "";
  switch (date.substring(4 + 1, 4 + 1 + 2)) {
  case "01":
    monthStr = "January";
    break;
  case "02":
    monthStr = "February";
    break;
  case "03":
    monthStr = "March";
    break;
  case "04":
    monthStr = "April";
    break;
  case "05":
    monthStr = "May";
    break;
  case "06":
    monthStr = "June";
    break;
  case "07":
    monthStr = "July";
    break;
  case "08":
    monthStr = "August";
    break;
  case "09":
    monthStr = "September";
    break;
  case "10":
    monthStr = "October";
    break;
  case "11":
    monthStr = "November";
    break;
  case "12":
    monthStr = "December";
    break;
  default:
    break;
  }

  let dayNum = Number(date.substring(4 + 1 + 2 + 1, 4 + 1 + 2 + 1 + 2)); // counting the spaces as the parts of the dates can be extracted by constant ranges due to the input date string being constant
  let dayStr = "";
  switch (dayNum % 10) {
  case 1:
    dayStr = dayNum.toString() + "st";
    break;
  case 2:
    dayStr = dayNum.toString() + "nd";
    break;
  case 3:
    dayStr = dayNum.toString() + "rd";
    break;
  default:
    dayStr = dayNum.toString() + "th"; // all valid days ending in 0 or 4-9 end in "th"
    break;
  }

  return monthStr + " " + dayStr + ", " + yearStr;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));