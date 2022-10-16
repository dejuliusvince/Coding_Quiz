/*Need functionality to: 
-Reveal the quiz when the start button is clicked
-provide an array of questions with multiple responses for the quiz
-Show the questions and responses one by one 
-Allow user to select their response
-Time the quiz
*/

displayedQuestion = 0;

let questions = [
  {
    question: 'Which of the following keywords can define a variable in Javascript?',
    responses: ['var', 'let', 'both'],
    answer: 'all of the above'
  },
  {
    question: 'Which of the following functions will serialize an object into a JSON string?',
    responses: ['parse()', 'convert()', 'stringify()'],
    answer: 'stringify()',

  },
];

const showQuestion = () => {
  document.getElementById("question").innerHTML= `
  <p>
  ${questions[displayedQuestion].question}
  </p>
  `

  document.getElementById("response").innerHTML= `
  <p>
  ${questions[displayedQuestion].responses[0]}
  </p>
  <p>
  ${questions[displayedQuestion].responses[1]}
  </p>
  <p>
  ${questions[displayedQuestion].responses[2]}
  </p>
  `
}






  document.getElementById("start-button").addEventListener('click', event => {
    document.getElementById("quiz").classList.remove("hide-quiz")
    showQuestion()
  })