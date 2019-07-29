'use strict';
const patataString = 'Patata';

function writeThis(texto,repeat){
    for (let i = 0; i < repeat; i++){
        console.log(texto);
    }
}

const myWordList =  [
    {
      text: 'Pencil',
      total: 6
    },
    {
      text: 'Thermo',
      total: 2
    },
    {
      text: 'TV',
      total: 8
    },
    {
      text: 'Phone',
      total: 4
    }
  ];

for(let j= 0; j < myWordList.length ; j++){
    
    writeThis(myWordList[j].text,myWordList[j].total);
} 