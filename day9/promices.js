const weight=(time,message)=>{
    setTimeout(()=>{
        console.log(message);
    },time)
}
const ordercoffee=()=>{
    weight(4000,"make some order")
    .then(()=>weight(2000,"brewing coffee"))
    .then(()=>weight(3000,"serving coffee"))
   .then(()=>weight(1000,"Thanks for the visit"));

}
const ordercoffee=()=>{
    await  weight(4000,"make some order");
    await weight(2000,"brewing coffee");
    await weight(3000,"serving coffee");
    await weight(1000,"Thanks for the visit");

}