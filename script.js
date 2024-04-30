const quizData = [
  {
    question: "Who created the world?",
    a: "Alexander the Great",
    b: "Tony stark",
    c: "Sasuka Uchiha",
    d: "Not me",
    correct: "d",
  },
  {
    question: "Who is the first person in the Earth?",
    a: "Alexander the Great",
    b: "Tony stark",
    c: "Sasuka Uchiha",
    d: "Not me",
    correct: "d",
  },
  {
    question: "Who the father of computer?",
    a: "Alexander the Great",
    b: "Tony stark",
    c: "Charlesh Babbege",
    d: "charlesh Babbege's father",
    correct: "c",
  },
  {
    question: "Who is worlds biggest brain?",
    a: "Me",
    b: "Tony stark",
    c: "Sasuka Uchiha",
    d: "Not me",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  disselectOptions();
  const currenQuizData = quizData[currentQuiz];
  question.innerText = currenQuizData.question;
  a_text.innerText = currenQuizData.a;
  b_text.innerText = currenQuizData.b;
  c_text.innerText = currenQuizData.c;
  d_text.innerText = currenQuizData.d;
}

function disselectOptions() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSlectedOption() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSlectedOption();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You scored ${score} / ${quizData.length} correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
