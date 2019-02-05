
//VArIABLES
var words = ["attackontitan", "tokyoghoul", "bleach", "naruto", "dragonballz", "inuyasha", "fairytail"]

//Empty variables
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesremaining = 9;


//GAME STArT FUNCTION

function Game() {

    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorect)
}



//AUDIO FUNCTION

//variables for audio function
var aot = document.getElementById("attackontitan");
var tokg = document.getElementById("tokyoghoul");
var b = document.getElementById("bleach");
var nar = document.getElementById("naruto");
var dbz = document.getElementById("dragonballz");
var inu = document.getElementById("inuyasha");
var fair = document.getElementById("fairytail");


function aud() {
    //AttackOnTitan

    if (randomWord === words[0]) {
        nar.pause();
        dbz.pause();
        inu.pause();
        fair.pause();
        b.pause();
        tokg.pause();
        aot.play();
        document.getElementById("image").src = "./assets/images/AOT.gif";
    }

    //Tokyo Ghoul

    else if (randomWord === words[1]) {
        nar.pause();
        dbz.pause();
        inu.pause();
        fair.pause();
        b.pause();
        aot.pause();
        tokg.play();
        document.getElementById("image").src = "./assets/images/Tokyoghoul.gif";
    }

    //Bleach

    else if (randomWord === words[2]) {
        nar.pause();
        dbz.pause();
        inu.pause();
        fair.pause();
        tokg.pause();
        aot.pause();
        b.play();
        document.getElementById("image").src = "./assets/images/Bleach.gif";
    }

    //Naruto

    else if (randomWord === words[3]) {
        dbz.pause();
        inu.pause();
        fair.pause();
        b.pause();
        tokg.pause();
        aot.pause();
        nar.play();
        document.getElementById("image").src = "./assets/images/Naruto.gif";
    }
    //Dragon Ball Z

    else if (randomWord === words[4]) {
        inu.pause();
        fair.pause();
        b.pause();
        tokg.pause();
        aot.pause();
        nar.pause();
        dbz.play();
        document.getElementById("image").src = "./assets/images/DBZ.gif";
    }

    //Inuyasha

    else if (randomWord === words[5]) {
        dbz.pause();
        fair.pause();
        b.pause();
        tokg.pause();
        aot.pause();
        nar.pause();
        inu.play();
        document.getElementById("image").src = "./assets/images/Inuyasha.gif";
    }

    //Fairytail

    else if (randomWord === words[6]) {
        dbz.pause();
        inu.pause();
        b.pause();
        tokg.pause();
        aot.pause();
        nar.pause();
        fair.play();
        document.getElementById("image").src = "./assets/images/Fairytail.gif";
    }
};


//Reset Function
function reset() {
    guessesremaining = 9;
    wrongGuess = [];
    blanksAndCorect = [];
    Game()
}

//CHECK LETTErS/COMPArE FUNCTION


//If/Else
function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorect[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesremaining--;
    }
    console.log(blanksAndCorect);
}


//FINAL COMPLETE FUNCTION



function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesremaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorect.toString()) {
        wins++;
        aud()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesremaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/ta3.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesremaining;
}


Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

