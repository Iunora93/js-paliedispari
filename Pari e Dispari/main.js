`use strict`
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

function cpuNumber(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(cpuNumber(5));

  let sum = userNumber + cpuNumber;
  console.log(sum);