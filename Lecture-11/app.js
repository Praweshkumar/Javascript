//..objects &prototype..//

const student = {
    fullName: "Rajesh",
    marks: 92.4,
    printMarks: function () {
        console.log("marks is:", this.marks);
    },

};

const employee = {
    calcTax() {    //generally we use this methods
        console.log("Tax rate is 10%");
    },
    // calcTax2: function(){     // 2nd methods to define function both are correct
    //     console.log("Tax rate is 10%");  
    // },
};

const karanArjun = {
    salary: 5000,
    calcTax() {
        console.log("Teaxt rate is 20%")
    }
}
// const karanArjun1= {
//     salary:5000,
// }
// const karanArjun2= {
//     salary:5000,
// }
// const karanArjun3= {
//     salary:5000,
// }
// const karanArjun4= {
//     salary:5000,
// }

karanArjun.__proto__ = employee;
// karanArjun1.__proto__ =employee;
// karanArjun2.__proto__ =employee;
// karanArjun3.__proto__ =employee;
// karanArjun4.__proto__ =employee;

// ______________________________________________________________________________________________________________________________

//...Classes...//

class ToyotaCar {
    constructor(brand, milege) {
        console.log("creating new object");
        this.brand = brand;
        this.milege = milege;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop")
    }
    // setBrand(brand){
    //     this.brandName =brand;
    // }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);
// lexus.setBrand("lexus");


//...Inheeritance...//

//   class Parent{
//     hello(){
//         console.log("hello");
//     }
//   }                                    

// class Child extends Parent{

// }

// let obj= new Child();

//__________________________________________________________________________________________________________________________
class Person {
    constructor() {
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("Sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log("solved problems, build Something");
    }
}
class Doctor extends Person {
    work() {
        console.log("treat patients")
    }

}

let praweshObj = new Engineer();

// ____________________________________________________________________________________________________________________________

//..Super keyword..//

// class Person {
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log(eat);
//     }
// }

// class Engineer extends Person {
//     constructor(name) {
//         super(name);  // to invoke parent class constructor
//     }
//     work() {
//         super.eat();
//         console.log("solved problems,build something");

//     }
// }
// let engobj = new Engineer("prawesh");

  
                 //...Error handling...//

 let a=6;
 let b=10;
 console.log("a =",a);
 console.log("b =",b);
 console.log("a+b =",a+b);
 try{
 console.log("a-b =",a+c); //error occured we will error handling methods
 }catch(err){
  console.log(err);
 }
 console.log("a*b =",a*b);
 console.log("a/b =",a/b);                
 console.log("a%b =",a%b);                
 console.log("a**b =",a**b); 
 
 
// **__________________________________________________________________________________________**

















































