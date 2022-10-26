//> Gracias al hoisting se puede ejecutar una función antes de su declaración:
greet(); //> Hello world
function greet() {
  let greeting = "Hello World";
  console.log(greeting);
}

//> Al asignar la declaración en memoria es como si subiera la función al principio de su ámbito.
function greet() {
  let greeting = "Hello World";
  console.log(greeting);
}
greet(); //> Hello world

//> El hoisting puede generar comportamientos inesperados
var greet = "Hello";
(function () {
  console.log(greet); //> undefined
  var greet = "Hi";
  console.log(greet); //> Hi
})();

//> Por lo tanto el comportamiento de este código sería equivalente a reescribirlo de esta forma:
var greet = "Hello";
(function () {
  var greet;
  console.log(greet); //> undefined
  greet = "Hi";
  console.log(greet); //> Hi
})();
