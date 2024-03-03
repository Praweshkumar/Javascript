                                           // Classes and objects...//


   /*               //...Objects in Js...//

     Prototypes in Js ==> A javascript object is an entity having state and behaviour
                            (properties and method).
       Js objects have a special property called prototype.
       We can set prototype using__proto__    
       
       **if object & prototype have same method,objects methods will be used.

   */

  /*                 //...Classes in Js...//
  
    Class is a program-code template for creating objects.
    Those objects will have some state(variables)& some behaviour(functions) inside it.

    class Myclass{
        constructor(){...}
        Mymethod(){...}
    }
    let myObj =new MyClass();    //for objects creates inside class
  
                  //...Constructor..//

   Constructor()method is: 1)automatically invoked by new
                           2) initializes object
                           
                           class MyClass{
                            constructor(){...}
                            myMethod(){...}
                           }

  
                  //..Inheritance..//

    Inheritance is passing down properties & methods from parent class  to child class .
    
    class Parent{

    }
    class Child extends Parent{

    }

    **If child & Parent have some method,child's method will be used.[Method Overriding]
  
                    //..Super Keyword..//

    The super keyword is used to call the constructor of its parent class to access the parent's
    properties and methods.
    
    super(args)  //calls Parent's constructor

    super.parentMethod(args)

      
                 //..Error handling..//
  
     try-catch
                
     try{
         ...normal code
     }catch(err){   //err is err object
        ...handling error
     }     


  */





























