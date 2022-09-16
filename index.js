let pointsEl = document.getElementById("points-el")
let scoreEl = document.getElementById("score-el")
let points = 0
let score = 0

function plusOne() {
  points += 1
  pointsEl.textContent = points
}

function plusTwo() {
  points += 2
  pointsEl.textContent = points
}
function plusThree() {
  points += 3
  pointsEl.textContent = points
}

function addOne() {
  score += 1
  scoreEl.textContent = score
}

function addTwo() {
  score += 2
  scoreEl.textContent = score
}
function addThree() {
  score += 3
  scoreEl.textContent = score
}