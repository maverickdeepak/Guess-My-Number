'use strict';

// console.log(document.querySelector('.message').textContent = 'Correct Number');

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Game Logic Start Here 

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if (!guess) {
        document.querySelector('.message').textContent = '🚫 Not an Number'

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '🤔 Too High'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😥 You Lose'
        }

    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '😐 Too Low'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😥 You Lose'
        }
    }
})

// Game RESET Start here

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = 0;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = 0;
})