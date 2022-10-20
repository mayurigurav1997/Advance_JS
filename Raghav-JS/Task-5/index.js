//Generate a random number 
let y = Math.floor(Math.random() * 10 + 1);

let guess=1;
document.getElementById("submitguess").addEventListener("click", function(){
    let x = document.getElementById("GuessField").value;
    if(x == y){
        alert(`You guessed it right!! in ${guess} attempt`);
    }
    else if(x < y){
        guess++;
        alert("your guessed number is low");
    }
    else if(x > y){
        guess++;
        alert("your guessed number is larger");
    }
    else{
        alert("Please enter valid number");
    }
});