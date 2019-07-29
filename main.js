'use strict';
const patataString = 'Patata';

function ten(texto){
    for (let i = 0; i < 10; i++){
        console.log(texto);
    }
}

const words = ['Patata','Aguacate','Pizza'];
for(let j= 0; j < words.length ; j++){
    ten(words[j]);
}