const student = {
    fullName : "Shradha Khapra",
    marks : 94.4,
    printMarks : function() {
        console.log("The marks are ", this.marks);
    },
};

const employee = {
    calTax() {
        console.log("The tax rate is 10%");
    },

    // calTax2 : function() {
    //     console.log("The tax rate is 10%");
    // }
}

const karanArjun = {
    salary : 50000,
    calTax() {
        console.log("The tax rate is 20%")
    }
}

karanArjun.__proto__ = employee; // now it can acess the methods of employee

class ToyotaCar {

    constructor(brand, mileage) {
        console.log("Creating new Object");
        this.brand = brand,
        this.mileage = mileage
    }

    start() {
        console.log("Start The Car");
    }

    stop() {
        console.log("Stop The Car");
    }

    // setBrand(brand) {
    //     this.brandName = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner", 12);
console.log(fortuner);
// fortuner.setBrand("fortuner");

let lexus = new ToyotaCar("lexus", 10);
console.log(lexus);
// lexus.setBrand("lexus");

class Person {
    constructor(name){
        this.species = "homo sapiens",
        this.name = name
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep")
    }

    work() {
        console.log("Do nothing");
    }
}

class Engineer extends Person{
    
    constructor(name) {
        super(name);
    }
    
    work() {
        console.log("solve Problem, Build Anything");
    }
}

class Doctor extends Person{
    work() {
        console.log("Treat Patient");
    }
}

let shradhaObj = new Engineer("shradha");
console.log(shradhaObj);

// Que - 1
// You are creating a website for your college. Create a class user with 2 properties
// name & email. It also has a method called viewData() that allows user to view 
// website data

// Que - 2
// Create a new Class called Admin which inherits from User. Add a new method called edit 
// Data to admin that allows it to edit website data.

let data = "Secrete Information";
class User{
    constructor(name, email){
        this.name = name,
        this.email = email
    }

    viewData() {
        console.log("Data - ",data);
    }

}

let stu1 = new User("tejas", "tejas@gmail.com");
let stu2 = new User("tejas1", "tejas1@gmail.com");


class Admin extends  User{
    constructor(name, email){
        super(name, email);

    }

    editData() {
        data = "Some new Value";
        console.log("Data = ",data)
    }
}

let admin1 = new Admin("shradha", "shradha@gmail.com");