'use strict'

const number1 = 10;
const number2 = 20;
const number3 = 2;

//PRIMERO
if (number2/number1 == 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

//SEGUNDO
if (number1 !== number2) {
    console.log("number 1 es estrictamente distinto a number2")
}

//TERCERO
if (number3 != number1) {
    console.log('number3 es distinto number1');
}

//CUARTO
if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
}

//QUINTO
if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

//SEXTO
if (number2 / 2 == number1 || number1 / 5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }