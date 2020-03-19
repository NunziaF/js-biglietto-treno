//calcolo biglietto del treno con relativi sconti diversi per le fasce d'età previste


// chiedo all'utente di inserire quanti km deve percorrere
var km = prompt("Quanti km vuoi percorrere?");

// chiedo all'utente di inserire quanti anni ha
var anni = prompt("Quanti anni hai?");

// moltiplico i km per il costo di 0.21€ al km (mi salvo il resultato)
var costo = km * 0.21;
console.log(costo);

// calcolo il costo dei biglietti con lo sconto per minorenni del 20% e per gli anziani del 40% (mi salvo il resultato)
var costomin = costo * 0.80;
var costoanz = costo * 0.60;

//metto in relazione l'età dell'utente con il costo del biglietto
if (anni < 18){
  msg = "Il costo del suo biglietto è " + costomin + "€";
} else if (anni > 65){
  msg = "Il costo del suo biglietto è " + costoanz + "€";
} else if (anni >=18 && anni <=65){
  msg = "Il costo del suo biglietto è " + costo + "€";
}

// output costo biglietto per l'utente in base all'età
document.getElementById('biglietto').innerHTML = msg;
