//Practice Questions ==>

/* Qs. You are creating a Website for your college.Create a class User with 2 Properties,name &
       email.It also has a method called ViewData() that allows user to view Website data.
*/

let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data =", DATA);
    }
}

let student1 = new User("Rahul", "abc@email.com");
let student2 = new User("aman", "aman@email.com");

let teacher1 = new User("Dean", "dean@college.com");


/*  Qs Create a new class called Admin which inherits from User.Add a new method called
       editData to Admin that allows it to edit website data.
*/

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = " some new value";
    }
}

let admin1 = new Admin("admin", "admin@college.com");








