const sum=(a,b)=>{
    return a+b;
}
const subtract=(a,b)=>{
    return a-b; 
}

 const calculate=(a,b,callbackfn)=>{
   const result = callbackfn(a,b);
    console.log(result);
 }
 
 calculate(10,19,sum);