// Clear the game container from title, instructions and start button,
// before running the changeColor function that will
//start the game.

function emptyBoxGame(){
    document.body;
  let title= document.getElementById("title");
  title.remove();
  let instructions=document.getElementById("instructions");
  instructions.remove();
  let startButton=document.getElementById("start-game-button");
  startButton.remove();
  let gameContainer=document.getElementById("game-container");
   gameContainer.innerHTML=`<div id="game-screen"></div>`;
   levelOne();
}


//This function starts the game.
//It is the first of ten levels . 
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelOne(){
    let gameContainer = document.getElementById('game-container');
  let colours = ["blue", "green", "yellow", "white"];
  let colorStringOne =["BLUE","GREEN","YELLOW","WHITE"];
  let wordOne=0
  let index = 0;
  
  function change() {
  
 // Will keep track of which color to use
 //Display the exact numbers of colors in the array and stops when
 //the colors are over
  if(index >= 3){ clearInterval(timer); }

  // Set the color and strings of colors and increment the index
  
  gameContainer.style.backgroundColor = colours[index++];
  gameContainer.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringOne[wordOne++]}</p></div>`;
  
};

// The timer sets up an interval of 2seconds between each color.
//The set time out will diplay the question function after 9 seconds.
let timer = setInterval(change, 2000);
setTimeout(question,9000);}

//Under the div-container, create a question,an input for the answer 
//and a button to send the answer.

function question(){
let question=document.getElementById("question");
question.innerHTML=` <h1  id="game-question">HOW MANY TIMES HAS THE COLOR CHANGED? </h1> `;
   let typeAnswer=document.getElementById("answer-span");
   typeAnswer.innerHTML=`
   <input type="number" id="answer-box" > `;
   let divAnswerButton=document.getElementById("div-answer-button");
   divAnswerButton.innerHTML=`
   <button  id="answer-button">Click Me</button>`;
}
let sendAnswer=document.getElementById("div-answer-button");
sendAnswer.addEventListener("click",showAnswerLevelOne);

//Clear the input field after the answer is submitted
function clearAnswer(){
        let clearAnswer=document.getElementById("answer-box").value="";
      }

//This function is triggered by the CLICK ME button beside the answer field
//It is the first of ten answers, one for each level.
//If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.
function showAnswerLevelOne(){
    let userAnswer= document.getElementById("answer-box").value;
  
  
  
    if (userAnswer == 4){
     alert("WELL DONE!!");
     incrementScore();
     levelTwo();
      
    
    
    
    }else if(userAnswer ===""){
     alert("You have to insert a number");
      
    } else{
      alert("Try again !!");
      incrementWrongAnswer()
      decrementAttempts();
      
      
  
      if(attempts.innerText== 0){
        alert("Awww noo! You will have to start all over!!")
        levelOne();
        let newAttempts=document.getElementById("attempts");
        newAttempts.innerHTML=`3`;
        body.appendChild(newAttempts)
  
      }else{
        levelOne();
      }
      
    }
    
    clearAnswer()
  
      
       
}//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelTwo() {
    sendAnswer.removeEventListener("click",showAnswerLevelOne);
    sendAnswer.addEventListener("click",showAnswerLevelTwo);
    let gameTwo =document.getElementById("game-container");
    
    
    let coloursTwo = ["orange", "black", "brown", "yellow", "white"];
    let colorStringTwo =["ORANGE","BLACK","BROWN","YELLOW","WHITE"];
    let wordTwo=0;
   
     
    var index = 0;
    
     function secondRound(){
      //Display the exact numbers of colors in the array and stops when
 //the colors are over
     if(index >= 4){ clearInterval(timer); }
     
     // Set the color and strings of colors and increment the index
     gameTwo.style.backgroundColor = coloursTwo[index++];
     gameTwo.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringTwo[wordTwo++]}</p></div>`;
   }
   // The timer sets up an interval of 1second between each color.
   
   var timer = setInterval(secondRound, 1000);
   
  
    
  }
  //If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.
  function showAnswerLevelTwo(){
  
    let userAnswerTwo= document.getElementById("answer-box").value;
    
    if (userAnswerTwo == 5 ){
    alert("WELL DONE!!");
    incrementScore();
    levelThree();
    
    
    
    }else if(userAnswerTwo ===""){
     alert("You have to insert a number");
      
    } else{
      alert("Try again !!");
      incrementWrongAnswer()
      decrementAttempts();
      
      if(attempts.innerText== 0){
        alert("Awww noo! You will have to start all over!!")
        levelOne();
        let newAttempts=document.getElementById("attempts");
        newAttempts.innerHTML=`3`;
        body.appendChild(newAttempts)
  
      }else{
        levelTwo();
      }
      
    }
    clearAnswer()
}

function showAnswerLevelTwo(){
    let userAnswerTwo= document.getElementById("answer-box").value;
  
  if (userAnswerTwo == 5 ){
  alert("WELL DONE!!");
  incrementScore();
  levelThree();
  
  
  
  }else if(userAnswerTwo ===""){
   alert("You have to insert a number");
    
  } else{
    alert("Try again !!");
    incrementWrongAnswer()
    decrementAttempts();
    
    if(attempts.innerText== 0){
      alert("Awww noo! You will have to start all over!!")
      levelOne();
      let newAttempts=document.getElementById("attempts");
      newAttempts.innerHTML=`3`;
      body.appendChild(newAttempts)

    }else{
      levelTwo();
    }
    
  }
  clearAnswer()
}
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelThree() {
    
        sendAnswer.removeEventListener("click",showAnswerLevelTwo);
        sendAnswer.addEventListener("click",showAnswerLevelThree);
        let gameThree =document.getElementById("game-container");
        
        var coloursThree = ["pink", "green", "yellow", "purple", "white","red","aqua"];
        let colorStringThree =["PINk","GREEN","YELLOW","PURPLE","WHITE", "RED","ACQUA"];
      let wordThree=0;
     
        var index = 0;
        // Will keep track of which color to use
         // If we have run out of colors, stop the timer
         function thirdRound(){
          //Display the exact numbers of colors in the array and stops when
 //the colors are over
         if(index >= 6){ clearInterval(timer); }
         
         // Set the color and strings of colors and increment the index
         gameThree.style.backgroundColor = coloursThree[index++];
         gameThree.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringThree[wordThree++]}</p></div>`;
       }
       
       // The timer sets up an interval of 0.7 seconds between each color.
       var timer = setInterval(thirdRound, 700);
       
      
}
//If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.

function showAnswerLevelThree(){
    let userAnswerThree= document.getElementById("answer-box").value;
    
    if (userAnswerThree == 7 ){
    alert("WELL DONE!!");
    incrementScore();
    levelFour();
    
    
    
    }else if(userAnswerThree ===""){
     alert("You have to insert a number");
      
    } else{
      alert("Try again !!");
      incrementWrongAnswer()
      decrementAttempts();
      
      if(attempts.innerText== 0){
        alert("Awww noo! You will have to start all over!!")
        levelOne();
        let newAttempts=document.getElementById("attempts");
        newAttempts.innerHTML=`3`;
        body.appendChild(newAttempts)
  
      }else{
        levelThree()
      
    
  


    
     
} 
    }
    clearAnswer()
}
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelFour() {
    sendAnswer.removeEventListener("click",showAnswerLevelThree);
    sendAnswer.addEventListener("click",showAnswerLevelFour);
    let gameFour =document.getElementById("game-container");
    
    var coloursFour = ["fuchsia", "tan", "tomato", "gray", "goldenrod","orchid","olive","skyblue","white"];
    let colorStringFour =["FUCHSIA","TAN","TOMATO","GRAY","GOLDENROD", "ORCHID","OLIVE","SKYBLUE","WHITE"];
    let wordFour=0;
    var index = 0;
    // Will keep track of which color to use
     // If we have run out of colors, stop the timer
     function fourthRound(){
      //Display the exact numbers of colors in the array and stops when
 //the colors are over
     if(index >= 8){ clearInterval(timer); }
     
     // Set the color and strings of colors and increment the index
     gameFour.style.backgroundColor = coloursFour[index++];
     gameFour.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringFour[wordFour++]}</p></div>`;
   }
   
   // The timer sets up an interval of 0.5 seconds between each color.
   var timer = setInterval(fourthRound, 500);
   
  
    
}
//If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.

function showAnswerLevelFour(){
  let userAnswerFour= document.getElementById("answer-box").value;
  
if (userAnswerFour == 9 ){
alert("WELL DONE!!");
incrementScore();
sendAnswer.removeEventListener("click",showAnswerLevelFour);
sendAnswer.addEventListener("click", levelFive);

increaseLevel();








}else if(userAnswerFour ===""){
 alert("You have to insert a number");
  
} else{
  alert("Try again !!");
  incrementWrongAnswer()
  decrementAttempts();
  
  if(attempts.innerText== 0){
    alert("Awww noo! You will have to start all over!!")
    levelOne();
    let newAttempts=document.getElementById("attempts");
    newAttempts.innerHTML=`3`;
    body.appendChild(newAttempts)

  }else{
    levelFour()
  
}
}clearAnswer()

}
//It displays new instructions inside the div game-container.
//It displays a new question under the div game-container.
//It displays a new button under the div game-container that will start
// and run the next level when clicked

function increaseLevel() {
    let increaseLevel =document.getElementById("game-container");
  nuovoTesto=increaseLevel.innerHTML=`<div id=game-screen">
  <p id="game-question">Too easy??<br>
  Let's make it harder then!!<br>
  The rule will be the same, but every time <br>
  you will see the same colour repeated<br>
  you won't have to count for that specific color !!<br>
  For example : if the the page will turn : "pink, yellow, white, yellow",<br>
  because the yellow has been repeated twice <br>
  (but it could be more ;) ),
  <br>
  the correct answer will be 2 then!!<br>
  Have fun</p></div>`;
  let changeQuestion=document.getElementById("question");
  changeQuestion.innerHTML=`
  
   
    
     <h1 id="game-question">ARE YOU READY? </h1>
     `;
  let goButton=document.getElementById("div-answer-button")
  goButton.innerHTML=`<div id="div-answer-button">
  <button id="answer-button">Go!</button></div>`;
  let clearForNewLevel=document.getElementById("answer-span");
  clearForNewLevel.innerHTML=``;
  body.appendChild(gameFive);
  
  
  
  levelFive();
  
  
}
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelFive() {
    let gameFive =document.getElementById("game-container");
  
  
  
    sendAnswer.removeEventListener("click",levelFive);
    
    sendAnswer.addEventListener("click",showAnswerLevelFive);
    
    
    
    var coloursFive = ["fuchsia", "tan", "tomato", "fuchsia","yellow"];
    let colorStringFive =["FUCHSIA","TAN","TOMATO","FUCHSIA","YELLOW"];
    let wordFive=0;
    var index = 0;
    // Will keep track of which color to use
     // If we have run out of colors, stop the timer
     function fifthRound(){
      //Display the exact numbers of colors in the array and stops when
 //the colors are over
     if(index >= 4){ clearInterval(timer); }
     
    // Set the color and strings of colors and increment the index
     gameFive.style.backgroundColor = coloursFive[index++];
     gameFive.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringFive[wordFive++]}</p></div>`;
   };
   
   // The timer sets up an interval of 0.5seconds between each color.
   var timer = setInterval(fifthRound, 500);
   let backToGame=document.getElementById("game-container");
   backToGame.innerHTML=`<div id="game-screen"></div>`;
   let advancedLevelButton=document.getElementById("div-answer-button")
   advancedLevelButton.innerHTML=`<div id="div-answer-button">
   <button id="answer-button">Enter!</button>`;
   let advancedLevelAnswer=document.getElementById("answer-span");
    advancedLevelAnswer.innerHTML=`
    <input type="number" id="answer-box" >`;
    let advancedLevelQuestion=document.getElementById("question");
    advancedLevelQuestion.innerHTML=`
    
      <h1 id="game-question">HOW MANY TIMES HAS THE COLOR CHANGED? </h1>
       `;
   
   
    
}

function showAnswerLevelFive(){
  //If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.
    let userAnswerFive= document.getElementById("answer-box").value;
  
    if (userAnswerFive == 3 ){
    alert("WELL DONE!!");
    incrementScore();
    levelSix();
    
    
    
    
    }else if(userAnswerFive ===""){
     alert("You have to insert a number");
      
    } else{
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      
      if(attempts.innerText== 0){
        alert("Awww noo! You will have to start all over!!")
        levelOne();
        let newAttempts=document.getElementById("attempts");
        newAttempts.innerHTML=`3`;
        body.appendChild(newAttempts)
  
      }else{
        levelFive()}
      
    }
    clearAnswer()
}
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelSix() {
    sendAnswer.removeEventListener("click",showAnswerLevelFive);
  sendAnswer.addEventListener("click",showAnswerLevelSix);
  let gameSix =document.getElementById("game-container");
  
  var coloursSix = ["darkred", "khaki", "orange", "chocolate", "darkred","white","pink",];
  let colorStringSix =["DARKRED","KHAKI","ORANGE","CHOCOLATE","DARKRED","WHITE","PINK"];
  let wordSix=0; 
var index = 0;
  // Will keep track of which color to use
   // If we have run out of colors, stop the timer
   function sixthRound(){
    //Display the exact numbers of colors in the array and stops when
 //the colors are over
   if(index >= 6){ clearInterval(timer); }
   
   // Set the color and strings of colors and increment the index
   gameSix.style.backgroundColor = coloursSix[index++];
   gameSix.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringSix[wordSix++]}</p></div>`;
  
   };
// The timer sets up an interval of 0.7seconds between each color.
 var timer = setInterval(sixthRound, 700);
 

  
}
//If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.

function showAnswerLevelSix(){
    let userAnswerSix= document.getElementById("answer-box").value;
  
    if (userAnswerSix == 5 ){
    alert("WELL DONE!!");
    incrementScore();
    levelSeven();
    
    
    
    }else if(userAnswerSix ===""){
     alert("You have to insert a number");
      
    } else{
      alert("Try again !!");
      incrementWrongAnswer();
      decrementAttempts();
      
      if(attempts.innerText== 0){
        alert("Awww noo! You will have to start all over!!")
        levelOne();
        let newAttempts=document.getElementById("attempts");
        newAttempts.innerHTML=`3`;
        body.appendChild(newAttempts)
  
      }else{
        levelSix();}
      
    }
    clearAnswer()
}
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelSeven(){
    sendAnswer.removeEventListener("click",showAnswerLevelSix);
    sendAnswer.addEventListener("click",showAnswerLevelSeven);
    let gameSeven =document.getElementById("game-container");
    
    
   
    var coloursSeven = ["mediumpurple", "lavender", "lawngreen","tomato", "white","lawngreen","maroon","yellow","black"];
    let colorStringSeven =["MEDIUMPURPLE","LAVENDER","LAWN-GREEN","TOMATO","WHITE","LAWN-GREEN","MAROON","YELLOW","BLACK"];
    let wordSeven=0; 
     var index = 0;
    // Will keep track of which color to use
     // If we have run out of colors, stop the timer
     function seventhRound(){
      //Display the exact numbers of colors in the array and stops when
 //the colors are over
     if(index >= 8 ){ clearInterval(timer); }
 // Set the color and strings of colors and increment the index
     gameSeven.style.backgroundColor = coloursSeven[index++];
     gameSeven.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringSeven[wordSeven++]}</p></div>`
   };
   
   // The timer sets up an interval of 0.6seconds between each color.
   var timer = setInterval(seventhRound, 600);
   
  
    

} 
//If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.

function showAnswerLevelSeven(){
    let userAnswerSeven= document.getElementById("answer-box").value;
    
    if (userAnswerSeven == 7 ){
    alert("WELL DONE!!");
    incrementScore();
    levelEight();
    
    
    
    }else if(userAnswerSeven ===""){
     alert("You have to insert a number");
      
    } else{
      alert("Try again !!");
      incrementWrongAnswer()
      decrementAttempts();
      
      if(attempts.innerText== 0){
        alert("Awww noo! You will have to start all over!!")
        levelOne();
        let newAttempts=document.getElementById("attempts");
        newAttempts.innerHTML=`3`;
        body.appendChild(newAttempts)
  
      }else{
        levelSeven();
      }
      
    }
    clearAnswer()
}
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelEight() {
    sendAnswer.removeEventListener("click",showAnswerLevelSeven);
    sendAnswer.addEventListener("click",showAnswerLevelEight);
    let gameEight =document.getElementById("game-container");
    
    var coloursEight = ["violet", "white", "red","white", "slategrey","lawngreen","white","saddlebrown","royalblue","forestgreen","white","hotpink","navy"];
    let colorStringEight =["VIOLET","WHITE","RED","WHITE","SLATE-GREY","LAWN-GREEN","WHITE","SADDLE-BROWN","ROYAL-BLUE","FOREST-GREEN","WHITE","HOT-PINK","NAVY"];
    let wordEight=0; 
    var index = 0;
    // Will keep track of which color to use
     // If we have run out of colors, stop the timer
     function eightthRound(){
      //Display the exact numbers of colors in the array and stops when
 //the colors are over
     if(index >= 12 ){ clearInterval(timer); }
     
     // Set the color and strings of colors and increment the index
     gameEight.style.backgroundColor = coloursEight[index++];
     gameEight.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringEight[wordEight++]}</p></div>`
  
   };
   
   // The timer sets up an interval of 0.8seconds between each color.
   var timer = setInterval(eightthRound, 800);
   
  
}
//If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.

function showAnswerLevelEight(){
    let userAnswerEight= document.getElementById("answer-box").value;
    
    if (userAnswerEight == 9){
    alert("WELL DONE!!");
    incrementScore();
    levelNine();
    
    
    
    }else if(userAnswerEight ===""){
     alert("You have to insert a number");
      
    } else{
      alert("Try again !!");
      incrementWrongAnswer()
      decrementAttempts();
      
      if(attempts.innerText== 0){
        alert("Awww noo! You will have to start all over!!")
        levelOne();
        let newAttempts=document.getElementById("attempts");
        newAttempts.innerHTML=`3`;
        body.appendChild(newAttempts)
  
      }else{
        levelEight();}
      
    }
    clearAnswer()
}
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelNine() {
    sendAnswer.removeEventListener("click",showAnswerLevelEight);
    sendAnswer.addEventListener("click",showAnswerLevelNine);
    let gameNine =document.getElementById("game-container");
    
    var coloursNine = ["orange", "pink", "blue","brown", "pink","red","blue","lightseagreen","yellow"];
    let colorStringNine =["ORANGE","PINK","BLUE","BROWNT","PINK","RED","BLUE","LIGHTSEA-GREEN","YELLOW"];
    let wordNine=0; 
    var index = 0;
    // Will keep track of which color to use
     // If we have run out of colors, stop the timer
     function ninethRound(){
      //Display the exact numbers of colors in the array and stops when
 //the colors are over
     if(index >= 8){ clearInterval(timer); }
     
    // Set the color and strings of colors and increment the index
     gameNine.style.backgroundColor = coloursNine[index++];
     gameNine.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringNine[wordNine++]}</p></div>`
   
   };
   
// The timer sets up an interval of 0.7seconds between each color.
   var timer = setInterval(ninethRound, 700);
   
  
    
}
//If the answer is correct it will:show an alert message, increment the correct answer value, 
//move to the next level
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.

function showAnswerLevelNine(){
  let userAnswerNine= document.getElementById("answer-box").value;
    
if (userAnswerNine == 5 ){
alert("WELL DONE!!");
incrementScore();
levelTen();



}else if(userAnswerNine ===""){
 alert("You have to insert a number");
  
} else{
  alert("Try again !!");
  incrementWrongAnswer()
  decrementAttempts();
  
  if(attempts.innerText== 0){
    alert("Awww noo! You will have to start all over!!")
    levelOne();
    let newAttempts=document.getElementById("attempts");
    newAttempts.innerHTML=`3`;
    body.appendChild(newAttempts)

  }else{
    levelNine();}
  
}
clearAnswer()}
//it sets up an iterable array of colors that becomes
//the HTML output of the div game-container and 
//changes color accordingly.
//it also set up an iterable array of strings of colors
//which matches the color displayed in the div game-container.
//The level functions are all the same, execpt for the content of
// the arrays and the timer set between one color and an other.


function levelTen() {
    sendAnswer.removeEventListener("click",showAnswerLevelNine);
    sendAnswer.addEventListener("click",showAnswerLevelTen);
    let gameTen =document.getElementById("game-container");
    
    var coloursTen = ["coral", "black", "pink","yellow", "black","white","pink","green","pink","purple","orange","lime","pink","gold"];
    let colorStringTen =["CORAL","BLACK","PINK","YELLOW","BLACK","WHITE","PINk","GREEN","PINK","PURPLE","ORANGE","LIME","PINK","GOLD"];
    let wordTen=0; 
    var index = 0;
    // Will keep track of which color to use
     // If we have run out of colors, stop the timer
     function tenthRound(){
      //Display the exact numbers of colors in the array and stops when
 //the colors are over
     if(index >= 13){ clearInterval(timer); }
     
    // Set the color and strings of colors and increment the index
     gameTen.style.backgroundColor = coloursTen[index++];
     gameTen.innerHTML = `<div id="game-screen"><p id="color-string"> ${colorStringTen[wordTen++]}</p></div>`
   
    
   };
   
  // The timer sets up an interval of 0.6seconds between each color.
   var timer = setInterval(tenthRound, 600);
   
  
    
}
//The last ShowAnswer function of the game
//If the answer is correct it will:show an alert message, increment the correct answer value, 
//display the final screen and a new game button.
//If the answer is wrong it will:show an alert message, increment the incorrect answer value,
//repeat the failed level for a maximum number of attempts 3.
//When the attempts reach 0 the game will start from level 1 .
//If an empty input is submitted will show an alert message.
function showAnswerLevelTen(){
  let userAnswerTen= document.getElementById("answer-box").value;
    
if (userAnswerTen== 8){
alert("WELL DONE!!");
incrementScore();
let schermataFinale =document.getElementById("game-container");
schermataFinale.style.backgroundColor="black";
schermataFinale.innerHTML=
`<div>
  <div id=final-screen-container>
    <h1 id="final-screen">YOU ARE A CHAMP </h1>
  </div>
  <div>
    <button  id="start-game-button" onclick="startNewGame()";">New <br>Game </button>
 </div>
 </div>`;
 let removeQuestion=document.getElementById("question");
 removeQuestion.innerHTML=``;
 let removeAnswerBox=document.getElementById("answer-span");
removeAnswerBox.innerHTML=``;
let removeButton=document.getElementById("div-answer-button");
removeButton.innerHTML=``;

}else if(userAnswerTen ===""){
 alert("You have to insert a number");
  
} else{
  alert("Try again !!");
  incrementWrongAnswer();
  decrementAttempts();
  
  if(attempts.innerText== 0){
    alert("Awww noo! You will have to start all over!!");
    levelOne();
    let newAttempts=document.getElementById("attempts");
    newAttempts.innerHTML=`3`;
    body.appendChild(newAttempts);

  }else{
    levelTen();}
  
}
clearAnswer();}
//When all the levels are completed it will run the game all over from level one
//once the new game button on the final screen is clicked
function startNewGame(){
  let newScreen=document.getElementById("game-container");
     newScreen.innerHTML=`<div id="game-screen"></div>`;
     levelOne();
}
/**
 * Get the current score from the DOM and icrements it by 1 
 */

function incrementScore(){
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}
/**
 * Get the current tally score of incorrect answers from the DOM and icrements it by 1 
 */

function incrementWrongAnswer(){
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}
/**
 * Get the current tally score of attempts  from the DOM and decrement it by 1 
 * for every wrong answer
 */

function decrementAttempts(){
  let attempts=parseInt(document.getElementById("attempts").innerText);
  document.getElementById("attempts").innerText= --attempts;
}



