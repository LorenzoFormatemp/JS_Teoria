/* 
    1. scope globale:
        - variabili accessibili ovunque nel codice
        - fuori da ogni blocco
    2. scope blocco 
*/
/* const containerElement = document.getElementById('main_container');

let myVar = 'Scope globale';

if(true){
    console.log(myVar);

    let blockVar = 'Scope di tipo blocco';
    console.log(blockVar);
}

console.log(myVar);
console.log(blockVar); */

let globalVar = 'Sono una variabile globale';

function miaFunzione(){ // 3. scope di funzione
    let funzioneVar = 'Mi trovo dentro la funzione';
    console.log(funzioneVar);
    console.log(globalVar);

    return funzioneVar;
}

const valoreDiFunzione = miaFunzione();

console.log(globalVar);
console.log(funzioneVar);

