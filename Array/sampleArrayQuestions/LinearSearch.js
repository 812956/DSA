// Linear Search in JavaScript
// Linear search is a straightforward algorithm for finding a target value within a list or array. It works by checking each element in the list sequentially until the desired element is found or the end of the list is reached.

// Algorithm Explanation
// Start at the Beginning: Begin at the first element of the array.
// Check Each Element: Compare the target value with the current element.
// Return if Found: If the current element matches the target, return the index of that element.
// Continue Until End: If the current element does not match, move to the next element and repeat the process.
// Return -1 if Not Found: If you reach the end of the array without finding the target, return -1 to indicate the target is not in the list.


function linearSearch(arr,target){

   for(let i=0;i<arr.length;i++){
    if(arr[i] === target)
              return i
   }

   return -1

}


const array = [10, 20, 30, 40, 50];
// console.log(linearSearch(array,40));

// Find First Occurrence of a Character:

function findFirstOccuren(string,char){
      return  linearSearch(string,char)
}

// console.log(findFirstOccuren('junaid','a'));

// Check if Element Exists:

function DoseExists(arr,value){

    return linearSearch(arr,value)

}

// console.log(DoseExists(["apple", "banana", "cherry"], "banana"));
// console.log(DoseExists(["apple", "banana", "cherry"], "juanid"));


// findAllOccurrences of an Element

function findAllOccurrences(arr,elem){

    let indices = []

    for(let i=0;i<arr.length;i++){
        if(arr[i]==elem){
            indices.push(i)

        }
    }

    return indices

}

findAllOccurrences()



