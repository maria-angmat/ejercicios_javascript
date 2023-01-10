'use strict'

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];

const newList = [...pointsList];
console.log(newList);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy};
console.log(toyCopy);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const list = [32, 54, 21, 64, 75, 43];
const list2 = [54,87,99,65,32];

const bothLists = [...list, ...list2];
console.log(bothLists);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toyItem = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToy = {...toyItem, ...toyUpdate};
console.log(newToy);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newColors = [...colors];
newColors.splice(1,1);
console.log(newColors);