let video = document.getElementById("exampleVideo");
let exampleHeader = document.getElementById("exampleHeader");
let playBtn = document.getElementById("playbtn");
let replayBtn = document.getElementById("replaybtn");
let shuffleBtn = document.getElementById("shufflebtn");
let controlIcon = document.getElementById("controlIcon");

function playAndPause() {
    if (video.paused) {
        video.play();
        document.getElementById("controlIcon").src = "pause-icon.svg";
    } else {
        video.pause();
        document.getElementById("controlIcon").src = "play-button-icon.svg";
    }
}

playBtn.addEventListener("click", playAndPause);

function replay() {
    video.currentTime = 0;
    video.play();
}

replayBtn.addEventListener("click", replay);

function shuffle() {
    document.getElementById("exampleVideo").src = "Contour2.mp4";
    exampleHeader.innerHTML = "Example 2";
}

shuffleBtn.addEventListener("click", shuffle);
