`use strict`

const userWord = prompt("Inserisci una parola");
console.log(userWord);

function checkWord(word) {
    let reverseWord = "";
    for (let i = word.length -1; i >= 0; i--){
        reverseWord = reverseWord + word[i];
    }
    if ( reverseWord === word) {       
        return true;
    }else{
        return false;
    }
}
if (checkWord(userWord) === true){
    alert("la parola è palindroma");
}else{
    alert("non è palindroma");
}