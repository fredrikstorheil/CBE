let diam = 100;
let inOut = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    noStroke();
    ellipse(windowWidth / 2, windowHeight / 2, diam);


    if (diam > 200) {
        inOut = false;
        let c = color(31, 155, 155);
        fill(c);
        noStroke();
    }

    if (diam < 10) {
        inOut = true;
        let c = color(206, 206, 206);
        fill(c);
        noStroke();
    }

    if (inOut) {

        diam = diam + 35;
    }

    if (!inOut) {
        diam = diam - 35;
    }

    if (seconds < 1) {
        let c = color(206, 206, 206);
        fill(c);
        noStroke();
    }
}


let seconds = 31;
let timeElm = document.querySelector(".countdown");
let resetButtonElm = document.querySelector(".reset-button");
let quote2Elm = document.querySelector(".quote2");

function countDown() {

    // den lange versjonen 'seconds = seconds -1;'
    seconds -= 1;

    if (seconds < 1) {
        window.clearInterval(intervalId);
        timeElm.classList.add("hidden");
        resetButtonElm.classList.remove("hidden");
        quote2Elm.classList.remove("hidden");
    }

    timeElm.textContent = seconds;

}

function audioPlay() {
    let audio = new Audio('media/dog-30s.m4a');
    audio.play();
}

let intervalId = window.setInterval(countDown, 1000);
window.onload = countDown(), audioPlay();