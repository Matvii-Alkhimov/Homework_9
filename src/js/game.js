// 3

// Створення кнопок

const gameArticleEl = document.querySelector(".game");

for (let i = 1; i < 4; i += 1) {
    const buttonsCont = document.createElement("div");
    buttonsCont.innerHTML = `
    <div class="btn-cont"><button disabled class="game-button"></button></div>
    <div class="btn-cont"><button disabled class="game-button"></button></div>
    <div class="btn-cont"><button disabled class="game-button"></button></div>
    <div class="btn-cont"><button disabled class="game-button"></button></div>
    `
    buttonsCont.classList.add("buttons-container", `buttons-container-${i}`);
    gameArticleEl.append(buttonsCont);
}

// Вибір складності

const mediumButtons = document.querySelector(".buttons-container-2");
const difficultButtons = document.querySelector(".buttons-container-3");
const easyInput = document.querySelector(".easy-input");
const mediumInput = document.querySelector(".medium-input");
const difficultInput = document.querySelector(".difficult-input");

easyInput.addEventListener("change", onEasyChecked);

function onEasyChecked(event) {
    mediumButtons.classList.remove("active");
    difficultButtons.classList.remove("active");
}

mediumInput.addEventListener("change", onMediumChecked);

function onMediumChecked(event) {
    mediumButtons.classList.add("active");
    difficultButtons.classList.remove("active");
}

difficultInput.addEventListener("change", onDifficultChecked);

function onDifficultChecked(event) {
    difficultButtons.classList.add("active");
    mediumButtons.classList.add("active");
}

// Гра

const allEasyButtons = Array.from(document.querySelectorAll(".buttons-container-1 button"));
const allMediumButtons = Array.from(document.querySelectorAll(".buttons-container-2 button"));
const allDifficultButtons = Array.from(document.querySelectorAll(".buttons-container-3 button"));
const timerEl = document.querySelector(".timer");
const scoreText = document.querySelector(".score");


const params = {
    exercises: null,
    gameStarted: null,
    timer: null,
    allButtons: null,
    width: 50,
    answerPicked: null,
    score: 0,
}

const questions = {
    colors: ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "gray"],
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    strings: ["8745", "///sad", "\\\```sd", "s", "xdslc", "....,,...", "....///.,,,", "..../.,.", "QWS", "23@"],
}

const StartButtonEl = document.querySelector(".start-button");
const textEl = document.querySelector(".game > p");

StartButtonEl.addEventListener("click", startGameFunction);


function startGameFunction() {
    params.exercises = [];
    StartButtonEl.textContent = "";
    if (easyInput.checked) {
        params.exercises = [questions.colors];
        params.allButtons = [...allEasyButtons];
    } else if (mediumInput.checked) {
        params.exercises = [questions.colors, questions.letters];
        params.allButtons = [...allEasyButtons, ...allMediumButtons];
    } else if (difficultInput.checked) {
        params.exercises = [questions.colors, questions.letters, questions.strings];
        params.allButtons = [...allEasyButtons, ...allMediumButtons, ...allDifficultButtons];
    }
    
    StartButtonEl.removeEventListener("click", startGameFunction);
    clearQuestions();
    pickExercisesFunction();
    
}

function pickExercisesFunction() {
    const ourExcercises = [];
    params.allButtons.forEach((button) => {
        
        button.textContent = "";
        button.style.backgroundColor = "gray";

        const randomArrayIndex = Math.round(Math.random() * (params.exercises.length - 1 - 0) + 0);
        const arrayWeGet = params.exercises[randomArrayIndex];

        const randomExerciseIndex = Math.round(Math.random() * (arrayWeGet.length - 1 - 0) + 0);
        const exerciseWeGet = arrayWeGet[randomExerciseIndex];

        ourExcercises.push(exerciseWeGet);
        arrayWeGet.splice(randomExerciseIndex, 1)

        button.dataset.answer = exerciseWeGet;
        
        if (randomArrayIndex === 0) {
            button.style.backgroundColor = exerciseWeGet;
        } else {
            button.textContent = exerciseWeGet;
        }

        button.addEventListener("click", AnswerButtonPicked);
        button.removeAttribute("disabled");
    });

    params.answerPicked = ourExcercises[Math.round(Math.random() * (ourExcercises.length - 1 - 0) + 0)];

    

    textEl.textContent = `Pick the "${params.answerPicked}" button`;

    timerEl.classList.add("active")
    
    params.timer = setInterval(timeGoing, 100)
    params.gameStarted = setInterval(playingGameFunction, 10000);

}

function playingGameFunction(event) {

    clearInterval(params.gameStarted);
    clearInterval(params.timer);
    timerEl.classList.remove("active");
    params.width = 50;
    params.score = 0;

    textEl.textContent = "Time over!";
    StartButtonEl.addEventListener("click", startGameFunction);
    StartButtonEl.textContent = "RESTART";

    params.allButtons.forEach((button) => {
       button.removeEventListener("click", AnswerButtonPicked);
       button.toggleAttribute("disabled");
       button.style.backgroundColor = "gray";
    })
}

function timeGoing() {
    params.width -= 0.5;
    timerEl.style.width = `${params.width}%`;
}

function clearQuestions() {
    questions.colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "gray"];
    questions.letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    questions.strings = ["8745", "///sad", "\\\```sd", "s", "xdslc", "....,,...", "....///.,,,", "..../.,.", "QWS", "23@"];
    params.width = 50;
}

function AnswerButtonPicked(event) {
    const answer = event.target.dataset.answer;

    if(answer === params.answerPicked) {
        params.score += 1;
        scoreText.textContent = `Score: ${params.score}`;

        clearInterval(params.gameStarted);
        clearInterval(params.timer);
        startGameFunction();
        clearQuestions();
    } else {
        // Будемо віднімати по очку за кожну помилку
        params.score -= 1;
        scoreText.textContent = `You made a mistake! Score: ${params.score}`;
    }
}