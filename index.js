// index.js
import { questions } from './quiz_questions.js';

// Now you can use the 'questions' array
console.log(questions);
const questionElement = document.getElementById("question");
const optionButton = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestionIndex=[];
let score = 0;
let count = 0;

function startQuiz() {
    count=0;
    currentQuestionIndex=[];
    for(let i=0;i<5;i++){
        let val=Math.floor(Math.random()*questions.length);
        if(questions[val].active){
            currentQuestionIndex.push(val);
            questions[val].active = false;
        }
        else{
            i--;
        }
    }
    score = 0;
    submitButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    if(count<5){
        resetState();
        let curQuestion = questions[currentQuestionIndex[count]];
        questionElement.innerHTML = `${count+1}.${curQuestion.question}`;

        curQuestion.options.forEach(answer => {
            const button = document.createElement("button");
            button.textContent   = answer.text;
            button.classList.add("btn");
            optionButton.appendChild(button);
            if(answer.correct ){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }
    else{
        showScore();
    }
}

function resetState() {
    submitButton.style.display = "none";
    while (optionButton.firstChild) {
        optionButton.removeChild(optionButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");

    Array.from(optionButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
     score += isCorrect ? 1 : 0;

    submitButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You have scored ${score} out of 5!`
    submitButton.innerHTML="Play agin";
    submitButton.style.display="block";
    for(let i=0;i<currentQuestionIndex.length;i++){
        questions[currentQuestionIndex[i]].active=true;
    }
}

function handleSubmitButton(){
    if(count<5){
        showQuestion();
    }
    else{
        showScore(); 
    }
}
submitButton.addEventListener("click",(e)=>{
    count++;
    if(count<5){
        handleSubmitButton();
    }
    else if(count===5){
        showScore(); 
    }
    else{
        startQuiz();
    }
    
})
startQuiz();
