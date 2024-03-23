const a = document.querySelector("audio");
const p = document.querySelector("#target");

//variables
let clicks = 0;

//funcions
function score() {
    a.currentTime - 0;
    a.play();

    clicks = clicks +1;
    p.innerHTML = clicks;
}