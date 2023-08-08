// ---- ---- Console Object ---- ---- //

const consoleObject = [
  ".log",
  ".info",
  ".warn",
  ".error",
  ".clear",
  ".table",
  ".count",
  ".countReset",
  ".group",
  ".groupEnd",
  ".time",
  ".timeLog",
  ".timeEnd",
];

// ---- ---- Date Object ---- ---- //

let now = new Date();
let date = new Date(2000, 11, 19);

const componentsOfDate = {
  year: now.getFullYear(),
  month: now.getMonth(),
  day: { month: now.getDate(), week: now.getDay() },
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
  milliseconds: now.getMilliseconds(),
};

// Date string

now.toString(); // 'Thu Mar 09 2023 11:43:20 GMT-0300'
now.toDateString(); // 'Thu Mar 09 2023'
now.toLocaleString(); // '9/3/2023, 11:42:32'
now.toLocaleDateString(); // '9/3/2023'
now.toLocaleTimeString(); // '11:44:35'

// ---- ---- Math Object ---- ---- //

const methods = {
  floor: Math.floor(3.6),
  ceil: Math.ceil(3.1),
  round: Math.round(3.5),
  trunc: Math.trunc(3.5),
  squareRoot: Math.sqrt(25),
  cubeRoot: Math.cbrt(27),
  maxNumber: Math.max(3, 4, 5, 6),
  minNumber: Math.min(-2, 4, 2, 1),
  randomNumber: Math.random() * 10,
};

const properties = {
  PI: Math.PI,
  SQUARE_ROOT1_2: Math.SQRT1_2,
  SQUARE_ROOT2: Math.SQRT2,
  EULER: Math.E,
  NATURAL_LOGARITHM2: Math.LN2,
  NATURAL_LOGARITHM10: Math.LN10,
  THE_BASE_2_LOGARITHM_EULER: Math.LOG2E,
  THE_BASE_10_LOGARITHM_EULER: Math.LOG10E,
};
