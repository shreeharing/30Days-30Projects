async function createQRCode(){
    const inputEle = document.getElementById("inputEntry");
    const imgEle = document.getElementById("qr-code");
    const parentEle = document.getElementsByClassName("img-div")[0];
    const container = document.getElementsByClassName("container")[0];

    if(inputEle.value.length>0){
        console.log(inputEle.value);
        const response =`http://api.qrserver.com/v1/create-qr-code/?data=${inputEle.value}&size=100x100`;
        imgEle.src = response;
        parentEle.classList.add("show-img");
    }
    else{
        container.classList.add("error");
        setTimeout(()=>{
            container.classList.remove("error");
        },1000)
    }

}