// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati




var randomNumbers = [];
var userNumbers = [];

do {
    var numberGenerated = randomNumbersGenerator(1, 100);
    var checkRandomNumbers = checkIfNumberAlreadyExist(randomNumbers, numberGenerated);

    if (checkRandomNumbers == false) {
        randomNumbers.push(numberGenerated);
    }
} while (randomNumbers.length < 5);

alert(randomNumbers);

setTimeout(
    function() {

        do {
            var userChoise = parseInt(prompt("Inserisci un numero"));
            var checkUserNumbers = checkIfNumberAlreadyExist(userNumbers, userChoise);

            if (checkUserNumbers == true || userChoise > 100 || userChoise < 1 || isNaN(userChoise)) {
                alert("Scelta non valida");
            } else {
                userNumbers.push(userChoise);
            }

        } while (userNumbers.length < 5);

        console.log(userNumbers);
    }
, 3000);




//--------------------------------------------------------
function randomNumbersGenerator(nMin, nMax) {
    return Math.floor(Math.random() * (nMax - nMin) + 1) + nMin;
}

function checkIfNumberAlreadyExist(array, element) {
    var check = false;
    for (var i = 0; i < array.length; i++ ) {
        if (array[i] == element) {
            check = true;
        }
    }
    return check;
}
