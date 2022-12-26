'use strict';

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(param) {
    let longestWord = avengers[0];

    for (let avenger of avengers) {
        if (avenger.length > longestWord.length) {
            longestWord = avenger;
        }
    }
    return longestWord;
}

let result = findLongestWord ();
console.log(result);