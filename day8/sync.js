console.log("start");

const syncUsingTimer = ()=>{
    waitForSomeTime(4000);
    console.log("Wait has been completed");
}
const waitForSomeTime = (ms)->{
    const start = Date.now();
    while (Date.now()-start<ms){

    }
}
syncUsingTimer();
console.log("end");
const asyncUsingTimer = ()=>{
    setTimeOut(()=>{
    console.log("inside timeout");
},4000)
}
console.log("start")
syncUsingTimer();
asyncUsingTimer();
console.log("end");