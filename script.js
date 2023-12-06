const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid", "Jaddah"],
    correctAnswer: ["Paris"],
  },
  {
    question: "Which of the following are primary colors?",
    options: ["Red", "Green", "Blue", "Yellow"],
    correctAnswer: ["Red", "Blue", "Yellow"],
  },
  {
    question: "Which of the following countries are part of the G7 group?",
    options: ["United States", "China", "Japan", "France"],
    correctAnswer: ["United States", "Japan", "France"],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Leo Tolstoy",
    ],
    correctAnswer: ["William Shakespeare"],
  },
  {
    question: "Which of the following elements are noble gases?",
    options: ["Helium", "Oxygen", "Neon", "Nitrogen"],
    correctAnswer: ["Helium", "Neon"],
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Hg", "Fe"],
    correctAnswer: ["Au"],
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Brisbane","London"],
    correctAnswer: ["Canberra"],
  },
  {
    question: "In which year did Christopher Columbus reach the Americas?",
    options: ["1492", "1607", "1776", "1453"],
    correctAnswer: ["1492"],
  },
  {
    question:
      "Which of the following planets are considered terrestrial planets?",
    options: ["Mercury", "Jupiter", "Earth", "Saturn"],
    correctAnswer: ["Mercury", "Earth"],
  },
  {
    question: "Who is known as the father of modern physics?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correctAnswer: ["Albert Einstein"],
  },
];

let currQuesNo = 0;
let score = 0;

const queBox = document.getElementById("question");
const optnBox = document.getElementById("options");
const NxtBtn = document.getElementById("nxt-btn");
const box = document.getElementById("box");

function quesDisplay(question) {
  queBox.innerHTML = `<h3><b>${question.question}</b></h3>`;
  optnBox.innerHTML = "";
  question.options.forEach((option) => {
    const input = document.createElement("input");
    input.type = question.correctAnswer.length > 1 ? "checkbox" : "radio";
    input.name = "option";
    input.value = option;
    input.id = option;
    optnBox.appendChild(input);
    // console.log(optnBox);
    const label = document.createElement("label");
    label.innerText = option;
    label.htmlFor = option;
    // console.log(label);
    optnBox.appendChild(label);
    // console.log(optnBox);
    box.appendChild(optnBox)
  });
}

function ansChecker() {
  const userAns = Array.from(
    document.querySelectorAll("input[name=option]:checked")
  ).map((input) => input.value);
  // console.log(userAns);
  const correct = questions[currQuesNo].correctAnswer;
  if (userAns.length === correct.length &&
    userAns.every((option) => correct.includes(option))) {
    score++;
    // console.log(score);
  }
  if (userAns.length === 0) {
    console.log(userAns.length);
    const message = document.getElementById("message");
    message.innerHTML = "Please slect any one option";
    currQuesNo--;
    console.log(message);
    return;
  }else{
    message.innerHTML="";
  }
}
NxtBtn.addEventListener("click", () => {
  ansChecker();
  currQuesNo++;
  if (currQuesNo < questions.length) {
    quesDisplay(questions[currQuesNo]);
  } else {
    queBox.innerHTML = `<h1>Your Score: ${score}/${questions.length}</h1>`;
    message.innerHTML = "";
    optnBox.innerHTML = "";
    NxtBtn.style.display = "none";
    optnBox.style.display = "none";
  }
});
quesDisplay(questions[currQuesNo]);
// console.log(questions[currQuesNo]);
