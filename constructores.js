// Antes de ES6
function Person(name) {
  this.name = name;
}
var person = new Person("Alex");
console.log(person.name); //> Alex

// Con ES6
class Person {
  constructor(person) {
    this.name = name;
  }
}

var person = new Person("Alex");
console.log(person.name); //> Alex
