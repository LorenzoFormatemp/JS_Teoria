/* 
    scope globale:
        - variabili accessibili ovunque nel codice
        - fuori da ogni blocco
*/
const containerElement = document.getElementById('main_container');

let myVar = 'Scope globale';

if(true){
    console.log(myVar);

    let blockVar = 'Scope di tipo blocco';
    console.log(blockVar);
}

console.log(myVar);
console.log(blockVar);



