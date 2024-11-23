type Person = {
  name: string;
  age?: number;
  gender?: "Male" | "Female";
};

interface PersonInterface {
  name: string;
  age?: number;
}
const person: Person = {
  name: "Nicolas",
  age: 18,
};
const person2: PersonInterface = {
   name: "Nicolas",
   age: 18
}

console.log(person.age);
console.log(person2.age)
