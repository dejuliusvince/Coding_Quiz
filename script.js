/*Need functionality to: 
-Reveal the quiz when the start button is clicked
-provide an array of questions with multiple responses for the quiz
-Show the questions and responses one by one 
-Allow user to select their response
-Time the quiz
*/
let score = 0
let timer = 60




displayedQuestion = 0


let questions = [
  {
    question: 'Which of the following keywords can define a variable in Javascript?',
    responses: ['var', 'let', 'both'],
    answer: 'both'
  },
  {
    question: 'Which of the following functions will serialize an object into a JSON string?',
    responses: ['parse()', 'convert()', 'stringify()'],
    answer: 'stringify()',
  },
  {
    question: 'Please select the option below that is a front-end JS framework',
    responses: ['React', 'Python', 'Apollo'],
    answer: 'React'
  },
  {
    question: 'Items separated by a comma inside of square brackets make up which data structure?',
    responses: 'variable', 'array', 

  }
]

const showQuestion = () => {
  if (displayedQuestion == questions.length) {
    document.getElementById("quiz").innerHTML = `
    <h1>You have completed the quiz!</h1>
    <h3>Score: ${score}/25</h3> 
  `
    document.getElementById("timer").classList.add("hide-form")
   
    document.getElementById("enterInitials").classList.remove("hide-form")
  } else {
    document.getElementById("questionDiv").innerHTML = `
  <p>
  ${questions[displayedQuestion].question}
  </p>
  `

    document.getElementById("responseDiv").innerHTML = `
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
  `}
}



document.addEventListener('click', event => {
  if (event.target.classList.contains('response')) {
    if (event.target.dataset.response == event.target.dataset.answer) {
      displayedQuestion += 1
      score += 5
      showQuestion()
    } else {
      const subtractTime = () => { timer -= 5 }
      displayedQuestion += 1
      subtractTime()
      showQuestion()
    }
  }
})

const endQuiz = () => {

}

const countdownStart = () => {
  if (timer <= 0) {
    timeAtZero()
    document.getElementById("timer").innerHTML = `
    <p>GAME OVER</p>
    `
  } else {
    timer -= 1
    document.getElementById("timer").innerHTML = `
  ${timer}`
  }
}


const timeAtZero = () => {
  clearInterval()
  document.getElementById("quiz").innerHTML = `
  <h1>
  You have run out of time, please refresh the page to try again! 
  </h1>
  <h2>
  Score: ${score}/25
  </h2>
  `
  document.getElementById("start-button").classList.add("hide-button")

}

document.getElementById("saveButton").addEventListener('submit', event => {
  event.preventDefault();
  let newSavedData = {
    score: score,
    initials: document.getElementById("userInitials").value
  }
  console.log(newSavedData)
})


document.getElementById("start-button").addEventListener('click', event => {
  document.getElementById("quiz").classList.remove("hide-quiz")
  setInterval(countdownStart, 1000)
  showQuestion()
})

