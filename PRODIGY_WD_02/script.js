let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
});

document.getElementById("pause").addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
    seconds = minutes = hours = 0;
    displayTime();
    laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
    if (isRunning) {
        const lapTime = display.textContent;
        const li = document.createElement("li");
        li.textContent = `Lap: ${lapTime}`;
        laps.appendChild(li);
    }
});

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    displayTime();
}

function displayTime() {
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    display.textContent = `${h}:${m}:${s}`;
}
