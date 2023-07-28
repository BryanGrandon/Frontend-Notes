// TypeScript allows you to specifically type an object using an interface that can be reused by multiple objects.

// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// }

interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

console.log(greet({ name: "bryan", age: 21 }));

const user_1 = {
  name: "Andres",
  age: 25,
};

console.log(greet(user_1));
