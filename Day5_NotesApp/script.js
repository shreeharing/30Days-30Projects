const notesContainer = document.querySelector(".notes-container");
const buttonElement = document.querySelector(".btn");

function showStorage() {
    notesContainer.innerHTML = localStorage.getItem("storage") || "";
}

function updateStorage() {
    localStorage.setItem("storage", notesContainer.innerHTML);
}

showStorage();

buttonElement.addEventListener("click", () => {
    let inputBox = document.createElement("P");
    let deleteIcon = document.createElement("IMG");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    deleteIcon.src = "./images/delete.png";
    deleteIcon.alt = "Delete Note"; 

    notesContainer.appendChild(inputBox).appendChild(deleteIcon);

    updateStorage();
    inputBox.focus();
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); 
    }
    else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault(); 
    }
});
