/*Need functionality to: 
-Reveal the quiz when the start button is clicked
-provide an array of questions with multiple responses for the quiz
-Show the questions and responses one by one 
-Allow user to select their response
-Time the quiz
*/

//variables for the starting points of the user score, the countdown timer, and the first question in the array of questions
let score = 0
let timer = 60

displayedQuestion = 0

//Array of questions for the quiz
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
    responses: ['variable', 'array', 'graph'],
    answer: 'array'
  },
  {
    question: 'What is the purpose of JS in web development?',
    responses: ['Style elements on the page', 'Give elements on the page functionality and interactivity', 'Provide a basic structure for your webpage'],
    answer: 'Give elements on the page functionality and interactivity'
  }
]

//Function to iterate through questions as the user selects answers
const showQuestion = () => {
  // checks to see if the user has finished the quiz, if not finished will move to next question
  if (displayedQuestion == questions.length) {
    document.getElementById("quiz").innerHTML = `
    <h1>You have completed the quiz!</h1>
    <h3>Score: ${score}/25</h3> 
  `
    document.getElementById("timer").classList.add("hide-form")
   //Shows the form to save user initials and score after quiz is finished
    document.getElementById("enterInitials").classList.remove("hide-form")
  } else {
    document.getElementById("questionDiv").innerHTML = `
  <p>
  ${questions[displayedQuestion].question}
  </p>
  `
//responses need datasets to compare response vs answer and check if they have been answered correctly
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

//Function to be called when the user starts the quiz, counting down from 60 
//and ending the quiz if timer hits 0  
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

// Used by countdownStart function to end the Quiz and show current score
// if time runs out 
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

//If the user clicks a response to a question, will check to see if they
//answered correctly and proceed accordingly.
document.addEventListener('click', event => {
  if (event.target.classList.contains('response')) {
    if (event.target.dataset.response == event.target.dataset.answer) {
      displayedQuestion += 1
      score += 5
      showQuestion()
    } else {
      //If user answers a question wrong, an extra 5 seconds will be deducted from the timer
      const subtractTime = () => { timer -= 5 }
      displayedQuestion += 1
      subtractTime()
      showQuestion()
    }
  }
})

//Function attempting to save user initials and score in local storage. 
//(Could not get data to save properly, future development will address this issue)
document.getElementById("saveButton").addEventListener('submit', event => {
  event.preventDefault();
  let newSavedData = {
    score: score,
    initials: document.getElementById("userInitials").value
  }
  localStorage.setItem(newSavedData)
})


//Start button functionality to start quiz and begin countdown 
document.getElementById("start-button").addEventListener('click', event => {
  document.getElementById("quiz").classList.remove("hide-quiz")
  setInterval(countdownStart, 1000)
  showQuestion()
})

