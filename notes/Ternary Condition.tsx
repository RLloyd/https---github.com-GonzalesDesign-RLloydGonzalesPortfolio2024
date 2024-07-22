// if : else if : else condition

const score = 60
let scoreRating

if (score > 70) {
  scoreRating = "Excellent"
} else if (score > 50) {
  scoreRating = "Average"
} else {
  scoreRating = "Do better"
}

console.log(scoreRating)
// "Average"



// Using ternary operator of the same
const score = 60

const scoreRating =
   score > 70 ? "Excellent"
   : score > 50 ? "Average"
   : "Do better"

console.log(scoreRating)
// "Average"