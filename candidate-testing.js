const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswer;
let question;
let correctAnswer;
let candidateAnswers=[];
let gradeQuiz;
//let someAnswer = "Sally Ride";



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = input.question("Enter your name: ");
console.log('Welcome', candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0; i<questions.length; i++)
  {
 let tempCorrectAnswer = input.question(questions[i]) ;
   console.log("Your answer :", tempCorrectAnswer)

   candidateAnswers.push(tempCorrectAnswer);
//console.log(candidateAnswers);
}
 //console.log("Your Answer:", candidateAnswers[i++]);
 
  
  
  
 // candidateAnswer = input.question("Who was the first American woman in space? ");



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // let correctAnswer = "Sally Ride";
  //let counter = 0;
//if (candidateAnswers[i] == correctAnswers[i]) {
  //console.log('Amazing,you got that right');
  
//  console.log (correctAnswers[i]);
 // counter += 1;
  }// else {
  //console.log('Oops');
//} 

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};