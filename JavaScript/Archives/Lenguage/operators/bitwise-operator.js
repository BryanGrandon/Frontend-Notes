const operators = {
  AND: " & ",

  OR: " | ",

  XOR: " ^ ",

  NOT: " ~ ",

  leftShift: " << ",

  rightShift: " >> ",

  zeroFill: " <<< ",
};

/** https://www.rapidtables.org/convert/number/binary-to-decimal.html
   *  9  = 0000000000001001
   *  3  = 0000000000000011
     ----------------------
  
   * AND = 0000000000000001 => 1 
  
   * OR  = 0000000000001011 => 11 
  
   * XOR = 0000000000001010 => 10
  
   */
console.log(9 & 3);
console.log(9 | 3);
console.log(9 ^ 3);

/** NOT
   * 9 = 0000000000001001
     --------------------
   * x = 1111111111110110 => -10 
   */
console.log(~9);

// Function
const bit = (number) => {
  let i = [];
  while (number > 0) {
    i.push(number % 2);
    number = Math.trunc(number / 2);
  }

  if (number < 1) {
    i.reverse();
    let result = Number(i.join(""));
    return result;
  }
};

console.log(bit(21));
