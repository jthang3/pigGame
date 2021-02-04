"use strict";
//turn
let firstPlayer,secondPlayer;
let randomStarter = Math.floor(Math.random() * Math.floor(2)) + 1;
randomStarter === 1 ? firstPlayer = true: secondPlayer = false;

//change background color
let changeColor = () => {
    if(firstPlayer){
        player2.style.boxShadow = "none";
        player1.style.boxShadow = "-10px 5px 5px black";
    }
    else {
        player1.style.boxShadow = "none";
        player2.style.boxShadow = "10px 5px 5px black";
    }
}

//player names
// let playerNames = document.querySelectorAll(".title");
// let i = 1;
// playerNames.forEach(name => {
//     name.textContent = prompt(`Please enter player${i}'s name`);
//     i++;
// })
let imageTags = document.querySelectorAll("img");



//player 1 stats

let player1 = document.querySelector(".player1");
let score1 = document.querySelector(".score1");
let current1 = document.querySelector("#current1");

//player 2 stats 

let player2 = document.querySelector(".player2");
let score2 = document.querySelector(".score2");
let current2 = document.querySelector("#current2");

//rolling a dice 
let rollDice = document.querySelector(".rollDice");
//hold 
let holdDice = document.querySelector(".hold");
let random;

//generate random from 1 to 6 everytime the usre click the button. 
let record = 0;
let score = 0;
let player1Score = 0;
let player2Score = 0;
changeColor();
rollDice.onclick = () => {
    random = Math.floor(Math.random() * Math.floor(6)) + 1;
    imageTags[record].style.display = "none";
    imageTags[random - 1].style.display = "block";
    record = random - 1;
    if(random === 1) {
        switchPlayer();
    }
    else {
        score = score + random;
    }
    firstPlayer ? myFirst(random,score): mySecond(random,score);
}

holdDice.onclick = () => {
    if(firstPlayer){
        player1Score = score + player1Score;
        score1.textContent = player1Score;
    }
    else {
        player2Score = score + player2Score;
        score2.textContent = player2Score;
    }
    switchPlayer();
}

let switchPlayer = () => {
    firstPlayer ? current1.textContent = 0: current2.textContent = 0;
    firstPlayer = !firstPlayer;
    secondPlayer = !secondPlayer;
    score = 0;
    changeColor();
}

let myFirst = (random,score) => {    
        current1.textContent = score;
}
let mySecond = (random,score) => {
    current2.textContent = score;
}


//new game

let newGame = document.querySelector(".newGame");
newGame.onclick = () => {
    imageTags[record].style.display = "none";
    randomStarter = Math.floor(Math.random() * Math.floor(2)) + 1;
    if(randomStarter === 1) {
        firstPlayer = true;
        secondPlayer = false;
    }
    else {
        firstPlayer = false;
        secondPlayer = true;
    }
    changeColor();
    //resetting player 1
    score1.textContent = 0;
    current1.textContent = 0;
    player1Score = 0;

        //resetting player 2
    score2.textContent = 0;
    current2.textContent = 0;
    player2Score = 0;
}







