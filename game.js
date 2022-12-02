var a = document.getElementById("a");
var b = document.getElementById("b");
var msg = document.getElementById("message");
var again = document.getElementById("again");
var choice = document.querySelectorAll(".choice");
var answer = "";
var score = 0;

function reset() {
  var aRandom = random();
  var bRandom = random();
  var arr = [];

  a.textContent = aRandom;
  b.textContent = bRandom;

  answer = aRandom * bRandom;

  for (var i = 1; i < choice.length; i++) {
    arr.push(distractions(i));
  }

  function distractions(i) {
    if (i < 3) {
      return answer + random();
    }else {
      return answer - random();
    }
  }

  arr.push(answer);

  arr = shuffle(arr);

  for (var i = 0; i < choice.length; i++) {
    choice[i].textContent = arr[i];
  }

  console.log("This answer is " + answer);
  console.log("This choices is " + arr);

  setupChoices();

  function setupChoices() {
    for(var i = 0; i < choice.length; i++) {
      choice[i].classList.remove("selected");
      choice[i].style.background = "#fae7ba";

      msg.innerHTML = "";
      again.innerHTML = "Choose a New Question";
      again.style.color = "#5b3eff";

      choice[i].addEventListener("click", function() {
        var clickedChoice = this.textContent;
        this.classList.add("selected");
        console.log("Player clicked on " + clickedChoice);

        if (clickedChoice == answer) {
          msg.innerHTML = "<span class='correct'>Correct!</span>";
          again.innerHTML = "<span class='again'>Play Again?</span>";
          this.style.background = "#4254bc"; 
          
        } else {
          msg.innerHTML = "<span class='incorrect'>Wrong</span>";
        }

      })
    }
  }
}

reset();

function random() {
  var randomNumber = Math.floor(Math.random() * 11) + 2;
  return randomNumber;
}

again.addEventListener("click", function() {
  reset();
  console.log("New game started!");
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}