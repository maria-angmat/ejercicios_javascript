'use strict'

//Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

const swap = (array, index1, index2) => {
    let change = array[index1];
    array[index1] = array[index2];
    array[index2] = change;

    return array;
}

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log(swap(array, 1, 3));

