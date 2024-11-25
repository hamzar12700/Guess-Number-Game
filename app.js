let inputUser = document.querySelector("#inputUser");
let btn = document.querySelector("#btn");
let scoreHtml = document.querySelector("#score");
let highScoreHtml = document.querySelector("#highScore");
let message = document.querySelector("#message");
// let tryAgain = document.querySelector("#tryAgain");
let changeMode = document.querySelector("#changeMode");

// div;

let h1 = document.createElement = "h1";

let secretNbr = Math.ceil(Math.random() * 20);
console.log(secretNbr);

let score = 20;
let highScore = 0;

scoreHtml.textContent = score;

function clickMe() {
  console.log();

  //   inputUser = Number(inputUser);
  //   console.log(typeof checkValue);

  if (inputUser.value) {
    if (inputUser.value > 20) {
      message.textContent = "bhai saab 20 se zyada nbr allowed nahi ha ";
      inputUser.value = "";
      return;
    } else if (secretNbr == inputUser.value) {
      inputUser.value = "";
      h1.textContent = `Congratulation your Nbr is Correct ${inputUser.value}`;
      message.textContent = "mubarak kaan";
      document.body.style.backgroundColor = "green";

      if (score > highScore) {
        // scoreHtml.textContent = score;
        highScoreHtml.textContent = score;
      }
    } else {
      // message.textContent = "please enter a nbr";
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
      score--;
      scoreHtml.textContent = score;
      inputUser.value = "";

      if (inputUser.value > secretNbr) {
        message.textContent = "nbr is too high";
      } else {
        message.textContent = "nbr to low";
      }
    }
  } else {
    message.textContent = "Please enter a nbr";
  }
}

let flag = 0;

function darkMode() {
  if (flag == 0) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    changeMode.textContent = "Light Mode";
    flag = 1;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    flag = 0;
    changeMode.textContent = "Dark Mode";
  }
}

// TRY GAIN FUNCTION ======= >>

function tryAgain() {
  // console.log("clicked");
  secretNbr = Math.ceil(Math.random() * 20);
  console.log(secretNbr);

  scoreHtml.textContent = 20;
  // inputUser.value = ""
  document.body.style.backgroundColor = "white";
  document.body.style.color = "color";
  clickMe();
}





// function initGame() {
//   secretNbr = Math.ceil(Math.random() * 20); // Set secretNbr at the start
//   console.log(secretNbr); // Debugging purpose
//   score = 20;
//   scoreHtml.textContent = score;
//   inputUser.value = ""; // Clear input field
// }

// function tryAgain() {
//   initGame(); // Re-initialize game values
// }


















