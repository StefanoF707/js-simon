// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati




var randomNumbers = [];

do {
    var numberGenerated = randomNumbersGenerator(1, 100);
    randomNumbers.push(numberGenerated);

    var checkNumbers = checkIfNumberAlreadyExist(randomNumbers, numberGenerated);

    if (checkNumbers == false) {
        randomNumbers.push(numberGenerated);
    }
} while (randomNumbers.length < 5);

alert(randomNumbers);




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
