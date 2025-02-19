const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");

const plus1 = document.getElementById("plus1");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");
const plus4 = document.getElementById("plus4");

const minus1 = document.getElementById("minus1");
const minus2 = document.getElementById("minus2");
const minus3 = document.getElementById("minus3");
const minus4 = document.getElementById("minus4");

let isOpened1 = false;
let isOpened2 = false;
let isOpened3 = false;
let isOpened4 = false;


title1.addEventListener("click",() => {
    if(!isOpened1){
        minus1.style.display = "block";
        plus1.style.display = "none";
        content1.style.display = "block";    
    }else {
        
        minus1.style.display = "none";
        plus1.style.display = "block";
        content1.style.display = "none";    
    }
    isOpened1 = !isOpened1;
    
})

title2.addEventListener("click",() => {
    if(!isOpened2){
        minus2.style.display = "block";
        plus2.style.display = "none";
        content2.style.display = "block";
    }else{
        minus2.style.display = "none";
        plus2.style.display = "block";
        content2.style.display = "none";
    }
    isOpened2 = !isOpened2;
})

title3.addEventListener("click",() => {
    if(!isOpened3){
        minus3.style.display = "block";
        plus3.style.display = "none";
        content3.style.display = "block"
    }else{
        minus3.style.display = "none";
        plus3.style.display = "block";
        content3.style.display = "none"
    }
    isOpened3 = !isOpened3;
})

title4.addEventListener("click",() => {
    if(!isOpened4){
        minus4.style.display = "block";
        plus4.style.display = "none";
        content4.style.display = "block"
    }else{
        minus4.style.display = "none";
        plus4.style.display = "block";
        content4.style.display = "none";
    }
    isOpened4 = !isOpened4;
})