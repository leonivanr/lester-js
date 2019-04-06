// // Ejercicio 1
// var myName = "Leon";
// console.log(myName + ".");
//
// // Ejercicio 2
// var leonAge = 33;
// console.log("Edad: " + leonAge + ".");
//
// // Ejercicio 3
// var ignasiAge = 32;
// var ageDiff = leonAge - ignasiAge;
// console.log("Age difference: " + ageDiff + ".");
//
// // Ejercicio 4
// if (leonAge > 21) {
//   console.log("You are older than 21.");
// } else {
//   console.log("You are not older than 21.");
// }
// // Ejercicio 5
// if (leonAge === ignasiAge) {
//   console.log("You have the same age as Ignasi");
// } else if (leonAge > ignasiAge) {
//   console.log("You are older than Ignasi.");
// } else {
//   console.log("Ignasi is older than you.");
// }

////////////////////////////
////////////Arrays
////////////////
//////////////////
// Ejercicio 1
//////////////////
// var companieros = ["Eliana", "Leon", "Adriana", "Aibby", "Alan", "Ayelen", "Birdie", "Carla", "Cintia", "David", "Diego", "Edgar", "Federico", "Fernando", "Andrés", "Giannina", "Luis", "Ignacio", "Janneth", "Juan", "Laura", "Lauri", "Marcelo", "Margara", "Maria", "Mariana", "Matias", "Nazarena", "Rodrigo", "Scarlet", "Stefania", "Stephanie", "Victoria C.", "Victoria", "Yanina", "Judith"];
// // Ordenar elementos alfabeticamente
// companieros.sort();
// // Imprimir primer item del array
// console.log("Primer ítem del array: ");
// console.log(companieros[0]);
// // Imprimir segundo item del array
// console.log("Último ítem del array: ");
// console.log(companieros[(companieros.length) - 1]);
// // Mostrar todos los elementos del array
// console.log("Elementos ordenados: ");
// for (var i = 0; i < companieros.length; i++) {
//   console.log(companieros[i]);
// }
////////////////
//Ejercicio 2
// var edadesCompas = [24, 35, 23, 26, 20, 18, 27, 26, 36, 33, 32, 34, 36, 37, 29, 27, 25, 22, 23, 26, 24, 36, 33, 32, 34, 36, 37, 29, 27, 25, 22, 23, 26, 24, 19, 25, 33];
// var i = edadesCompas.length;
// //Mostras edades con while
// console.log("Edades mostradas con bucle while: ");
// while (i > 0) {
//   console.log(edadesCompas[i - 1]);
//   i--;
// }
// console.log("Fin array.");
// // Mostrar solo edades pares:
// var i = edadesCompas.length;
// console.log("Edades pares con bucle while: ");
// while (i > 0) {
//   if ((edadesCompas[i - 1] % 2) === 0) {
//     console.log(edadesCompas[i - 1]);
//   }
//   i--;
// }
// console.log("Fin array.");
// //Mostar edades con for:
// console.log("Edades mostradas con bucle for: ");
// for (var i = 0; i < edadesCompas.length; i++) {
//   console.log(edadesCompas[i]);
// }
// console.log("Fin array.");
// // Edades pares con bucle for
// console.log("Edades pares mostradas con bucle for: ");
// for (var i = 0; i < edadesCompas.length; i++) {
//   if (edadesCompas[i] % 2 == 0) {
//     console.log(edadesCompas[i]);
//   }
//
// }
// console.log("Fin array.");

////////////////////////////
// Ejercicio 3
// Calcular menor numero en un array
///////////////////////////////////
// var unoDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var randomNumbers = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
//
// console.log("Menor numero: " + calculateLowest(randomNumbers));
// console.log("Menor numero: " + calculateLowest(unoDiez));
//
// function calculateLowest(array) {
//   var lowest = array[0];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < lowest) {
//       lowest = array[i];
//     }
//   }
//   return lowest;
// }
//
//
// /////////////////////////////
// // Ejercicio 4
// // Calcular mayor numero en un array
// ///////////////////////////
//
// console.log("Mayor numero: " + calculateBiggest(randomNumbers));
// console.log("Mayor numero: " + calculateBiggest(unoDiez));
//
// function calculateBiggest(array) {
//   var biggest = array[0];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > biggest) {
//       biggest = array[i];
//     }
//   }
//   return biggest;
// }
// /////////////////////////////
// // Ejercicio 5
// // Mostrar numero en indice.
// ///////////////////////////
// var randomNumbers = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
// var index = 1;
//
// console.log("El numero es: " + showIndex(randomNumbers, index));
//
// function showIndex (array, index){
//   return array[index];
// }
// /////////////////////////////
// // Ejercicio 6
// // Mostrar numero repetido
// Resultado esperado:
// ///////////////////////////
// var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
// var repeated = [];
//
// console.log(showRepeated(array));
//
// function showRepeated(array) {
//   var repeated = [];
//   for (i = 0; i < array.length; i++) { // Comienzo a iterar el array de numeros
//     // Si indexOf no puede encontrar ninguna repeticion regresa "-1"(false).
//     if (repeated.indexOf(array[i])) { //Si encuentra, vuelvo a iterar el array de numeros, y comparo.
//       for (j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) { // Cuando encuentre una repeticion, lo copia al array repeated.
//           repeated.push(array[i]);
//           break;
//         }
//       }
//     }
//   }
//   return repeated;
// }
/////////////////////////////
// Ejercicio 7
// Mostrar elementos en un string:
///////////////////////////
// myColor = ["Red", "Green", "White", "Black"];
//
// console.log(myColor.join());
/////////////////////////////

/////////////////////////////
// /////////////Strings
/////////////////////////////
/////////////////////////////
// Ejercicio 1
// Mostrar numero reverso
/////////////////////////////
// var x = 32443;
//
// console.log("Número: "+ x);
// console.log("Reverso: "+ showReverse(x));
//
// function showReverse(number){
//    // Convierto el número a string
//   number = number + "";
//    // Separo las letras, hago el reverso y junto de vuelta.
//   return number.split("").reverse().join("");
//
// }
/////////////////////////////
// Ejercicio 2
// Mostrar numero reverso
/////////////////////////////
// var x = "webmaster";
//
// console.log("Palabra: " + x);
// console.log("Palabra ordenada alfabeticamente: " + sortAlpha(x));
//
// function sortAlpha(word) {
//   return word.split("").sort().join("");
// }
/////////////////////////////
// Ejercicio 3
// Capitalizar cada palavra
/////////////////////////////
// var capitalize = "prince of persia";
//
// console.log("Oracion: " + capitalize);
// console.log("Oracion capitalizada: " + uppercase(capitalize));
//
// function uppercase(str) {
//  var temporal = str.split(' ');// Separo la oracion por palabras
//  var palabras = [];
//
//  for (var x = 0; x < temporal.length; x++) {
//    // Indico que ponga mayuscula a cada item del array temporal.
//    palabras.push(temporal[x].charAt(0).toUpperCase() + temporal[x].slice(1));
//  }
//  return palabras.join(' ');// Junto las palabras nuevamente con un espacio.
// }
/////////////////////////////
// Ejercicio 4
// Encontrar la palabra mas larga.
/////////////////////////////
// var x = "Web Development Tutorial";
//
// console.log("Frase: " + x);
// console.log("Palabra mas larga: " + mayorPalabra(x));
//
// function mayorPalabra(frase) {
//   var palabraSeparada = frase.split(" "); //
//   // var palabraSeparada = frase.match(/\w[a-z]{0,}/gi); // Otra forma de separar palabras.
//   // Defino como palabra mas larga el primer item de las palabras separadas.
//   var resultado = palabraSeparada[0];
//   for (var i = 1; i < palabraSeparada.length; i++) {
//     if (resultado.length < palabraSeparada[i].length) { // Si es mayor que el anterior item, queda en resultado.
//       resultado = palabraSeparada[i];
//     }
//   }
//   return resultado;
// }
//////////////////////////////////////
