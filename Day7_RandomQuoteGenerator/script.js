const quoteElement = document.getElementById("quote");
const btnElement = document.getElementById("btn1");

let quote;
let author;

async function getQuote(){

    while(quoteElement.hasChildNodes()){
        quoteElement.removeChild(quoteElement.firstChild);
    }

    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        let data = await response.json();
        // data = JSON.parse(data.contents);
        console.log(data);
        
        quote = data.quote;
        author = data.author;

        const h2 = document.createElement("H2");
        h2.innerHTML = `"${data.quote}"`;
        quoteElement.appendChild(h2);
        
        const p = document.createElement("P");
        p.innerHTML = `— ${data.author}`;
        quoteElement.appendChild(p);

    } catch (error) {
        console.log("Error:", error.message);
    }

}

document.addEventListener("DOMContentLoaded", getQuote);

// getQuote();

btnElement.addEventListener("click",()=>{
    getQuote();
    console.log("I got clicked");
})

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote}  %0A  — ${author}`,"Tweet Window","width-500","height-200");
}