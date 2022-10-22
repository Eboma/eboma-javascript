let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
 

function homeAddOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeAddTwo() {
  homeCount += 2
  homeScore.textContent = homeCount
}

function  homeAddThree() {
    homeCount += 3
  homeScore.textContent = homeCount
}

function reSetHomeScore() {
  homeScore.textContent = 0;
  homeCount = 0;
}

function guestAddOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestAddTwo() {
  guestCount += 2
  guestScore.textContent = guestCount
}

function  guestAddThree() {
   guestCount += 3
  guestScore.textContent = guestCount
}

function reSetGuestScore() {
 guestScore.textContent = 0;
  guestCount = 0 
}