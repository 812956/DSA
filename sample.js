

// class Node {

//     constructor(data,next) {
//         this.data = data,
//         this.next = null
//     }

// }

// class LinkedList {

//     constructor() {
//         this.head = null,
//         this.size = 0
//     }


//     append(data){
//         let newNode = new Node(data)
        
//         if(this.head === null) {
//             this.head = newNode
//             this.size = this.size+1
//             return
//         }
        
//         let cur= this.head
          
//         while(cur.next){
          
//            cur = cur.next
//         }

//         cur.next = newNode
//         this.size = this.size+1
//     }


//     deleteNthNode(n){

//         if(n===0){
//             console.log('please put the deleting value correctly from 1 ');
//             return
//         }

//         if(!this.head ) return this.head

//         if(this.head && this.head.next && n ===1) {
//            this.head = this.head.next

//            return this.head
//         }

//         if(n===1){
//             this.head = null
//         }

//         let cur = this.head
//         let count = 1

//         while(cur && count< n-1) {
//             cur = cur.next
//             count ++
//         }

//         if(cur && cur.next) {
//             console.log('entered to delete the node',cur.next.next);
//             cur.next = cur.next.next
//         }else {
//             console.log('no node found');
//         }
        

//     }


//     print() {
//         let curr = this.head
        
//         while(curr){
            
//             console.log(curr.data)
//             curr = curr.next

//         }
//     }

//     reverse() {
//         let curr = this.head
//         let next = null
//         let prev = null

//         while(curr){
//             next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }

//         this.head = prev
//     }

// }

// let list = new LinkedList()

// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);

// console.log("Original List:");
// list.print();

// list.deleteNthNode(0);

// console.log("List after removing 3rd node from the start:");
// list.print();

// console.log(list.head)
// console.log(list.size)



