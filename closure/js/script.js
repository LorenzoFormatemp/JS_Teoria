function creaContatore(){
    let contatore = 0;

    return function(){
        contatore++;
        console.log(contatore);
    } 
}

const conta = creaContatore();
conta();
conta();
conta();
conta();