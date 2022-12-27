'use strict'

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter() {
    
    let counter = [];

    for (let word of counterWords) {
        if (counter[word]) {
            counter[word]++;
        } else {
            counter[word] = 1;
        }      
    }
    return counter;
  }

  console.log(repeatCounter(counterWords));