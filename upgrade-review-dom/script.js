'use strict'

//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countriesList = document.createElement('ul');

for (let i = 0; i < countries.length; i++) {
    const element = document.createElement('li');
    element.innerHTML = countries[i];
    element.setAttribute('id', `countries${i+1}`);
    countriesList.appendChild(element);   

    const removeBtn1 = document.createElement('button');
    removeBtn1.innerHTML = 'Remove';
    element.appendChild(removeBtn1);

    const removeItem = () => {
        let removeItem = document.getElementById(`countries${i+1}`);
        removeItem.remove();
    }

    removeBtn1.addEventListener('click', removeItem);
}

document.body.appendChild(countriesList);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeMe = document.querySelector('.fn-remove-me');
removeMe.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere"

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const carsDiv$$ = document.querySelector('[data-function="printHere"]');
const carList = document.createElement('ul');

for (let i = 0; i < cars.length; i++) {
    const car = document.createElement('li');
    car.innerHTML = cars[i];
    car.setAttribute('id', `cars${i+1}`)
    carList.appendChild(car);
    
    const removeBtn2 = document.createElement('button');
    removeBtn2.innerHTML = 'Remove';
    car.appendChild(removeBtn2);

    const removeItem = () => {
        let removeItem = document.getElementById(`cars${i+1}`);
        removeItem.remove();
    }

    removeBtn2.addEventListener('click', removeItem);
}


carsDiv$$.appendChild(carList);

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const objectList = document.createElement('ul');
objectList.className = 'list-object'

for (const citie of countries2) {
    const elementList = document.createElement('li');
    elementList.className = 'list-item';
    const divList = document.createElement('div');
    const title = document.createElement('h4');
    title.innerHTML = citie.title;
    divList.appendChild(title);

    const img = document.createElement('img');
    img.setAttribute('src', citie.imgUrl);
    divList.appendChild(img);

    elementList.appendChild(divList);
    objectList.appendChild(elementList);
}


document.body.appendChild(objectList);

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const btn = document.createElement('button');
btn.type = 'button';
btn.innerHTML = 'Button';
document.body.appendChild(btn);

const removeBtn = () => {
    const lastItem = objectList.lastChild;
    lastItem.remove();
}

btn.addEventListener('click', removeBtn);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

//EJECUTADO DENTRO DE CADA LISTA


