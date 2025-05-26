// 1. Dichiarazione variabile:  (parola chiave) + nomeVariabile
const variabile1 = 'valore';
let variabile2;
var variabile3;

// 2. CONST
    // non riassegnabile
    // nel momento in cui si dichiara le va assegnato un valore

//const esempio; //TypeError
const esempio = 'Esempio'; 
esempio = 'Esempio1'; //TypeError

// 3. LET
    // riassegnabile
    // può essere dichiarata e successivamente le si può assegnare un valore
let esempio1; // OK
esempio1 = 'Testo';
esempio1 = 12;
esempio1 = null;

console.log(variable); // qui avrò errore
let variable;

// 4. VAR
    // comportamento simile a let
var number = 2;
number = 10;

var string;
string = 'testo';

console.log(newVar); // undefined
var newVar = 140;

/* 
    5. Come chiamare le variabili? 
*/

//const 1ciao = 'agfa'; => no numeri iniziali
const nuova_variabile = '...'; // OK
const nuovaVariabile = '....'; // OK
//const #variable = '...' // => evitare caratteri particolari
/* let let;
const const; */  // => no parole chiave

/* 
    Tipi di dato in JS
*/

// strings
let string = 'stringa'; let string1 = '';// anche il vuoto è una stringa

// number
let number = 10.5; // numeri: interi e decimali

// boolean: v/f
let bool1 = true;
let bool2 = false;

// undefined
let defined;
console.log(defined); // trova la variabile, ma non ha valore, perciò la legge come undefined
// null
let valore_nullo = null;

// object
const obj = {
    chiave1: 'valore1',
    chiave2: 10,
    saluta: function saluto(){
    }
}

// function
function fun1(){};