const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
console.log(num1);
console.log(num2);
function add(){
    console.log(num1,value);
    console.log(num2,value);
    const op=parseFloat(num1,value)+parseFloat(num2,value);
    output.innerText = op
}
function subtract(){
    console.log(num1,value);
    console.log(num2,value);
    const op=parseFloat(num1,value)-parseFloat(num2,value);
    output.innerText = op
}
function multiply(){
    console.log(num1,value);
    console.log(num2,value);
    const op=parseFloat(num1,value)*parseFloat(num2,value);
    output.innerText = op
}
function divide(){
    console.log(num1,value);
    console.log(num2,value);
    const op=parseFloat(num1,value)/parseFloat(num2,value);
    output.innerText = op
}

