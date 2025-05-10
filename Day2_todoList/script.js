const inputBox=document.getElementById("inBox")
const listContainer=document.getElementById("todo-lists")
const checked=document

function addTask(){
    console.log(inputBox)
    if(inputBox.value===''){
        alert('You must write something ')
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

inputBox.addEventListener("keydown",(e)=>{
    if(e.key==='Enter'){
        addTask();
    }
});

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked") ;
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();