'use strict'

//2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io';

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    fetch(`${baseUrl}?name=${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
});


