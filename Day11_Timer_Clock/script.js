let min = 0;
let sec = 58;
let hr = 0;
const timer = document.getElementById("timer");
let xyz =null;

function clock(){
    sec++;
    if(sec === 60){
        min++;
        sec = 0;
        if(min === 60){
            min = 0;
            hr++;
        }
    }
    let h = hr<10 ? "0" + hr : hr;
    let m = min<10 ? "0" + min : min;
    let s = sec<10 ? "0" + sec : sec;
    timer.innerHTML = h+":"+m+":"+s;
}
function startClock(){
    if(xyz !== null){
        clearInterval(xyz);
    }
    xyz = setInterval(clock,1000);
}
function stopClock(){
    clearInterval(xyz)
}
function resetClock(){
    clearInterval(xyz);
    sec = 0;
    min = 0;
    hr = 0;
    timer.innerHTML = "00:00:00"
}