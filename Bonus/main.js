//calcolo di quanti minuti mancano alla fine dell’ora?

//Creo un oggetto che si chiama d che contiene tutte le informazioni riguardo a giorno e ora in questo momento
var d = new Date();

// Sottraggo a 60 minuti i minuti correnti
var mancanti = 60 - d.getMinutes()

// output minuti mancanti alla fine dell’ora
document.getElementById("minutimancanti").innerHTML = "I minuti che mancano alla fine dell'ora sono " + mancanti;


//Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.

//Chiedo all'utente l'età della prima persona
var persona1 = prompt("inserisci l'età della prima persona");

//Chiedo all'utente l'età della seconda persona
var persona2 = prompt("inserisci l'età della seconda persona");

//Verifico quale delle due età è la più grande
if (persona1 > persona2){
  msg = "Tra le due persone prese in esame quella più grande ha " + persona1 + " anni";
} else if (persona1 < persona2){
  msg = "Tra le due persone prese in esame quella più grande ha " + persona2 + " anni";
}

// output dell'età più grande
document.getElementById("eta").innerHTML = msg;
