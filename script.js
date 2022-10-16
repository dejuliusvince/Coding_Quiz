/*Need functionality to: 
-Reveal the quiz when the start button is clicked
-provide an array of questions with multiple responses for the quiz
-Show the questions and responses one by one 
-Allow user to select their response
-Time the quiz
*/
let score = 0;
let timer = 60;


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
]

const showQuestion = () => {
  document.getElementById("question").innerHTML= `
  <p>
  ${questions[displayedQuestion].question}
  </p>
  `

  document.getElementById("response").innerHTML= `
  <p
  class="response"
  data-response='${questions[displayedQuestion].responses[0]}'
  data-answer='${questions[displayedQuestion].answer}'
  >
  ${questions[displayedQuestion].responses[0]}
  </p>
  <p
  class="response"
  data-response='${questions[displayedQuestion].responses[1]}'
  data-answer='${questions[displayedQuestion].answer}'
  >
  ${questions[displayedQuestion].responses[1]}
  </p>
  <p
  class="response"
  data-response='${questions[displayedQuestion].responses[2]}'
  data-answer='${questions[displayedQuestion].answer}'
  >
  ${questions[displayedQuestion].responses[2]}
  </p>
  `
}

document.addEventListener('click', event => {
  if(event.target.classList.contains('response')) {
    if(event.target.dataset.response==event.target.dataset.answer) {
      displayedQuestion += 1
      score += 5
      showQuestion()
    }
  }
})






  document.getElementById("start-button").addEventListener('click', event => {
    document.getElementById("quiz").classList.remove("hide-quiz")
    showQuestion()
  })