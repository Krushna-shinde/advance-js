// Asychronous Basic

/*
TODO : Javascript Promises
Given two number , write a Javascript program that resolves a promise if a number is more than 42 else rejects it.
Example 1:
Input:
25
65
Output:
25 is rejected
65 is resolved
Explanation:
The promise is resolved if the number is greater than 42 otherwise rejects it, hence the output.
 */

const promise = new Promise((resolve, reject) => {
  const num1 = prompt("Enter a number: ");
  const num2 = prompt("Enter a number: ");
  if (num1 > 42) {
      resolve(num1);
  } else {
      reject(num1);
  }
  if (num2 > 42) {
      resolve(num2);
  } else {
      reject(num2);
  }
});

promise.then((result) => {
  console.log(result + " is resolved");
}).catch((error) => {
  console.log(error + " is rejected");
});


/*
Fastest Promise
Given two number num1 and num2 as time interval , write a Javascript program containing two promises that resolves the fastest promise and prints out its value.
Example 1:
Input:
500 100
Output:
two
Explanation:
Out of the two promises specified, second one is the fastest hence, the output.
*/

const promise1 = new Promise((resolve, reject) => {
  const nums1 = prompt("Enter a number: ");
  setTimeout(() => {
      resolve("one");
  }, nums1);
});

const promise2 = new Promise((resolve, reject) => {
  const nums2 = prompt("Enter a number: ");
  setTimeout(() => {
      resolve("one");
  }, nums2);
})

Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
});
// que 3: Given a number n from which counter start as count , write a Javascript program that increments the count after every 2 seconds by 2 and stops incrementing when the count reaches 10.

// Example 1:
// Input:
// n = 0

// Output:
// 2 4 6 8 10

// Explanation:
// The count starts from 0 and it is increased by 2 after every 2 seconds, hence, the output.
const interval = setInterval(() => {
  if (i < 10) {
      console.log(count);
      i+=2;
  } else {
      clearInterval(interval);
  }
}, 2000);
console.log("interval: ", interval);