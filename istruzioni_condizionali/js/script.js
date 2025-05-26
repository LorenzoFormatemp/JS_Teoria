/* 
    ISTRUZIONI CONDIZIONALI:
        - servono a dire al programma come si deve comportare date determinate condizioni
*/

/* 
    SINTASSI:

    if(condizione){ // se la condizione è vera

        // esegui questo blocco di codice

    } else { // altrimenti
        
        // esegui questo blocco di codice 
    }

    TERNARIO

    const verifica = condizione ? 'fai a' : 'fai b';
    const verifica1 = condizione ? (  ternario ) : 'fai b';

    // SCONSIGLIO

    if(condizione) // esegui questo blocco di codice;
    else // altrimenti esegui quest'altro blocco di codice;

*/

const users = [];
const username = 'Luca';

// ternario => preferibile in questi casi
let is_user = users.includes(username) ? true : false;

// if tradizionale
if(users.includes(username)){
    is_user = true;
} else {
    is_user = false;
}

// if inline => senza graffe (cercate di evitarlo)
if(users.includes(username)) is_user = true;
else is_user = false;

console.log(is_user);


/* 
    SE HO DIVERSE CONDIZIONI:

        if(condizione1){
            //codice
        } else if(condizione2){
            // codice 
        } else  if(condizione3){
            // codice 
        } else {
            // codice 
        }
*/

/* 

    OPERATORI RELAZIONALI

*/
const val1 = 3; // numero
const val2 = '3'; // stringa

// UGUAGLIANZA E IDENTITà
let result = (val1 == val2) ? true : false; // true
result = (val1 === val2) ? true : false; // false
