// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// MAIN ------------------------------------------------------------ 
let string = prompt("Inserisci una parola: ");  
  
let validationInput = validationPalindrome(string);  
  
console.log(validationInput); 






// FUNCTIONS -------------------------------------------------

function validationPalindrome() {  
  
    let stringLenght = string.length;  
   
    for (let i = 0; i < stringLenght / 2; i++) {  
  
        if (string[i] !== string[stringLenght - 1 - i]) {  
            console.log("Questa parola NON è un palindromo!");  
        } else {
            console.log("Questa parola è un palindromo!"); 
        }  
    }
}
