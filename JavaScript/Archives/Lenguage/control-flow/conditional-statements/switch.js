let option = Math.round(Math.random() * 3);
console.log(option);

switch (option) {
  case 1:
    console.log(`If the option is 1`);
    break;

  case 2:
    console.log(`If the option is 2`);
    break;

  case 3:
    console.log(`If the option is 3`);
    break;

  default:
    console.log(`option default`);
    break;
}

// Example

let browser = "brave";

switch (browser.toLocaleLowerCase()) {
  case "opera":
    console.log("You have Opera!");
    break;

  // case grouping
  case "chrome":
  case "firefox":
  case "safari":
  case "edge":
  case "brave":
    console.log("Ok, we support these browsers too");
    break;

  default:
    console.log("We hope this page looks good!");
}
