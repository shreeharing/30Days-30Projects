const inputEle = document.getElementById("dob");
const btnEle = document.getElementById("btn");
const resultDiv = document.getElementById("result");

console.log(resultDiv);
inputEle.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    const dob = new Date(inputEle.value);
    
    let d1 = dob.getDate();
    let m1 = dob.getMonth();
    let y1 = dob.getFullYear();
    
    let today = new Date();
    
    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let y3,m3,d3;

    y3 = y2 - y1;
    if(m2>=m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = m2 + 12 - m1;
    }
    if(d2>=d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getMonthDays(y1,m1) - d1 + d2;

        if(m3<0){
            m3 = 11
            y3--;
        }
    }
    const p = document.createElement("P");
    if(inputEle.value === ""){
        while(resultDiv.firstChild){
            resultDiv.removeChild(resultDiv.firstChild);
        }
        p.innerHTML = "Please Enter the DOB";
        console.log(p);
        resultDiv.appendChild(p);
    }
    else{
        while(resultDiv.firstChild){
            resultDiv.removeChild(resultDiv.firstChild);
        }
        p.innerHTML =  `You are <span>${y3}</span> Years <span>${m3}</span> Months And <span>${d3}</span> Days Old !!!`;
        resultDiv.appendChild(p);
    }
}
function getMonthDays(year,month){
    return new Date(year,month,0).getDate();
}



function showResult(){
    
}