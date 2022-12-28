'use strict'

//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme


const btn$$ = document.querySelector('.showme');

console.log(btn$$);

//Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1$$ = document.querySelector('#pillado');
console.log(h1$$);

//1.3 Usa querySelector para mostrar por consola todos los p

const pAll$$ = document.querySelectorAll('p');
console.log(pAll$$);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemon$$ = document.querySelectorAll('.pokemon');
console.log(allPokemon$$);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const allTestMe$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(allTestMe$$);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

console.log(allTestMe$$[2]);

