
var currentQuestionIndex = 0
var questions= [
    {
        message: "Sleep is essential for maintaining a healthy mental state.",
    },
    {
      message: "Sleep has been proven to reduce stress and improve your mood. Think more clearly and do better in school and at work. Get along better with people. Make good decisions and avoid injuries",
    },
    {
        message: "Make sure to eat 3 healthy meals a day and drink plenty of water.",
    },
    {
        message: "A balanced diet and plenty of water can improve your energy and focus throughout the day. Also, limit caffeinated beverages such as soft drinks or coffee.",
    },
    {
        message: "Exercise is a scientifically proven mood booster!",
    },
    {
        message: "Just 30 minutes of walking every day can help boost your mood and improve your health. Small amounts of exercise add up, so don’t be discouraged if you can’t do 30 minutes at one time.",
    },
    {
      message: "Make social connection a priority, especially face to face",
    },
    {
      message: "Its important to talk to a friendly face. If you have concerns, stresses or worries, sharing these with someone who cares is one of the most effective ways to calm your nervous system and relieve stress.",
    },
    {
      message: "Substance abuse can have detrimental effects to your mental health",
    },
    {
      message: "Keep alcohol use to a minimum and avoid other drugs. Sometimes people use alcohol and other drugs to self-medicate but in reality, alcohol and other drugs only aggravate problems.",
    },
  ];

var nextBtn = document.getElementById('NEXT')
var questionsEl = document.getElementById('questions');
var answerEl = document.getElementById('answers');
var choicesEl = document.getElementById('choices');
var adviceEL = document.getElementById('advice')
var bannerEl= document.getElementById('header')

var startQuiz = function(questions) {
  var startScreenEl = document.getElementById('welcome');
  startScreenEl.setAttribute('class', 'hide');
  console.log(questions);
  questionOrder = questions.sort();
  questionsEl.classList.remove('hide');
  answerEl.classList.remove('hide');
  nextQuestion();
}
nextBtn.addEventListener('click', function(){
  startQuiz(questions)
});

var nextQuestion = function(){
  showQuestion(questionOrder[currentQuestionIndex++])
}
var showQuestion = function(questions) {
  questionsEl.innerText = questions.message
  
};

let banner= document.getElementById('header')
fetch ('https://api.goprogram.ai/inspiration',{banner})
    .then(response=> response.json())
    .then(data =>{console.log(data.quote)
      let quote = data.quote
      let dailyQuote =`
      ${quote}
      `
    let quoteEl = document.querySelector(".quote-element")
    quoteEl.append(dailyQuote)
    }
     );