/* 
    stringa => sequenza di caratteri all'interno di apici o doppi apici
*/
const string = "stringa 1";
const string1 = 'stringa 2';

// somma stringhe
const string3 = string + " " + string1; 

// virgolette => differenziano da numero o altri tipi di dato
const string4 = 10; // numero
const string5 = '10'; // stringa

const string6 = string4 + string5; // esempio di conversione implicita

// template literal
    /* 
        1. posso scrivere su più righe
        2. posso metterci direttamente codice JS
    */
const newDiv = `
    <div class="container">
        <p>${string6}</p>
    </div>
`;

const newString = "string6"; // è interpretato come testo e non come variabile JS
