/*BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50*/
alert("Benvenuto nel campo minato per giocare premi Ok");

//elenco numeri casuali
var arrayBombe = [];
//numero bombe modificabile
const numeroBombe = 16;

var max = 100;

//elenco numeri utente
var arrayNumeriUt = [];

//l'utente decide la difficoltà
do {
    var difficoltàUt = prompt("Inserire difficolta: 0 per Facile, 1 per Medio, 2 per difficile");
    console.log(difficoltàUt);
} while (difficoltàUt > 2)

if (difficoltàUt == 0) {
    alert("Hai scelto la difficoltà Facile")
} else if (difficoltàUt == 1) {
    alert("Hai scelto la difficoltà Medio")
    max = 80;
} else if (difficoltàUt == 2) {
    alert("Hai scelto la difficoltà Difficile")
    max = 50;
}

//genero e controllo che i numeri siano diversi
var i = 0;
do {
    var numeroCasuale = numeroRandom(1,max);
    if (presente(arrayBombe,numeroCasuale)==false) {
        arrayBombe.push(numeroCasuale);
        i++;
    }   
} while (arrayBombe.length < numeroBombe);

console.log(arrayBombe);

//flag per interrompere il ciclo
var partitaPersa = false; 

while (arrayNumeriUt.length < (max - numeroBombe) && partitaPersa==false) {
    partitaPersa = false;
    do {
        //variabile numero utente
        var numeroUt = parseInt( prompt("Inserire numero da 1 a " + max));
        if ((isNaN(numeroUt)) || (numeroUt < 1) || (numeroUt > max)) {
            alert("Inserire valore valido")
        }
    } while ((isNaN(numeroUt)) || (numeroUt < 1) || (numeroUt > max))
    
    if (presente(arrayNumeriUt,numeroUt)==false) {
        //inserisco il numero utente nell'array
        arrayNumeriUt.push(numeroUt);
    } else if (presente(arrayNumeriUt,numeroUt)==true) {
        //verifico che il numero non è stato utilizzato
        alert("Il numero è stato utilizzato");
    }
    
    if (presente(arrayBombe,numeroUt)==true) {
        alert("Boom hai preso il numero sbagliato");
        alert("Il tuo punteggio è: " + arrayNumeriUt.length);
        // alert("Ritenti?");
        // location.reload();
        partitaPersa = true;
    }

     console.log(arrayNumeriUt);
}




//funzione numeri random
function numeroRandom (min,max) {
   return Math.floor(Math.random()*(max - min + 1) + min);
};
//funzione presente nell'array
function presente (array,n) {
    var risultato = false;

    for (var i=0; i<array.length; i++) {
        if (array[i] == n) {
            risultato = true;
        } 
    }
    return risultato;
}