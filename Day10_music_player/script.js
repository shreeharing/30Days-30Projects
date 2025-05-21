let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlIcon = document.getElementById("cltrIcon")
let currentTimeEl = document.getElementById("current-time");
let totalTimeEl = document.getElementById("total-time");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    console.log("hii");
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause"); 
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play"); 
        ctrlIcon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    return `${min}:${sec}`;
}

// Update total duration when song metadata is loaded
song.onloadedmetadata = () => {
    totalTimeEl.textContent = formatTime(song.duration);
};

// Update current time every second
setInterval(() => {
    currentTimeEl.textContent = formatTime(song.currentTime);
}, 500);