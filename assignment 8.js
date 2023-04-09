/*
Printing Even Numbers
Given an integer n . Using for loop return all even numbers up to and including n and don’t include 0.
Example 1:
Input:
let n = 22;
Output:
[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
Explanation:
We have to print all even numbers excluding 0 to the number. Hence, the output where even numbers are printed upto 22 including 22 but excluding 0.
 */
function evenNumbers(n) {
    let arr = [];
    for (let i = 2; i <= n; i += 2) {
        arr.push(i);
    }
    return arr;
}

let n = 22;
console.log(`Answer is : [ ${evenNumbers(n)} ]`);

/*
TODO: Sum of two arrays
Given an array arr1 of size n and another array arr2 of size m. Return the total sum of the elements present in both array.Each array includes only numbers..
Example 1:
Input:
n=11 , arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
m=11 , arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
Output:
627
Explanation:
Individual sum of the elements of individual arrays are 276 and 351 respectively. Hence, the output the sum of these two 627.
 */
function sumOfTwoArrays(arr1, arr2) {
    let sum = 0;
    
    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
    
    for (let j = 0; j < arr2.length; j++) {
      sum += arr2[j];
    }
    
    return sum;
  }
  let arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
  let arr2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
  let totalSum = sumOfTwoArrays(arr1, arr2);
  
  console.log(totalSum);
/*
Reverse order of elements
Given a string str , write a function that will return string in reverse order without reversing each words.
Example 1:
Input:
I am almabetter
Output:
almabetter am I
 */
function reverseString(str) {
    // split the string into an array of words
    let words = str.split(" ");
  
    // reverse the order of the words
    words = words.reverse();
  
    // join the words back together into a string
    let reversedStr = words.join(" ");
  
    // return the reversed string
    return reversedStr;
  }
  let str = "Hello world, how are you?";
  let reversedStr = reverseString(str);
  console.log(reversedStr);
  // Output: "you? are how world, Hello"
  
  
  
  