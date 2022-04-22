// #1 - Cute Angles
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function format(value) {
  let str = String(value);
  return str.length === 1 ? '0' + str : str;
}

function dms(degreeFloat) {
  while (degreeFloat > 360) degreeFloat -= 360;
  while (degreeFloat < 0) degreeFloat += 360;
  
  let degrees = Math.floor(degreeFloat);
  let minuteFloat = (degreeFloat - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(minuteFloat);
  let seconds = Math.floor((minuteFloat - minutes) * SECONDS_PER_MINUTE);
  return `${degrees}°${format(minutes)}'${format(seconds)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
