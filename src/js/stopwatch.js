const stopwatchButton = document.querySelector(".stopwatch-button");
const stopwatchInput = document.querySelector(".stopwatch-input");

let timer = null;
let time = 0;

stopwatchButton.addEventListener("click", OnStopwatchClick);

function OnStopwatchClick() {
    if(!Number(stopwatchInput.value)) {
        return alert("Enter the number!")
    }
    time = stopwatchInput.value;
    timer = setInterval(timerActivated, 1000);
}

function timerActivated() {
    if (time === 0) {
        clearInterval(timer);
        stopwatchInput.value = "";
        return alert("time is over!");
    }
    stopwatchInput.value = `${time - 1} sec`;
    time -= 1;
}