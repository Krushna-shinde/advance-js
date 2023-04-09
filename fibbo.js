function fibonacci(num){
let f1=0;
let f2=1;
let f3;
if (num===0) {
    return  f1;
}
for(let i=2;i<=num;i++){
    f3=f1+f2;
    f1=f2;
    f2=f3;
   }
return f2;
}
for(let i=0;i<5;i++)
 {
 console.log(fibonacci(i));
 }