'use strict'

//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const array2 = ['Black Widow', 'Iron Man', 'Spiderman', 'Scarlet Witch'];
const array3 = ['Last of Us', 'Horizon', 'Hogwarts Legacy', 'Assassins Creed', 'Ghost of Tsushima'];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return array.indexOf(array[i]);
        }
    }
}

console.log(findArrayIndex(array, 'Mosquito'));
console.log(findArrayIndex(array2, 'Scarlet Witch'));
console.log(findArrayIndex(array3, 'Hogwarts Legacy'));