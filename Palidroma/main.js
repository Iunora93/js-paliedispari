`use strict`

const word = prompt("Inserisci una parola");
console.log(word);


let found = false;

function checkWord(element) {
    for (let i = word.length -1; i >= 0; i--);
    if ( word === element && found != word.length) {
    return true;
}
    console.log(word[i]);
}