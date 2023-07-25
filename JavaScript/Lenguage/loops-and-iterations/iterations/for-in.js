/** for (variable in object){
        statement
    }

 * Iterates over all enumerable string properties of an object
 */

const object = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in object) {
  console.log(key);
  console.log(object[key]);
}
