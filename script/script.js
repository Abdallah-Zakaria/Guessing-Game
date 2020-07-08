// 'use strict'

// //---------------------------------------------------------------------------------------------------------
// // Welcome message.

var userName = prompt("Please enter your name ");
var noName = "";
var repeatName = true;

while(repeatName){
    if (userName == noName){
        var userName = prompt("You didn't enter your name !, please try again");
    } else {
        var repeatName = false;
    }
}

var welcomeMessage = "Hello " + userName + ", Welcome to my guess game about me :) ";
alert(welcomeMessage);
console.log("the user name is: " + userName)
alert("I will ask you a seven question about me, GOOD LUCK " + userName);

// //---------------------------------------------------------------------------------------------------------
// // Stage 1, My five question.

alert("The first stage is five question just answer it using Yes or No")


var myQustion=[];
var myCorrectanswer=[];
var userAnswer= [];
var answer ="x";
var userResult =[];
var questionNo= 0;

var questionOne = "Do i live in Amman-Jordan ?";
var answerOne = "yes";
myQustion.push(questionOne);
myCorrectanswer.push(answerOne);

var questionTwo ="Did i study computer science ?";
var answerTwo = "no";
myQustion.push(questionTwo);
myCorrectanswer.push(answerTwo);

var questionThree = "Do i love coding ?";
var answerThree = "yes";
myQustion.push(questionThree);
myCorrectanswer.push(answerThree);

var questionFour = "i'm a vegetarian ?";
var answerFour = "no";
myQustion.push(questionFour);
myCorrectanswer.push(answerFour);


var questionFive = "Did i like football ?";
var answerFive = "yes";
myQustion.push(questionFive);
myCorrectanswer.push(answerFive);


var numberOfQustion= myQustion.length

for(var i=0 ; i < numberOfQustion ; i++ ){
    var answer= prompt(myQustion[i]).toLowerCase();
    if (answer !== "yes" && answer !== "no"){
        var answer = prompt("Use only yes or no to answer to this question : " + myQustion[i]).toLowerCase();
    }
    userAnswer.push(answer);
    console.log("my question was :" + myQustion[i] + " his answer was: " + answer)
    if (myCorrectanswer[i] == answer ){
        questionNo = i + 1;
        userResult.push(" Q" + questionNo + " True ");
    }else {
        questionNo = i + 1;
        userResult.push(" Q " + questionNo + " False ");
    }
}
var finalResultStage1 = "the final result for you " + userName + " was " + userResult
alert(finalResultStage1);
console.log(finalResultStage1);

// //---------------------------------------------------------------------------------------------------------
// // Stage 2, My 6th question.
alert("Now " + userName+ " we are in stage2, Try figure what the number in my head ? ");
alert("some hints : it's a even number between 0 and 100, GOOD LUCK :) ");

var myNumber = 76;
var userGuess = 0;
var repeatGuess = 0;
var remainGuess = 4 ;
var promptMessage =" start your gusses"; 
var loopON = true
while (loopON ){
    repeatGuess++;
    if (repeatGuess > 4){
        alert("you loss in my guess :( ,    My number was "  + myNumber );
        loopON = false;
        break;
    }
    userGuess = prompt("Your have " + remainGuess + " try: " + promptMessage );
    remainGuess--;
    if (userGuess > myNumber && userGuess <= 100){
        promptMessage = "try low number";
    }else if (userGuess < myNumber && userGuess > 0){
        promptMessage = "try high number";
    }else if (userGuess == myNumber ){
        alert("bravo " + userName + " you guess it in " + repeatGuess + " times :)")
        answer6th= "true";
        loopON = false;
    }else {
        promptMessage= "I told you " + userName+ " the number is between 0 and 100, i will not consider it as try" ;
        repeatGuess--;
        remainGuess++;
    }
}
//---------------------------------------------------------------------------------------------------------
// Stage 3, My 7th question.
alert("stage three know at least one of three country i visit, GOOD LUCK :) ")
var visitedCountry =["Egypt" , "United Arab Emirates" , "Malaysia" ];
var expectedCountry= ["1-Australia","2-Qatar", "3-Germany" , "4-Malaysia", "5-Turkey", "6-Egypt", "7-Iraq" , "8-Kuwait", "9-Lebanon","10-United Arab Emirates", "11--Indonesia", "12-Sweden", ];
var stillGuess = true;
var stillGuessTries = 0;
var remainTries = 6 - stillGuessTries;
while (stillGuess && stillGuessTries < 6 ){
    var userCountryGuess = prompt("Choose one country out of three i visited ??  you have " +remainTries +" try  "+ expectedCountry );
    for (var z=0 ; z < visitedCountry.length ; z++ ){
        if (visitedCountry[z] == userCountryGuess){
            alert("Yes, you correct, i visit " + visitedCountry);
            stillGuess = false;
            answer7th = "true";
            break;
        }
    }
    stillGuessTries++;
}
//---------------------------------------------------------------------------------------------------------
// Stage 4, The user result 
var finalResultAllStages = userResult + " ,Q6 " + answer6th + " ,Q7 " + answer7th;
alert("your final results "+ userName + " is: " +finalResultAllStages + " THANK YOU FOR YOUR TIME :)");
console.log(finalResultAllStages);
console.log("test")