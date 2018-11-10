"use strict";
/* SECTION 5 - CLASSES */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('classes demo!!!');
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
        this.type = 'sportsman';
        this.age = 35;
    }
    Person.prototype.SetType = function (typedata) {
        this.type = typedata;
        console.log(this.type);
        this.showage();
    };
    //Private Function.
    Person.prototype.showage = function () {
        console.log(this.age);
    };
    return Person;
}());
var person = new Person('Rajesh', 'rajeshc11');
console.log(person);
person.SetType('Bad Boy!!!');
/* INHERITANCE */
console.log('INHERITANSE using EXTENDS Keyword');
var RajeshPerson = /** @class */ (function (_super) {
    __extends(RajeshPerson, _super);
    function RajeshPerson(username) {
        var _this = _super.call(this, name, username) || this;
        _this.name = 'suresh';
        _this.age = 40;
        console.log('Inherited class constructor called!!!');
        return _this;
    }
    return RajeshPerson;
}(Person));
var myPerson = new RajeshPerson('sachin-username');
console.log(myPerson);
/* Property Getter & Setters */
console.log('Property Getter & Setter!!!');
var Plant = /** @class */ (function () {
    function Plant() {
        this._type = 'default';
        this.PI = 3.14;
    }
    Object.defineProperty(Plant.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (value.length > 3) {
                this._type = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var myPlant = new Plant();
console.log(myPlant);
myPlant.type = 'abc';
console.log(myPlant);
myPlant.type = 'Green Plant';
console.log(myPlant);
/* Static Properties & Functions */
console.log('Static Properties & Functions!!!');
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.drawCircumference = function (diameter) {
        return diameter * this.PI;
    };
    Helper.PI = 3.14;
    return Helper;
}());
console.log(Helper.PI);
console.log(Helper.drawCircumference(5));
/* Abstract Class */
console.log('Abstract Class');
var Project = /** @class */ (function () {
    function Project() {
        this.name = 'Default';
        this.budget = 1000;
    }
    Project.prototype.increaseBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeProjectName = function (param) {
        this.name = param;
    };
    return ITProject;
}(Project));
var itproj = new ITProject();
console.log(itproj);
itproj.changeProjectName('ITProject');
console.log(itproj);
/* Private Constructor and Singleton Pattern */
console.log('Private Constructor and Singleton Pattern');
var mySingletonClass = /** @class */ (function () {
    function mySingletonClass(name) {
        this.name = 'default';
        this.name = name;
    }
    mySingletonClass.getInstance = function (name) {
        if (!this._instance) {
            this._instance = new mySingletonClass(name);
        }
        return this._instance;
    };
    return mySingletonClass;
}());
var mySingleObject = mySingletonClass.getInstance('wallet');
console.log(mySingleObject);
//mySingletonObject.name = 'bank';
var mySecondObject = mySingletonClass.getInstance('bank');
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
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () { console.log('Tooooooooot!'); };
    Car.prototype.accelerate = function (speed) { this.acceleration = this.acceleration + speed; };
    return Car;
}());
var car = new Car('Audi');
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
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangleObject = new Rectangle();
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
console.log('Exercise 3 - Gettter & Setter Properties!!!');
var Employee = /** @class */ (function () {
    function Employee() {
        this._firstName = '';
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee();
console.log(emp.firstName);
emp.firstName = 'Raj';
console.log(emp.firstName);
emp.firstName = 'Rajesh Chauhan';
console.log(emp.firstName);
