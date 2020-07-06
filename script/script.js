'use strict'

// Welcome message.
var userName = prompt("Please enter your name ");
var welcomeMessage = "Hello " + userName + ", Welcome to my guess game about me :) ";
var noName = "";
if (userName !== noName){
    alert(welcomeMessage);
} else {
    var userName = prompt("You didn't enter your name !, please try again");
}

// My five question.
alert("I will ask you a five question about me, just answer it using Yes or No");
var questionOne = "Do i live in Amman-Jordan ?";
var questionTwo ="Did i study computer science ?";
var questionThree = "Do i love coding ?";
var questionFour = "i'm a vegetarian ?";
var questionFive = "Did i like football ?";

// The user five answer on my question.
var answerOne = prompt(questionOne).toLowerCase();
if (answerOne !== "yes" && answerOne !== "no"){
    var answerOne = prompt("Use only yes or no to answer this question : " + questionOne).toLowerCase();
}
var answerTwo = prompt(questionTwo).toLowerCase();
if (answerTwo != "yes" && answerTwo != "no"){
    var answerOne = prompt("Use only yes or no to answer this question : " + questionOne).toLowerCase();
}
var answerThree = prompt(questionThree).toLowerCase();
if (answerThree != "yes" && answerThree != "no"){
    var answerOne = prompt("Use only yes or no to answer this question : " + questionOne).toLowerCase();
}
var answerFour = prompt(questionFour).toLowerCase();
if (answerFour != "yes" && answerFour != "no"){
    var answerFour = prompt("Use only yes or no to answer this question : " + questionOne).toLowerCase();
}
var answerFive = prompt(questionFive).toLowerCase();
if (answerFive != "yes" && answerFive != "no"){
    var answerFive = prompt("Use only yes or no to answer this question : " + questionOne).toLowerCase();
}

//  Question correctly
if (answerOne == "yes"){
    var userResult = "Q1. True";
} else {
    var userResult = "Q1. False";
}

if (answerTwo == "no"){
    var userResult = userResult + " Q2. True ";
} else {
    var userResult = userResult + " Q2. False";
}

if (answerThree == "yes"){
    var userResult = userResult + " Q3. True";
} else {
    var userResult = userResult + " Q3. False";
}

if (answerFour == "no"){
    var userResult = userResult + " Q4. True";
} else {
    var userResult = userResult + " Q4. False";
}

if (answerFive == "yes"){
    var userResult = userResult + " Q5. True";
} else {
    var userResult = userResult + " Q5. False";
}

alert("your answers result : " + userResult);