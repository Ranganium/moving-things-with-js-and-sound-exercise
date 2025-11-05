"use strict";
// Your code here

const dodger = document.getElementById("dodger");

// Sound effects

const wakaSound = document.getElementById("waka-sound");
const movementSound = document.getElementById("movement-sound");

function playSoundOnMovement() {
  wakaSound.currentTime = 0;
  wakaSound.play();
}

function playMovementSound() {
  movementSound.currentTime = 0;
  movementSound.play();
}
// General movement system

// Move Dodger Left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  } else if (left === 0) {
    playMovementSound();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
    playSoundOnMovement();
  }
});

// Move Dodger Right
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10);

  if (right < 360) {
    dodger.style.left = `${right + 5}px`;
  } else if (right === 360) {
    playMovementSound();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
    playSoundOnMovement();
  }
});

// Move Dodger Up
function moveDodgerUp() {
  const topNumbers = dodger.style.bottom.replace("px", "");
  const top = parseInt(topNumbers, 10);

  if (top < 380) {
    dodger.style.bottom = `${top + 5}px`;
  } else if (top === 380) {
    playMovementSound();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    moveDodgerUp();
    playSoundOnMovement();
  }
});

// Move Dodger Down
function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 5}px`;
  } else if (bottom === 0) {
    playMovementSound();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    moveDodgerDown();
    playSoundOnMovement();
  }
});
