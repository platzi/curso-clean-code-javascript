// var
var age = 28;
{
  console.log("Valor dentro del bloque", age); // 28
  var age = 29;
}

console.log("Valor fuera del bloque", age); // 29
age = age * 2;
console.log("Valor cambiado", age); // 58

// let
let age = 28;
{
  console.log("Valor dentro del bloque", age); // error
  let age = 29;
}

console.log("Valor fuera del bloque", age); // 28
age = age * 2;
console.log("Valor cambiado", age); // 56

// const
const PI = 3.14159;
PI = PI * 2; // error
console.log("Valor cambiado", PI); // no se ejecuta
