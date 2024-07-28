

function secondLargest(arr) {
  
    let firs = 0
    let second = 0

    for(let num of arr){
      
        if(num>firs){
            second = firs
            firs = num         
        }else if(num>second && num<firs){
            second = num
        }

    }

    console.log(second,firs);

}


secondLargest([4,5,48,7,45,6,2,9,56,45,3,56,49,2,4,0])