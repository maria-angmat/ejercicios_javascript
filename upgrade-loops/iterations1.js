'use strict'

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let item of products) {
    if (item.includes('Camiseta')) {
        console.log(item);
    } 
}