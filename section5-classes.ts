/* SECTION 5 - CLASSES */

console.log('classes demo!!!');

class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string) {
        this.name = name;
        this.type = 'sportsman';
        this.age = 35;
    }

    public SetType(typedata: string): void {
        this.type = typedata;
        console.log(this.type);
        this.showage();
    }
    //Private Function.
    private showage() {
        console.log(this.age);
    }
}

const person = new Person('Rajesh', 'rajeshc11');
console.log(person);

person.SetType('Bad Boy!!!');

/* INHERITANCE */

console.log('INHERITANSE using EXTENDS Keyword')

class RajeshPerson extends Person {
    name = 'suresh';

    constructor(username: string) {
        super(name, username);
        this.age = 40;
        console.log('Inherited class constructor called!!!');
    }

}

const myPerson = new RajeshPerson('sachin-username');
console.log(myPerson);

/* Property Getter & Setters */
console.log('Property Getter & Setter!!!');

class Plant {
    private _type: string = 'default';

    PI: number = 3.14;

    get type() {
        return this._type;
    }

    set type(value: string) {
        if (value.length > 3) {
            this._type = value;
        }
    }
}

const myPlant = new Plant();
console.log(myPlant);
myPlant.type = 'abc';
console.log(myPlant);
myPlant.type = 'Green Plant';
console.log(myPlant);

/* Static Properties & Functions */

console.log('Static Properties & Functions!!!');

class Helper {
    static PI: number = 3.14;

    static drawCircumference(diameter: number) {
        return diameter * this.PI;
    }
}

console.log(Helper.PI);
console.log(Helper.drawCircumference(5));

/* Abstract Class */

console.log('Abstract Class');

abstract class Project {
    name: string = 'Default';
    budget: number = 1000;

    abstract changeProjectName(param: string): void;

    increaseBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeProjectName(param: string) {
        this.name = param;
    }
}

const itproj = new ITProject();
console.log(itproj);

itproj.changeProjectName('ITProject');
console.log(itproj);

/* Private Constructor and Singleton Pattern */

console.log('Private Constructor and Singleton Pattern');

class mySingletonClass {

    private static _instance: mySingletonClass;

    private constructor(name: string) {
        this.name = name;
    }

    readonly name: string = 'default';

    static getInstance(name: string): mySingletonClass {

        if (!this._instance) {
            this._instance = new mySingletonClass(name);
        }

        return this._instance;
    }
}

const mySingleObject = mySingletonClass.getInstance('wallet');

console.log(mySingleObject);

//mySingletonObject.name = 'bank';

const mySecondObject = mySingletonClass.getInstance('bank');

console.log(mySecondObject);

/* Module Exercise */

console.log('Module Exercise');

/*
// Exercise 1
function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

*/

console.log('Exercise 1 - Simple Class Creation');

class Car {
    private name: string;
    private acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() { console.log('Tooooooooot!'); }

    accelerate(speed: number) { this.acceleration = this.acceleration + speed; }

}

const car = new Car('Audi');
car.honk();

console.log(car);
car.accelerate(10);
console.log(car);


/* 

// Exercise 2
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());


*/


console.log('Exercise 2 - Class Inheritance');

class BaseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObject {
 
    calcSize(): number {
        return this.width * this.length;
    }
}

const rectangleObject = new Rectangle();

rectangleObject.width = 5;
rectangleObject.length = 8;
console.log(rectangleObject.calcSize());


/*

// Exercise 3
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);

*/

console.log('Exercise 3 - Gettter & Setter Properties!!!')
class Employee {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = '';
        }
    }
}

const emp = new Employee();

console.log(emp.firstName);
emp.firstName = 'Raj';
console.log(emp.firstName);
emp.firstName = 'Rajesh Chauhan';
console.log(emp.firstName);

