////////////////
// Ejercicio 1
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
// // Ejercicio 5
// // Mostrar numero en indice.
// ///////////////////////////
var randomNumbers = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var repeated = showRepeat(randomNumbers);

for (var i = 0; i < repeated.length; i++) {
    console.log(repeated[i]);
}


function showRepeat(array) {
  var repeated = [0];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          repeated.push(array[j]);
        }
    }
  }
  return repeated;
}
/////////////////////////////
// Ejercicio 5
// Mostrar numero en indice.
///////////////////////////
