'use strict'

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv$$ = document.createElement('div');
document.body.appendChild(newDiv$$);
console.log(newDiv$$);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDiv2 = document.createElement('div');
const newP = document.createElement('p');

document.body.appendChild(newDiv2);
newDiv2.appendChild(newP);

console.log(newDiv2);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const newDiv3 = document.createElement('div');

for (let i = 0; i < 6; i++) {
    const paragraph = document.createElement('p');
    newDiv3.appendChild(paragraph);
}

document.body.appendChild(newDiv3);
console.log(newDiv3);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const newText = document.createElement('p');
newText.innerHTML = 'Soy dinámico!';

document.body.appendChild(newText);
console.log(newText);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const customH2 = document.querySelector('.fn-insert-here');
customH2.innerHTML = 'Wubba Lubba dub dub';

console.log(customH2);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listApps = document.createElement('ul');

for (let i = 0; i < apps.length; i++) {
    const element = document.createElement('li');
    element.innerHTML = apps[i];
    listApps.appendChild(element);
}

document.body.appendChild(listApps);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeNodes = document.querySelectorAll('.fn-remove-me');

for (let i = 0; i < removeNodes.length; i++) {
    removeNodes[i].remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const middleContent = document.createElement('p');
middleContent.innerText = 'Voy en medio!';

const fnDiv = document.body.querySelectorAll('div.fn-insert-here');
document.body.insertBefore(middleContent, fnDiv[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const allDivs = document.querySelectorAll('div.fn-insert-here');
for (let i = 0; i < allDivs.length; i++) {
    const textInside = document.createElement('p');
    textInside.innerHTML = 'Voy dentro!';
    allDivs[i].appendChild(textInside);
}





