'use strict';


//1.1
function clickEvent(event){
    console.log(event);
}

document.querySelector('#btnToClick').addEventListener('click', clickEvent);


//1.2
function focusValue(event){
    console.log(event.target.value);
}

document.querySelector('.focus').addEventListener('focus', focusValue);
