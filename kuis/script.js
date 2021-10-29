const quizData = [
  {
    question: "Bahasa Pemrograman Terpopuler Tahun 2021?",
    a: "Java",
    b: "C",
    c: "Sunda",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "HTML Merupakan Singakatan Dari?",
    a: "Hypertext Markup Language",
    b: "Hypertranslate Markup Language",
    c: "Hypertest Markup Language",
    d: "Hypertrick Markup Language",
    correct: "a",
  },
  {
    question: "Kapan JavaScript Diluncurkan?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "2021",
    correct: "b",
  },
  {
    question: "Mana yang tidak dikategorikan Bahasa Pemrograman?",
    a: "HTML",
    b: "Java",
    c: "PHP",
    d: "Python",
    correct: "a",
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

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
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
                <h2>Jawaban benar berjumlah ${score}/${quizData.length} pertanyaan.</h2>
                
                <button onclick="location.reload()">Ulang</button>
            `;
    }
  }
});
