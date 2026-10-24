//Selecting elements

var inputBox=document.getElementById("inputBox")
var result = document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess = 3

//Generate the random number from 1 to 5

var randomNumber =Math.floor(Math.random()*10)+1
if (randomNumber>5){
    randomNumber=randomNumber-5
}

//Event handler function

function checkthenumber(){

    if(inputBox.value==randomNumber)
    {
        alert("Right!")
        result.textContent="You are Right"
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0){
            alert("You Lost! Generated random number is "+randomNumber)
            
        }
        guesscount.textContent= "Available Guesses:"+noofguess
        result.textContent="You are Wrong"
    }

}