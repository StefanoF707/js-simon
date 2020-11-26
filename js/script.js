$(document).ready(
    function() {

        var randomNumbers = [];
        var userNumbers = [];
        var rightNumbers = [];
        var wrongNumbers = [];

        do {
            var numberGenerated = randomNumbersGenerator(1, 100);
            var checkRandomNumbers = checkIfNumberAlreadyExist(randomNumbers, numberGenerated);

            if (checkRandomNumbers == false) {
                randomNumbers.push(numberGenerated);
            }
        } while (randomNumbers.length < 5);

        alert("I numeri da indovinare sono: " + randomNumbers);

        var timeRemaining = 30;

        var countdown = setInterval(
            function () {

                if (timeRemaining == 0) {
                    $("span").text(timeRemaining);
                    clearInterval(countdown);

                    do {
                        var userChoise = parseInt(prompt("Inserisci un numero"));
                        var checkUserNumbers = checkIfNumberAlreadyExist(userNumbers, userChoise);

                        var compareNumbers = checkIfNumberAlreadyExist(randomNumbers, userChoise);

                        if (checkUserNumbers == true || userChoise > 100 || userChoise < 1 || isNaN(userChoise)) {
                            alert("Scelta non valida");
                        } else if (compareNumbers == true){
                            rightNumbers.push(userChoise);
                            userNumbers.push(userChoise);
                        } else if (compareNumbers == false) {
                            wrongNumbers.push(userChoise);
                            userNumbers.push(userChoise);
                        } else {
                            userNumbers.push(userChoise);
                        }
                    } while (userNumbers.length < 5);

                    if (rightNumbers.length == 5) {
                        alert("COMPLIMENTI, HAI VINTO!" + "\nHai indovinato " + rightNumbers.length + " numeri: " + rightNumbers + "\nHai sbagliato " + wrongNumbers.length + " numeri.");
                    } else if (wrongNumbers.length == 5) {
                        alert("SEI UNA CAPRA!" + "\nHai indovinato " + rightNumbers.length + " numeri." + "\nHai sbagliato " + wrongNumbers.length + " numeri: " + wrongNumbers)
                    } else if (rightNumbers.length == 1) {
                        alert("Hai indovinato " + rightNumbers.length + " numero: " + rightNumbers + "\nHai sbagliato " + wrongNumbers.length + " numeri: " + wrongNumbers);
                    } else if (wrongNumbers.length == 1) {
                        alert("Hai indovinato " + rightNumbers.length + " numeri: " + rightNumbers + "\nHai sbagliato " + wrongNumbers.length + " numero: " + wrongNumbers);
                    } else {
                        alert("Hai indovinato " + rightNumbers.length + " numeri: " + rightNumbers + "\nHai sbagliato " + wrongNumbers.length + " numeri: " + wrongNumbers);
                    }

                } else {
                    $("span").text(timeRemaining);
                    timeRemaining--;
                }

            }
        , 1000);

    }
);
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
