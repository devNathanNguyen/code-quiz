let timeLeft = 60;
let currentQuiz = 0;
let score = 0;
let timerInterval;

const quizData = [
    {
        question: "What year was the Golden State Warriors founded?",
        a: "1946",
        b: "1956",
        c: "1966",
        d: "1976",
        answer: "c",
    },
    {
        question: "Who is the all-time leading scorer for the Golden State Warriors?",
        a: "Rick Barry",
        b: "Stephen Curry",
        c: "Wilt Chamberlain",
        d: "Chris Mullin",
        answer: "b",
    },
    {
        question: "Who coached the Golden State Warriors to their first NBA championship in 1975?",
        a: "Al Attles",
        b: "Steve Kerr",
        c: "Don Nelson",
        d: "Mark Jackson",
        answer:"a",
    },
    {
        question: "Which player famously scored 100 points in a single game while playing for the Philadelphia Warriors in 1962?",
        a: "Kareem Abdul-Jabbar",
        b: "Wilt Chamberlain",
        c: "Bill Russell",
        d: "Elgin Baylor",
        answer:"b",
    },
    {
        question: "Which Golden State Warriors player was named Finals MVP in the team's championship-winning seasons in 2015, 2017, and 2018?",
        a: "Draymond Green",
        b: "Klay Thompson",
        c: "Kevin Durant",
        d: "Steph Curry",
        answer:"d",
    },
    {
        question: "Which team did the Golden State Warriors defeat in the Western Conference Finals in 2015 to advance to the NBA Finals?",
        a: "Houston Rockets",
        b: "San Antonio Spurs",
        c: "Oklahoma City Thunder",
        d: "Los Angeles Clippers",
        answer:"c",
    },
    {
        question: "Which player holds the Warriors record for most assists in a single game with 30?",
        a: "Tim Hardaway",
        b: "Baron Davis",
        c: "Jason Richardson",
        d: "Andre Iguodala",
        answer:"a",
    },
    {
        question: "Who is the only player in NBA history to be named MVP unanimously, which he achieved while playing for the Golden State Warriors in 2016?",
        a: "LeBron James",
        b: "Kobe Bryant",
        c: "Michael Jordan",
        d: "Steph Curry",
        answer:"d",
    },
    {
        question: "Which Warriors player won the NBA Defensive Player of the Year award in 2015 and 2016?",
        a: "Draymond Green",
        b: "Andrew Bogut",
        c: "David Lee",
        d: "Klay Thompson",
        answer:"a",
    },
    {
        question: "Who is the Warriors all-time leader in rebounds?",
        a: "Wilt Chamberlain",
        b: "Nate Thurmond",
        c: "Chris Webber",
        d: "Chris Mullin",
        answer:"b",
    }
];

// getting ready to modify html
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

// timer
function startTimer() {
    timerInterval = setInterval(function () {
    timeLeft--;
    document.getElementById("timer").innerText = `0:${timeLeft.toString().padStart(2, "0")}`;
    if (timeLeft === 0) {
        endQuiz();
    }
}, 1000);
}

// load question and answer choices
function loadQuiz() {
    // declaring data
    const currentQuizData = quizData[currentQuiz];
    // setting quiz data
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// get selected answer
function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
        answer = answerEl.id;
    }
});
return answer;
}

// deselect answer
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
    answerEl.checked = false;
    });
}

// check answer
function checkAnswer() {
const answer = getSelected();
if (answer === quizData[currentQuiz].answer) {
    score++;
    } else {
    timeLeft -= 1;
    }
    currentQuiz++;
if (currentQuiz < quizData.length) {
    loadQuiz();
    } else {
    endQuiz();
    }
}

// end quiz
function endQuiz() {
    clearInterval(timerInterval);
    quiz.innerHTML = `
    <h2>Your score: ${score}</h2>
    <form>
    <label for="initials">Enter initials:</label>
    <input type="text" id="initials" name="initials" maxlength="3">
    <button id="save">Save</button>
    </form>
`;
const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", saveScore);
}

// save score
function saveScore(e) {
    e.preventDefault();
    const initials = document.getElementById("initials").value;
    // save score to localStorage or a backend
}

// event listeners
submitBtn.addEventListener("click", checkAnswer);

// start quiz
loadQuiz();
startTimer();