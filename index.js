var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question(chalk.yellow('May I know your name? '));
console.log(chalk.green('Welcome ' + chalk.red(userName)));

if(readlineSync.keyInYN(chalk.yellow("Do you want to play quiz? "))) {
  console.log(chalk.green('Welcome to JavaScript Quiz '+ chalk.red(userName)));
}

var score = 0;
var highScores = [
  {
    name: "Tanjil",
    score: 3
  },
  {
    name: "Aafreen",
    score: 4
  }
];

var questions = [
  {
  question: `
  Inside which HTML element do we put the JavaScript?
  a: <js> 
  b: <scripting>
  c: <script>
  d: <javascript>\n`,
    answer: "c"
},
{
  question: `
  Where is the correct place to insert a JavaScript?)
  a: The <head> section 
  b: The <body> section
  c: Both the <head> section and the <body> section are correct
  d: NOTA\n `,
    answer: "b"
},
{
  question: `
  "What is the correct syntax for referring to an external script called "xxx.js"?
  a: <script src="xyz.js">
  b: <script href="xyz.js">
  b: <script name="xyz.js">\n`,
    answer: "a"
},
{
  question: `
  The external JavaScript file must contain the <script>tag.
  a: False
  b: True\n`,
  answer: "a" 

},
{
  question: `
  What is the correct JavaScript syntax to change the content of the HTML element below?

  <p id="demo">This is a demonstration.</p>
  
  a: #demo.innerHTML = "HELLO WORLD!";
  b: document.getElementById("#demo").innerHTML = "Hellow World!;"\n`,
  answer: "b" 
}
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('right!');
    score = score + 1;
    console.log(chalk.green('Score: ' + score));
  }
  else {
    console.log(chalk.red('wrong!'));
  }

}


for(i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  console.log(play(currentQuestion.question, currentQuestion.answer));
}


function showScore() {
    console.log(chalk.green('YAY! you scored is: ', + score));
    for(i = 0; i < highScores.length; i++) {
      var currentHighScores = highScores[i];
      console.log(currentHighScores.name + ' : ' + currentHighScores.score);
    }
}



showScore()