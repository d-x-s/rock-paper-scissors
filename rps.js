console.log("hello");
let opt = document.querySelectorAll(".option");


function output(e) {
    console.log(e);
}

const options = Array.from(document.querySelectorAll('.option'));
options.forEach(option => option.addEventListener("click", output));



// let playerLives = 5;
// let computerLives = 5;

// function getHand() {
//     return Math.floor(Math.random() * 3);
// }

// function computerPlay() {
//     let computerHand = getHand();
//     return computerHand;
// }

// function youPlay() {
//     let playerHand = prompt("Enter rock, paper or scissors").toString().toLowerCase();
//     switch (playerHand) {
//         case "rock":
//             console.log("You have selected rock.")
//             return 0;

//         case "paper":
//             console.log("You have selected paper.")
//             return 1;

//         case "scissors":
//             console.log("You have selected scissors.")
//             return 2;

//         default:
//             console.log("Not a valid input.")
//     }
// }

// function playRound(playerSelection, computerSelection) {
//     // 0 = rock
//     // 1 = paper
//     // 2 = scissors

//     if (playerSelection == computerSelection) {
//         console.log("It's a tie!");
//         return;
//     }

//     if (playerSelection == 0) {
//         if (computerSelection == 1) {
//             console.log("You chose rock, computer chose paper. You lose!")
//             playerLives--;
//             return;
//         }
//         else {
//             console.log("You chose rock, computer chose scissors. You win!")
//             computerLives--;
//             return;
//         }
//     }

//     if (playerSelection == 1) {
//         if (computerSelection == 0) {
//             console.log("You chose paper, computer chose rock. You win!")
//             computerLives--;
//             return;
//         }
//         else {
//             console.log("You chose paper, computer chose scissors. You lose!")
//             playerLives--;
//             return;
//         }
//     }

//     if (playerSelection == 2) {
//         if (computerSelection == 1) {
//             console.log("You chose scissors, computer chose paper. You win!")
//             computerLives--;
//             return;
//         }
//         else {
//             console.log("You chose scissors, computer chose rock. You lose!")
//             playerLives--;
//             return;
//         }
//     }
// }

// function game() {
//     while (playerLives > 0) {
//         if (computerLives == 0) {
//             console.log("You have won!")
//             return;
//         }
//         let playerHand = youPlay();
//         let computerHand = computerPlay();
//         playRound(playerHand, computerHand);
//         console.log(`Player has ${playerLives} lives remaining.`);
//         console.log(`Computer has has ${computerLives} lives remaining.`);
//     }
//     console.log("You have lost.");
// }