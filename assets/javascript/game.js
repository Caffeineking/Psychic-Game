var wins = 0;
        var losses = 0;
        var guessesTried = 0; 
        var currentGuesses = [];
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];       

        var guessesLeft = 9;        
    // Create variables that hold references to the places in the HTML where we want to display things.
    var userChoiceText = document.getElementById("userchoice-text");   
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-text");            
    // This function is run whenever the user presses a key.
        document.onkeyup = function(event) {
        var userGuess = event.key;
        var randomAlphabet =  alphabet[Math.floor(Math.random() * alphabet.length)];
        currentGuesses.push(userGuess);
        console.log("your current Guesses " + currentGuesses);         
        if (guessesTried <=  8){            
            if (userGuess === randomAlphabet){
            wins++;
            alert("you got it right!");                        
             }
            else if (userGuess != randomAlphabet) {
            guessesTried++;
            guessesLeft--;      
            alert("youre so dumb!");                                  
            }        
            console.log("Guesses Tried " + guessesTried);
            console.log("guesses left " + guessesLeft);
        }        
        if (guessesTried === 9){
            losses++;       // why do I have to switch this order with ----return guessesTried = 0;
            guessesLeft = 9;
            currentGuesses = [];
            guessesTried = 0;
            guessesLeft = 9;
            alert("Game Over!");
            }    
        userChoiceText.textContent = "You choose: " + currentGuesses;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesText.textContent = "guesses left: " + guessesLeft;   
    // write logic above here ^^^^^
    };
    