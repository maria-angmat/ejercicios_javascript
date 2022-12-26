'use strict'

//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let isApproved; 
for (let index = 0; index < alumns.length; index++) {
    if (alumns[index].T1 + alumns[index].T2 + alumns[index].T3 >= 2) {
        alumns[index].isApproved = true;
    } else {
        alumns[index].isApproved = false;
    }      
}

console.log(alumns);