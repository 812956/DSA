
// object litrels
let person = {
    first_name: 'junaid',
    last_name: 'mun',

    sayHello: function sayName (){
        return `My name is ${this.first_name,this.last_name}`
    },

    contact: {
        mobile : '123456',
        zip:65738
    }

}

// console.log(person.sayHello());
// console.log(PageTransitionEvent);


// object constructor

function Person(first_name,last_name){
    this.first_name = first_name,
    this.last_name = last_name
}


let person1 = new Person('junaid','salman')
// console.log('this is person One',person1);


// Object.create() method to create object

const coder = {
    isStudying: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I 
              studying?: ${this.isStudying}.`)
    }
}


const me = Object.create(coder)
me.name = 'junaid'
// me.printIntroduction()



// Class 


  class RealPerson {
        

    constructor(name,age,place){
    this.name = name,
    this.age = age,
    this.place = place
    }

    sayHello() {
    console.log('hello world howjfkjafskajfksdljj, My name is ' + this.name)
    }

  }


  let junaid = new  RealPerson('junaid',18,'kuthuparamba')

  console.log(junaid.name);
  junaid.sayHello()


  


