/** while (condition){
       statement
    }
*/

let i = true;

while (i) {
  let number = 0;
  console.log(number);

  if (number === 3) {
    i = false;
  }

  number++;
}

i = 0;

while (i <= 6) {
  console.log(i);
  i += 2;
}
