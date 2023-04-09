

// Write a JavaScript program that checks if input number is even or odd by using “%” operator in JavaScript.

function evenOdd(n){
    if(n%2==0){
        console.log("no is even",n);
    }else{
        console.log("no is odd",n);
    }
}
evenOdd(15);
// Write a JavaScript program that checks if input variable is a number by using isNaN() in-built JavaScript function.

function isNumber(num1) {
    if (isNaN(num1)) 
    {
        return false;
    }
    else 
    {
        return true;
    }
}
function main() 
{
    const num1 = parseInt(readLine());
    const out =isNumber(num1); 
    console.log(out); 
}

// Write a JavaScript program that accept three integers and return the maximum among them.
function max_num(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
     max_val = z;
  }
  return max_val;
}

console.log(max_num(5,6,10));

