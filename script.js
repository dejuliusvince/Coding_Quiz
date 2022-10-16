/*Need functionality to: 
-Reveal the quiz when the start button is clicked
-provide an array of questions with multiple responses for the quiz
-Show the questions and responses one by one 
-Allow user to select their response
-Time the quiz
*/

var questions = [
  question:'',
  responses: []
]





document.getElementById("start-button").addEventListener('click', event => {
  document.getElementById("quiz").classList.remove("hide-quiz")
})