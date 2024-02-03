const question = [
    {
        question: "What is the capital city of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Paris", correct: true},
            {text: "Berlin", correct: false},
            {text: "Rome", correct: false},
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Vincent van Gogh", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Pablo Picasso", correct: false},
            {text: "Michelangelo", correct: false},
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Mercury", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "Fe", correct: false},
            {text: "Cu", correct: false},
        ]
    }
    ,
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "George Bernard Shaw", correct: false},
            {text: "Oscar Wilde", correct: false},
            {text: "Jane Austen", correct: false},
        ]
    }
    ,
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
        ]
    }
    ,
    {
        question: "Which country is known for inventing pizza?",
        answers: [
            {text: "Italy", correct: true},
            {text: "Spain", correct: false},
            {text: "Greece", correct: false},
            {text: "France", correct: false},
        ]
    }
    ,
    {
        question: "Who developed the theory of relativity?",
        answers: [
            {text: "Isaac Newton", correct: false},
            {text: "Albert Einstein", correct: true},
            {text: "Galileo Galilei", correct: false},
            {text: "Stephen Hawking", correct: false},
        ]
    }
    ,
    {
        question: "What is the largest land animal?",
        answers: [
            {text: "Elephant", correct: true},
            {text: "Giraffe", correct: false},
            {text: "Hippopotamus", correct: false},
            {text: "Rhinoceros", correct: false},
        ]
    }
    ,
    {
        question: "Who is the author of the Harry Potter book series?",
        answers: [
            {text: "J.R.R. Tolkien", correct: false},
            {text: "J.K. Rowling", correct: true},
            {text: "C.S. Lewis", correct: false},
            {text: "George R.R. Martin", correct: false},
        ]
    }
];

let questionElement = document.querySelector("#questions");
let answerButton = document.querySelector("#answer-buttons");
let nextButton = document.querySelector("#nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showquestion();
}

function showquestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", (selectAnswer))
    })
};

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
};
function selectAnswer(e){
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++;
    }else{
        selectBtn.classList.add("incorrect")
    }
    // Array.from(answerButton.children).forEach(button => {
        // if(button.dataset.correct === "true"){
        //     button.classList.add("correct");
        // }else if(button.dataset.correct === "false"){
        //     button.classList.add("incorrect");
        // };
        // button.disabled = true;
    // });
    nextButton.style.display = "block"
}
function showscore(){
    resetState();
    questionElement.innerHTML = `You scored  ${score} out of ${question.length} !`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";

}

function handlenextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showquestion();
    }else{
        showscore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<question.length){
        handlenextBtn();
    }else{
        startQuiz()
    }
})

startQuiz();