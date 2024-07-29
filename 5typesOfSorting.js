//? bubble sort
//! Time Complexity:
//! Worst-case: O(n 2) - Occurs when the list is in reverse order.
//! Average-case: O(n 2) - Average number of comparisons and swaps.
//! Best-case: O(n) - Occurs when the list is already sorted (with a slight modification to check if any swaps were made during a pass).

let arr = [64, 34, 25, 12, 22, 11, 90, 5];

let n = arr.length        
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1]= temp
        }
      
    }

    // console.log(arr)
}

// console.log(arr)


//?  QUICK SORT
    
//! Time Complexity:
//! Best-case and average case: O(nlogn) - The pivot divides the array into two equal halves consistently.

function quicksort(arr) {
    if(arr.length <2) return arr
     
    let pivot = arr[0]
    let left = []
    let right = []

    for(let i=1;i<arr.length;i++) {
       if(arr[i]<pivot){
          left.push(arr[i])
       } else {
          right.push(arr[i])
       }  
    }


    return [...quicksort(left),pivot,...quicksort(right)]
}


console.log(quicksort([9, 14, 2, 11, 50, 4, 33, 21]));

//! selection sort


function selectionSort(arr) {

    for(let i=0;i<arr.length;i++){

        let minIndex = i

        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j 
            } 
        }

       
       if(i!==minIndex) {
        let temp = arr[i]
        arr [i] = arr[minIndex]
        arr[minIndex] = temp
       }

    }

    return arr

}


console.log(selectionSort([17, 5, 8, 23, 42, 15, 7, 31]));

