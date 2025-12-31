const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyperlinks and Text Markup Language",
        d: "Home Tool Markup Language",
        correct: "a",
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "Jquery",
        c: "CSS",
        d: "XML",
        correct: "c",
    },
    {
        question: "Which is NOT a JavaScript framework?",
        a: "React",
        b: "Angular",
        c: "Vue",
        d: "Django",
        correct: "d",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "<!---->",
        b: "//",
        c: "##",
        d: "**",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

Submit.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <div class="result">
                    <h2>You scored ${score} / ${quizData.length}</h2>
                    <button onclick="location.reload()">Restart Quiz</button>
                </div>
            `;
        }
    }
});
