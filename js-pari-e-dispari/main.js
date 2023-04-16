/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// MAIN -----------------------------------------------------------

let evenOrOddUserChoice = prompt ("Pari o dispari? ");

let numberUserChoice = prompt("Inserisci un numero da 1 a 5: ");
numberUserChoice = parseInt(numberUserChoice);

numberUserChoice = getARandomNumberBetween1And5();
numberComputer = getRandomNumberFromPC();

console.log("Hai scelto: " + evenOrOddUserChoice);

console.log("Numero del computer: " + numberComputer);
console.log("Numero Utente: " + numberUserChoice);

gameResult = sumOfNumbers();

console.log("Il risultato è: " + gameResult);




// FUNCTIONS -------------------------------------------------------


function getARandomNumberBetween1And5() {

    let randomNumber = numberUserChoice;

    if (1 <= randomNumber <= 5) {
        return randomNumber;
    } else {
        console.log("Inserire un numero fra 1 e 5!");
    }
}


function getRandomNumberFromPC() {
    let numberPC = Math.floor(Math.random() * 5) + 1;
    return numberPC;
}
  

function sumOfNumbers() {
    let sum = numberUserChoice + numberComputer;

    if (sum % 2) {
        console.log("La somma dei numeri è: Dispari!");
    } else {
        console.log ("La somma dei numeri è: Pari!");
    }

    return sum;
}