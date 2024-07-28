// geeksForGeeks

// In this example we will be implementing a number decrement counter which decrements the value by one
//  and prints all the numbers in a decreasing order one after another.

let decrementCounter = number => {
 
    if(number === 0) return 
    console.log(number);
    decrementCounter(number - 1)
    
}

// decrementCounter(5)

// Example 2: In this example, we will be developing a code that will help us to check whether 
// the integer we have passed is Even or Odd. By continuously subtracting 2 from a number,
//  the result would be either 0 or 1. So if it is 0 then our number is Even otherwise it is Odd.

let CheckNumber = (number) => {

    if(number  === 0) return `${number} is even`
    if(number === 1) return `${number} is odd`
    
    return CheckNumber(number - 2)
     
}

// console.log(CheckNumber(5));

// Qestions


// Factorial Calculation:

// Write a recursive function to calculate the factorial of a given number n
// Simple Explanation
// Factorial of a positive integer 𝑛: Multiply all integers from 1 up to 𝑛 eg:  5!=5×4×3×2×1=120

function factorial(number){
     
    let factori = number

    for(let i=number-1;i>=1;i--){
      
         factori*= i
    }
   
    return factori
}

// console.log(factorial(3));


// factorial using recursion  

function factorialRecursion(n){

    if(n===0) {
        return 1
    }
   
    return n * factorialRecursion(n - 1)
}

// console.log(factorialRecursion(4));



// Fibonacci sequence 

// The Fibonacci sequence is a series of numbers in which each number (called a Fibonacci number) is the sum of the two preceding ones.
// The sequence typically starts with 0 and 1. From these starting numbers, 
// each subsequent number in the sequence is derived by adding the previous two numbers.

// Start with 0 and 1.
// Each subsequent number is the sum of the previous two numbers.

function fobinacchi(n) {
    if (n==0) {
        return 0
    }
    if(n == 1 ){
        return 1
    }

    let a=0 , b=1, feb = 0

    for(let i=2;i<=n;i++){
        feb = a+b
        b = feb
        a = b
    }

    return feb
}


// console.log(fobinacchi(5));



// Fibonacci Sequence: Write a recursive function to return the n-th number in the Fibonacci sequence.

function febinocciWithRecursion(n){
    if(n=== 0 ) return 0
    if(n=== 1 ) return 1
    
    return febinocciWithRecursion(n-1) + febinocciWithRecursion(n-2)

}
// console.log(febinocciWithRecursion(6));



// Sum of Digits:

function sumOfdigits(n){

    if(n==0) return 0

   return n + sumOfdigits(n-1)

}

// console.log(sumOfdigits(5));

function sumUsingNormalForLoop(n){

    let sum = 0

    for(let i=1;i<=n;i++){
       sum+=i
    }

    return sum
}

// console.log(sumUsingNormalForLoop(5));

// String Reversal:
// Write a recursive function to reverse a given string.

function reverseString(str) {

    if(str.length == 1 ){
        return str
    }

    return str[str.length-1] + reverseString(str.slice(0,str.length-1))

}

// console.log(reverseString('hello'));


// write a function to find prime number



// write a function to find occurence of a specific number in an array using recursion

function countOccurence(arr,target,count) {

    if(arr.length === 0){
      return count
    }

    if(arr[0]===target){
        count ++
    }

   return  countOccurence(arr.slice(1,arr.length),target,count)

}

// console.log("this is the count of occurence",countOccurence([3, 6, 8, 2, 3, 9, 6, 1, 5],3,0));


// find the greatest common divisor using recursion  

function greatestCommonDivisor(a,b,count,gdc){

    if(a>b) {
     let temp = a
     a = b
     b = temp
    }
 
   if(count === a+1 ) return gdc
 
   if(a % count === 0 && b% count === 0){
      gdc = count
   }
 
   count++
 
   return greatestCommonDivisor(a,b,count,gdc)
 
 }
 
//  console.log(greatestCommonDivisor(18,48,1,0));


// find the power of two numbrs using recursion


function findPower(x,y){

    if(y === 1) {
       return x
    }
  
    return x * findPower(x,y-1)
  
}
  
// console.log(findPower(7,3));


// leet code 
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

function powerOfTwo(n) {

    if(n===0) return false

    if(n===1) return true

    if(n%2 !==0) return false

    return powerOfTwo(n/2)

}

// console.log(powerOfTwo(0));



///  find a string is palindrome using recrusion


function checkPalindrom(str) {
  
    if(str.length<=1) return true
  
    if(str[0]!==str[str.length-1]) return false
  
    return checkPalindrom(str.slice(1,str.length-1))
  
  
}
  
//   console.log(checkPalindrom('hello'));


//  reverse a string 

function reverseString(str) {
  
    if( str.length<=1) return str[0]
  
    return str[str.length -1] + reverseString(str.slice(0,str.length-1))
}
  
// console.log(reverseString('hello'));












