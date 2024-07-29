// reffer W3schools


//? implimentation

class Stack {
    constructor() {
        this.arr = []
    }

    push(value) {
      this.arr.push(value)
    }

    pop() {
        if(this.isEmpty()) return 'stack is emptye'
        this.arr.pop()
    }

    peack() {
        if(this.isEmpty()) return 'stack is empty'
        
        return this.arr[this.arr.length-1]
    }

    arrToStack(arr) {
        let i = 0
        while(i!==arr.length){
          this.arr.push(arr[i])
          i++
        }

        console.log(this.arr)
    }

    isEmpty() {
       return this.arr.length === 0  
    }

    print() {
        return this.item.toString()
    }
}


// let stack1 = new Stack()
// stack1.arrToStack([1,2,3,4,5])
// stack1.push(6)
// stack1.push(7)
// stack1.push(8)
// console.log(stack1.pop())
// console.log(stack1);
// console.log(stack1.peack())
// console.log(stack1.toString())


// console.log(stack1.isEmpty());


// stack using linked list 

class Node {
    constructor(data) {
    this.data = data,
    this.next = null
    }
}

class StackList {

    constructor() {
        this.head = null,
        this.size = 0
    }

    push(value) {
       
        let newNode = new Node(value)
        
        if(this.head){
            newNode.next = this.head
        }

        this.head = newNode
        this.size ++

    }

    pop() {
    
    if(this.isEmpty()) return "stack is empty"
    
    const poppedNode = this.head.data
    this.head = this.head.next
    this.size --

    console.log('popped stak', this.head,'popped value is :',poppedNode)

    }

    peek () {
         if(this.isEmpty()) return 'stack is empty'
         
         return this.head.data
    }

    isEmpty() {
        return this.size ===0
        
    }

    print() {
       if(this.isEmpty()) return 'stack is empty'

       let curr = this.head
       while(curr){
        console.log(curr.data)
        curr = curr.next
       }
    }


}


let linkStack1 = new StackList() 
linkStack1.push(1)
linkStack1.push(2)
linkStack1.push(3)
linkStack1.push(4)

console.log(linkStack1);

// console.log(linkStack1.isEmpty());
linkStack1.pop()
console.log(linkStack1.peek())
linkStack1.print()

