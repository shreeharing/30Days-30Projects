let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("cltrIcon");
let currentTimeEl = document.getElementById("current-time");
let totalTimeEl = document.getElementById("total-time");

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    return `${min}:${sec}`;
}

// Set duration and initial values
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    totalTimeEl.textContent = formatTime(song.duration);
};

// Play/pause toggle
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

// Sync progress bar and current time
setInterval(() => {
    progress.value = song.currentTime;
    currentTimeEl.textContent = formatTime(song.currentTime);
}, 500);

// Allow scrubbing
progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};
function forward10() {
    song.currentTime = Math.min(song.currentTime + 10, song.duration);
}

function rewind10() {
    song.currentTime = Math.max(song.currentTime - 10, 0);
}
