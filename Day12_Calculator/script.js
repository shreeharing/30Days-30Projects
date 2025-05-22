const inputField = document.getElementById("inputField")

document.addEventListener("keydown",(e)=>{
    if(!isNaN(e.key)){
        inputField.value += e.key;
    }
    document.addEventListener('keydown', (e) => {
  if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();  
    let expr = inputField.value.trim();

    while (/[+\-*/.]$/.test(expr)) {
      expr = expr.slice(0, -1);
    }

    try {
      inputField.value = eval(expr);
    } catch {
      inputField.value = "Error";
    }
  }
});

    if(e.key === "Backspace"){
        inputField.value = inputField.value.toString().slice(0,-1)
    }
    if(e.key ==="+"){
        inputField.value += "+";
    }
    if(e.key ==="."){
        inputField.value += ".";
    }
    if(e.key ==="/"){
        inputField.value += "/";
    }
    if(e.key ==="*"){
        inputField.value += "*";
    }
    if(e.key ==="-"){
        inputField.value += "-";
    }
    
});