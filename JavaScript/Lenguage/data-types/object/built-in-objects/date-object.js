let now = new Date();
console.log(now);

let date = new Date(2002, 11, 19, 9, 22, 12);
console.log(date);

const componentsOfDate = {
  year: now.getFullYear(),
  month: now.getMonth(),
  day: { month: now.getDate(), week: now.getDay() },
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
  milliseconds: now.getMilliseconds(),
};
console.log(componentsOfDate);

// Date string
now.toString(); // 'Thu Mar 09 2023 11:43:20 GMT-0300'
now.toDateString(); // 'Thu Mar 09 2023'
now.toLocaleString(); // '9/3/2023, 11:42:32'
now.toLocaleDateString(); // '9/3/2023'
now.toLocaleTimeString(); // '11:44:35'
