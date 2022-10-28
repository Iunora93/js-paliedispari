`use strict`
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const choice = prompt("Scegli pari o dispari");
console.log(choice);

/* Chiedo all'utente di inserire un numero */
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

/* Genero con una funzione un numero random da 0 a 5 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  /* Dichiaro al numero random il max e lo stampo in console */
  const cpuNum = getRndInteger(1, 5);
  console.log(cpuNum);

  /* Sommo il risultato dei due numeri */
  let sum = cpuNum + userNumber;
  console.log(sum);

/* Stabiliamo se la somma è pari o dispari */
function pariDispari( element ){
    if (element % 2 === 0 ) {
        return "pari";
    }else{
        return "dispari";
    }    
}

if(pariDispari(sum) === choice){
    alert("Hai vinto")
}else{
    alert("Hai perso")
}
