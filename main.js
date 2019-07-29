'use strict';
const patataString = 'Patata';

function writeThis(texto,repeat){
    for (let i = 0; i < repeat; i++){
        console.log(texto);
    }
}

const words = ['Patata','Aguacate','Pizza'];
const repeat = [10,7,50];

for(let j= 0; j < words.length ; j++){
    writeThis(words[j],repeat[j]);
}