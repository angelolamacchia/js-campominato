/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/
alert("Benvenuto nel campo minato per giocare premi Ok")

//elenco numeri casuali
var arrayNumeri = [];

//genero e controllo che i numeri siano diversi
var i = 0;
do {
    var numeroCasuale = numeroRandom(1,100);
    if (presente(arrayNumeri,numeroCasuale)==false) {
        arrayNumeri.push(numeroCasuale);
        i++;
    }   
} while (arrayNumeri.length < 16);

console.log(arrayNumeri);

//elenco numeri utente
var arrayNumeriUt = [];
    
while (arrayNumeriUt.length < 84) {
    //variabile numero utente
    var numeroUt = parseInt( prompt("Inserire numero da 1 a 100"));

    if (presente(arrayNumeriUt,numeroUt)==false) {
        //inserisco il numero utente nell'array
        arrayNumeriUt.push(numeroUt);
    } else {
        alert("Il numero è stato utilizzato");
    }
    console.log(arrayNumeriUt);
    
    if (presente(arrayNumeri,numeroUt) ==true) {
        alert("Boom hai preso il numero sbagliato");
        alert("Il tuo punteggio è: " + arrayNumeriUt.length);
        alert("Ritenti?");
        location.reload();
        break; 
    } else {
        alert("Sei fortunato il numero non era nell'elenco");
    }
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