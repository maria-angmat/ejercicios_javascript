'use strict';

// Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } 
    else {
        return numberTwo;
    }
  }

let higherNum = sum(10, 14);
console.log(higherNum);