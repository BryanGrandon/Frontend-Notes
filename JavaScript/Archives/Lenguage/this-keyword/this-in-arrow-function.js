"use strict";
// arrow function (Not occupy)

this.name = "Global";

const objArrow = {
  name: "obj arrow",
  print: () => {
    console.log(this.name);
  },
};

objArrow.print();
