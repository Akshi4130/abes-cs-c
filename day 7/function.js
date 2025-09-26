function isODD(a){
    //return a%2!==0;
    if(a%2!==0){
        return "value is odd";
    }
    else{
        return "value is even";
    }

}
function isODDUsingTernary(a)
{
    return a%2!==0?"value is odd":"value is even";
}
let funAsExpression = function isODD(a)
{
    return a%2!==0?"value is odd":"value is even";

}
console.log(funAsExpression(3));
const arrowFun=(a)->a%2!==0?"value is odd":"value is even";
console.log("output",arrowFun(4));
(function iife(){
    console.log("Inside IIFE Function");
})();
console.log(isODD(3));
console.log(isODDUsingTernary(3));