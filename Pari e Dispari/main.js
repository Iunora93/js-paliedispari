`use strict`
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/* Chiedo all'utente di inserire un numero */
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

/* Genero con una funzione un numero random da 0 a 5 */
function cpuNumber(max) {
    return Math.floor(Math.random() * max);
  }
  /* Dichiaro al numero random il max e lo stampo in console */
  const cpuNum = cpuNumber(5);
  console.log(cpuNum);

  /* Sommo il risultato dei due numeri */
  let sum = cpuNum + userNumber;
  console.log(sum);

element = 0;
let pariDispari = sum;

/* Stabiliamo se la somma è pari o dispari */
function pariDispari( element ){
    if (element % 2 === 0 ) {
        return "pari";
    }else{
        return "dispari";
    }    
}
element.alert("il numero è pari");
