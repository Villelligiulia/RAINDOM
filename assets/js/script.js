

function emptyBoxGame() {
  let gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = `<div id="game-screen"></div>`;
  levelOne();
}



function levelOne() {
  let gameContainer = document.getElementById("game-container");
  let colours = ["blue", "green", "yellow", "white"];
  let colorStringOne = ["BLUE", "GREEN", "YELLOW", "WHITE"];
  let wordOne = 0;
  let index = 0;

  function change() {
      
      if (index >= 3) {
          clearInterval(timer);
      }

      

      gameContainer.style.backgroundColor = colours[index++];
      gameContainer.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringOne[wordOne++]}</p></div>`;
  }

 
  let timer = setInterval(change, 2000);
  setTimeout(question, 9000);
}


function question() {
  let question = document.getElementById("question");
  question.innerHTML = ` <h1  id="game-question">HOW MANY TIMES HAS THE COLOR CHANGED? </h1> `;
  let typeAnswer = document.getElementById("answer-span");
  typeAnswer.innerHTML = `
 <input type="number" id="answer-box" > `;
  let divAnswerButton = document.getElementById("div-answer-button");
  divAnswerButton.innerHTML = `
 <button  id="answer-button">Click Me</button>`;
}
let sendAnswer = document.getElementById("div-answer-button");
sendAnswer.addEventListener("click", showAnswerLevelOne);


function clearAnswer() {
  let clearAnswer = (document.getElementById("answer-box").value = "");
}


function showAnswerLevelOne() {
  let userAnswer = document.getElementById("answer-box").value;

  if (userAnswer == 4) {
      alert("WELL DONE!!");
      incrementScore();
      levelTwo();
  } else if (userAnswer === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();

      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelOne();
      }
  }

  clearAnswer();
} 

function levelTwo() {
  sendAnswer.removeEventListener("click", showAnswerLevelOne);
  sendAnswer.addEventListener("click", showAnswerLevelTwo);
  let gameTwo = document.getElementById("game-container");

  let coloursTwo = ["orange", "black", "brown", "yellow", "white"];
  let colorStringTwo = ["ORANGE", "BLACK", "BROWN", "YELLOW", "WHITE"];
  let wordTwo = 0;

  let index = 0;

  function secondRound() {
      
      if (index >= 4) {
          clearInterval(timer);
      }

      gameTwo.style.backgroundColor = coloursTwo[index++];
      gameTwo.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringTwo[wordTwo++]}</p></div>`;
  }

  let timer = setInterval(secondRound, 1000);
}

function showAnswerLevelTwo() {
  let userAnswerTwo = document.getElementById("answer-box").value;

  if (userAnswerTwo == 5) {
      alert("WELL DONE!!");
      incrementScore();
      levelThree();
  } else if (userAnswerTwo === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelTwo();
      }
  }
  clearAnswer();
}

function showAnswerLevelTwo() {
  let userAnswerTwo = document.getElementById("answer-box").value;

  if (userAnswerTwo == 5) {
      alert("WELL DONE!!");
      incrementScore();
      levelThree();
  } else if (userAnswerTwo === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelTwo();
      }
  }
  clearAnswer();
}


function levelThree() {
  sendAnswer.removeEventListener("click", showAnswerLevelTwo);
  sendAnswer.addEventListener("click", showAnswerLevelThree);
  let gameThree = document.getElementById("game-container");

  let coloursThree = ["pink", "green", "yellow", "purple", "white", "red", "aqua"];
  let colorStringThree = ["PINk", "GREEN", "YELLOW", "PURPLE", "WHITE", "RED", "ACQUA"];
  let wordThree = 0;

  let index = 0;

  function thirdRound() {
      
      if (index >= 6) {
          clearInterval(timer);
      }

      gameThree.style.backgroundColor = coloursThree[index++];
      gameThree.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringThree[wordThree++]}</p></div>`;
  }

  let timer = setInterval(thirdRound, 700);
}

function showAnswerLevelThree() {
  let userAnswerThree = document.getElementById("answer-box").value;

  if (userAnswerThree == 7) {
      alert("WELL DONE!!");
      incrementScore();
      levelFour();
  } else if (userAnswerThree === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelThree();
      }
  }
  clearAnswer();
}


function levelFour() {
  sendAnswer.removeEventListener("click", showAnswerLevelThree);
  sendAnswer.addEventListener("click", showAnswerLevelFour);
  let gameFour = document.getElementById("game-container");

  let coloursFour = ["fuchsia", "tan", "tomato", "gray", "goldenrod", "orchid", "olive", "skyblue", "white"];
  let colorStringFour = ["FUCHSIA", "TAN", "TOMATO", "GRAY", "GOLDENROD", "ORCHID", "OLIVE", "SKYBLUE", "WHITE"];
  let wordFour = 0;
  let  index = 0;

  function fourthRound() {
      
      if (index >= 8) {
          clearInterval(timer);
      }

     
      gameFour.style.backgroundColor = coloursFour[index++];
      gameFour.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringFour[wordFour++]}</p></div>`;
  }

  
  let timer = setInterval(fourthRound, 500);
}


function showAnswerLevelFour() {
  let userAnswerFour = document.getElementById("answer-box").value;

  if (userAnswerFour == 9) {
      alert("WELL DONE!!");
      incrementScore();
      sendAnswer.removeEventListener("click", showAnswerLevelFour);
      sendAnswer.addEventListener("click", levelFive);

      increaseLevel();
  } else if (userAnswerFour === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelFour();
      }
  }
  clearAnswer();
}

function increaseLevel() {
  let increaseLevel = document.getElementById("game-container");
  increaseLevel.innerHTML = `<div id=game-screen">
<p id="game-question">Too easy??<br>
Let's spice it up!!<br>
The rule will be the same, but every time <br>
you will see the same colour repeated<br>
you won't have to count for that specific color !!<br>
For example : if the the page will turn : "pink, yellow, white, yellow",<br>
because the yellow has been repeated twice <br>
(but it could be more ;) ),
<br>
the correct answer will be 2 then!!<br>
Have fun</p></div>`;
  let changeQuestion = document.getElementById("question");
  changeQuestion.innerHTML = `

 
  
   <h1 id="game-question">ARE YOU READY? </h1>
   `;
  let goButton = document.getElementById("div-answer-button");
  goButton.innerHTML = `<div id="div-answer-button">
<button id="answer-button">Go!</button></div>`;
  let clearForNewLevel = document.getElementById("answer-span");
  clearForNewLevel.innerHTML = ``;
}

function levelFive() {
  let gameFive = document.getElementById("game-container");

  sendAnswer.removeEventListener("click", levelFive);

  sendAnswer.addEventListener("click", showAnswerLevelFive);

  let coloursFive = ["fuchsia", "tan", "tomato", "fuchsia", "yellow"];
  let colorStringFive = ["FUCHSIA", "TAN", "TOMATO", "FUCHSIA", "YELLOW"];
  let wordFive = 0;
  let index = 0;
  
  function fifthRound() {
      
      if (index >= 4) {
          clearInterval(timer);
      }

      
      gameFive.style.backgroundColor = coloursFive[index++];
      gameFive.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringFive[wordFive++]}</p></div>`;
  }

  
  let  timer = setInterval(fifthRound, 500);
  let backToGame = document.getElementById("game-container");
  backToGame.innerHTML = `<div id="game-screen"></div>`;
  let advancedLevelButton = document.getElementById("div-answer-button");
  advancedLevelButton.innerHTML = `<div id="div-answer-button">
 <button id="answer-button">Enter!</button>`;
  let advancedLevelAnswer = document.getElementById("answer-span");
  advancedLevelAnswer.innerHTML = `
  <input type="number" id="answer-box" >`;
  let advancedLevelQuestion = document.getElementById("question");
  advancedLevelQuestion.innerHTML = `
  
    <h1 id="game-question">HOW MANY TIMES HAS THE COLOR CHANGED? </h1>
     `;
}

function showAnswerLevelFive() {
 
  let userAnswerFive = document.getElementById("answer-box").value;

  if (userAnswerFive == 3) {
      alert("WELL DONE!!");
      incrementScore();
      levelSix();
  } else if (userAnswerFive === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelFive();
      }
  }
  clearAnswer();
}

function levelSix() {
  sendAnswer.removeEventListener("click", showAnswerLevelFive);
  sendAnswer.addEventListener("click", showAnswerLevelSix);
  let gameSix = document.getElementById("game-container");

  let coloursSix = ["darkred", "khaki", "orange", "chocolate", "darkred", "white", "pink"];
  let colorStringSix = ["DARKRED", "KHAKI", "ORANGE", "CHOCOLATE", "DARKRED", "WHITE", "PINK"];
  let wordSix = 0;
  let index = 0;
  
  function sixthRound() {
      
      if (index >= 6) {
          clearInterval(timer);
      }

     
      gameSix.style.backgroundColor = coloursSix[index++];
      gameSix.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringSix[wordSix++]}</p></div>`;
  }
  let timer = setInterval(sixthRound, 700);
}

function showAnswerLevelSix() {
  let userAnswerSix = document.getElementById("answer-box").value;

  if (userAnswerSix == 5) {
      alert("WELL DONE!!");
      incrementScore();
      levelSeven();
  } else if (userAnswerSix === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelSix();
      }
  }
  clearAnswer();
}


function levelSeven() {
  sendAnswer.removeEventListener("click", showAnswerLevelSix);
  sendAnswer.addEventListener("click", showAnswerLevelSeven);
  let gameSeven = document.getElementById("game-container");

  let coloursSeven = ["mediumpurple", "lavender", "lawngreen", "tomato", "white", "lawngreen", "maroon", "yellow", "black"];
  let colorStringSeven = ["MEDIUMPURPLE", "LAVENDER", "LAWN-GREEN", "TOMATO", "WHITE", "LAWN-GREEN", "MAROON", "YELLOW", "BLACK"];
  let wordSeven = 0;
  let index = 0;
  
  function seventhRound() {
      
      if (index >= 8) {
          clearInterval(timer);
      }
      
      gameSeven.style.backgroundColor = coloursSeven[index++];
      gameSeven.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringSeven[wordSeven++]}</p></div>`;
  }

  
  let timer = setInterval(seventhRound, 600);
}

function showAnswerLevelSeven() {
  let userAnswerSeven = document.getElementById("answer-box").value;

  if (userAnswerSeven == 7) {
      alert("WELL DONE!!");
      incrementScore();
      levelEight();
  } else if (userAnswerSeven === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelSeven();
      }
  }
  clearAnswer();
}


function levelEight() {
  sendAnswer.removeEventListener("click", showAnswerLevelSeven);
  sendAnswer.addEventListener("click", showAnswerLevelEight);
  let gameEight = document.getElementById("game-container");

  let coloursEight = ["violet", "white", "red", "white", "slategrey", "lawngreen", "white", "saddlebrown", "royalblue", "forestgreen", "white", "hotpink", "navy"];
  let colorStringEight = ["VIOLET", "WHITE", "RED", "WHITE", "SLATE-GREY", "LAWN-GREEN", "WHITE", "SADDLE-BROWN", "ROYAL-BLUE", "FOREST-GREEN", "WHITE", "HOT-PINK", "NAVY"];
  let wordEight = 0;
  let index = 0;
  
  function eightthRound() {
      
      if (index >= 12) {
          clearInterval(timer);
      }

      
      gameEight.style.backgroundColor = coloursEight[index++];
      gameEight.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringEight[wordEight++]}</p></div>`;
  }

  
  let timer = setInterval(eightthRound, 800);
}

function showAnswerLevelEight() {
  let userAnswerEight = document.getElementById("answer-box").value;

  if (userAnswerEight == 9) {
      alert("WELL DONE!!");
      incrementScore();
      levelNine();
  } else if (userAnswerEight === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelEight();
      }
  }
  clearAnswer();
}

function levelNine() {
  sendAnswer.removeEventListener("click", showAnswerLevelEight);
  sendAnswer.addEventListener("click", showAnswerLevelNine);
  let gameNine = document.getElementById("game-container");

  let coloursNine = ["orange", "pink", "blue", "brown", "pink", "red", "blue", "lightseagreen", "yellow"];
  let colorStringNine = ["ORANGE", "PINK", "BLUE", "BROWN", "PINK", "RED", "BLUE", "LIGHTSEA-GREEN", "YELLOW"];
  let wordNine = 0;
  let index = 0;
  
  function ninethRound() {
      
      if (index >= 8) {
          clearInterval(timer);
      }

      
      gameNine.style.backgroundColor = coloursNine[index++];
      gameNine.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringNine[wordNine++]}</p></div>`;
  }

  
  let timer = setInterval(ninethRound, 700);
}

function showAnswerLevelNine() {
  let userAnswerNine = document.getElementById("answer-box").value;

  if (userAnswerNine == 5) {
      alert("WELL DONE!!");
      incrementScore();
      levelTen();
  } else if (userAnswerNine === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelNine();
      }
  }
  clearAnswer();
}


function levelTen() {
  sendAnswer.removeEventListener("click", showAnswerLevelNine);
  sendAnswer.addEventListener("click", showAnswerLevelTen);
  let gameTen = document.getElementById("game-container");

  let coloursTen = ["coral", "black", "pink", "yellow", "black", "white", "pink", "green", "pink", "purple", "orange", "lime", "pink", "gold"];
  let colorStringTen = ["CORAL", "BLACK", "PINK", "YELLOW", "BLACK", "WHITE", "PINk", "GREEN", "PINK", "PURPLE", "ORANGE", "LIME", "PINK", "GOLD"];
  let wordTen = 0;
  let index = 0;
  
  function tenthRound() {
      
      if (index >= 13) {
          clearInterval(timer);
      }

      
      gameTen.style.backgroundColor = coloursTen[index++];
      gameTen.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringTen[wordTen++]}</p></div>`;
  }

  
  let timer = setInterval(tenthRound, 600);
}

function showAnswerLevelTen() {
  let userAnswerTen = document.getElementById("answer-box").value;

  if (userAnswerTen == 8) {
      alert("WELL DONE!!");
      incrementScore();
      let endScreen = document.getElementById("game-container");
      endScreen.style.backgroundColor = "black";
      endScreen.innerHTML = `<div>
<div id=final-screen-container>
  <h1 id="final-screen">YOU ARE A CHAMP </h1>
</div>
<div>
  <button  id="start-game-button" onclick="startNewGame()";">New <br>Game </button>
</div>
</div>`;
      let removeQuestion = document.getElementById("question");
      removeQuestion.innerHTML = ``;
      let removeAnswerBox = document.getElementById("answer-span");
      removeAnswerBox.innerHTML = ``;
      let removeButton = document.getElementById("div-answer-button");
      removeButton.innerHTML = ``;
  } else if (userAnswerTen === "") {
      alert("You have to insert a number");
  } else {
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      let attempts = document.getElementById("attempts");
      if (attempts.innerText == 0) {
          alert("Awww noo! You will have to start all over!!");
          levelOne();
          let newAttempts = document.getElementById("attempts");
          newAttempts.innerHTML = `3`;
      } else {
          levelTen();
      }
  }
  clearAnswer();
}

function startNewGame() {
  let newScreen = document.getElementById("game-container");
  newScreen.innerHTML = `<div id="game-screen"></div>`;
  levelOne();
}


function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}


function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}


function decrementAttempts() {
  let attempts = parseInt(document.getElementById("attempts").innerText);
  document.getElementById("attempts").innerText = --attempts;
}
