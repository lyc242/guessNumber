var ranNumber = getRan(10);
var guess;
var guessCount = 0;

function getRan(upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = parseInt(prompt("I am thinking of a number between 1 and 10. What is the number?" ));
  guessCount += 1;
} while (guess !== ranNumber)

document.write("Bingo! It takes "+guessCount+" attempts!");