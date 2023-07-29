// 1

let messagesCount = 1;

const timer1 = setInterval(sendMessageFunction, 3000);

function sendMessageFunction() {

    if (messagesCount > 5) {
        clearInterval(timer1);
        return
    }

    messagesCount += 1;
}

// 2

const firstCircus = document.querySelector(".box1");
const secondCircus = document.querySelector(".box2");

const firstTimer = setInterval(firstCircusMoving, 500);
const secondTimer = setInterval(secondCircusMoving, 100);

function firstCircusMoving() {
    let randomSize = Math.random() * (150 - 50) + 50;
    let randomColor1 = Math.random() * (255 - 0) + 0;
    let randomColor2 = Math.random() * (255 - 0) + 0;
    let randomColor3 = Math.random() * (255 - 0) + 0;

    firstCircus.style.width = `${randomSize}px`;
    firstCircus.style.height = `${randomSize}px`;
    firstCircus.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

function secondCircusMoving() {
    let randomX = Math.random() * (55 - 45) + 45;
    let randomY = Math.random() * (10 - 0) + 0;

    secondCircus.style.top = `${randomY}%`;
    secondCircus.style.left = `${randomX}%`;
}
