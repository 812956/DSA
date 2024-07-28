// Binary Search in JavaScript
// Binary search is a more efficient algorithm than linear search for finding an element in a sorted array. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, it narrows the interval to the lower half; otherwise, it narrows it to the upper half. This process continues until the target value is found or the interval is empty.

// How Binary Search Works
// Initial Setup: Start with the entire array. Set two pointers: low at the beginning and high at the end.
// Calculate Middle: Find the middle index of the current interval: mid = Math.floor((low + high) / 2).
// Compare Middle Value:
// If the middle element is the target, you’ve found the element.
// If the target is less than the middle element, narrow the search to the lower half (i.e., set high to mid - 1).
// If the target is greater than the middle element, narrow the search to the upper half (i.e., set low to mid + 1).
// Repeat: Continue adjusting low and high until low exceeds high (meaning the element is not in the array) or the target is found.


// function binarySearch(arr,target){

//   let low = 0 , high = arr.length -1

//   while(low<= high){
//      let mid = Math.floor(low+2/2) 
     
//      if(arr[mid]==target){
//         return mid
//      }
//       else if(arr[mid]<target){
//         low += 1
//       }else{
//         high -=1
//       }

//   }

//   return -1

// }


// console.log(binarySearch([1,3,5,7,9,11,13],9));


function binarySearch(arr, target) {
  let low = 0;               // Start of the array
  let high = arr.length - 1; // End of the array

  while (low <= high) {
      let mid = Math.floor((low + high) / 2); // Calculate middle index
   

      if (arr[mid] === target) {
          return mid; // Target found, return index
      } else if (arr[mid] < target) {
          low = mid + 1; // Narrow to the upper half
      } else {
          high = mid - 1; // Narrow to the lower half
      }
  }

  return -1; // Target not found
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13];
// console.log(binarySearch(array, 9)); // Output: 3
// console.log(binarySearch(array, 4)); // Output: -1



// Find the First Occurrence:
// Write a function to find the first occurrence of a specific number in a sorted array that may contain duplicate  how to do this using  how to do this using binary search in js  



function firstOccurrenceBinary(arr,target){

    let low = 0
    let hig = arr.length-1
   
    let result = -1

    while(low <= hig){

      let mid = Math.floor((low+hig)/2)
        if(arr[mid] === target){
            hig = mid-1
            result = mid
        }
        else if(target>arr[mid]){
             low = mid+1
        }else{
            hig = mid-1
        }
       
    }
   
    return result

}

console.log(firstOccurrenceBinary([5, 5, 5, 5, 5, 6, 7, 8, 9],5));


// Find the Last Occurrence:
// Write a function to find the last occurrence of a specific number in a sorted array that may contain duplicates.


function lastBinarySearch(arr,target) {

    let low = 0
    let hig = arr.length-1
    let result = -1
    
    while(low <= hig){
        let mid = Math.floor((low + hig )/2)
    
      if(arr[mid]===target){
          
         low = mid+1
         result = mid
    
      }
      else if(arr[mid]<target){
          low = mid + 1
      }
      else {
         hig = mid - 1
      }
    
    }
    
    return result
    
    }
    
    // console.log( lastBinarySearch([1, 3,3,5,5,5, 5, 7, 9, 11, 13],5));




/////////////////////////////     Binary search using recursion /////////////////////


function binarySearchUsingRecursion( arr,target,low,hig){
    
    if(low>hig){
        return -1
    }

    let mid = Math.floor((low+hig)/2)

    if(arr[mid]==target){
        return mid
    }

    else if(arr[mid]>target){
        return binarySearchUsingRecursion(arr,target,low,mid-1)
    }

    else {
        return binarySearchUsingRecursion(arr,target,mid+1,hig)
    }

}

console.log(binarySearchUsingRecursion([2, 4, 6, 8, 10, 12, 14],2,0,[2, 4, 6, 8, 10, 12, 14].length-1));


