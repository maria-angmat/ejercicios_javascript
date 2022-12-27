'use strict'

//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(param) {
    let newArray = [];
    for (let i = 0; i < duplicates.length; i++) {
        const element = duplicates[i]
        if (!newArray.includes(element)) {
            newArray.push(element);
        } 
    }
    return newArray;
  }

  console.log(removeDuplicates(duplicates));

