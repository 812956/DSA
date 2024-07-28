

class Node {
     constructor(data){
        this.data = data,
        this.next = null
     }
}


class LinkedList {

    constructor() {
        this.head = null
    }

    append(data) {
        let newNode = new Node(data)

        if(!this.head){
           this.head = newNode
           return
        }

        let current = this.head
        while(current.next!==null){
            current = current.next
        }

        current.next = newNode 

    }


    prepend (data) {
       let newNode = new Node(data)
       newNode.next = this.head
   
    }


    delete(value){
        
        if(this.head ===null) {
            console.log('there is no value to delete')

        }


        if(this.head.data ===value){
            this.head = this.head.next
            if(this.head.next === null) console.log('there is no nodes anymore')
            return
        }


        let current = this.head

        while(current.next!==null && current.next.data !==value){
            current = current.next
        }  

    }

    print() {
      let cur = this.head
     
      while(cur){

        console.log(cur.data)
        cur= cur.next
         
      }
    }

    reverse() {

        let prev = null
        let current = this.head
        let next = null


        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
       
        if(this.head) {
            console.log(this.prev)
        }
        else {
            console.log('there is no value in this list to delete')
            return
        }
        
       

    }

    addArrayVal(arr) {
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
    }

}


let list = new LinkedList()
let list2 = new LinkedList()

let ar = [1,2,3,4]
let ar2 = [5,6,7,8,9]


list.addArrayVal(ar)
list.addArrayVal(ar2)




list.print()
// list2.print()


