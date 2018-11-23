"use strict";
/* Decorators in TypeScript */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('Decorators in TypeScript');
//Class Decorator Example.
console.log('');
console.log('Class Decorator Example');
var decorators;
(function (decorators) {
    //Class Decorator
    function logged(constructorFunc) {
        console.log(constructorFunc);
    }
    var Person = /** @class */ (function () {
        function Person() {
            console.log('Hi from Person Class');
        }
        Person = __decorate([
            logged
        ], Person);
        return Person;
    }());
    var rajesh = new Person();
    //Factory Decorator.
    function logging(value) {
        return value ? logged : null;
    }
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car = __decorate([
            logging(true)
        ], Car);
        return Car;
    }());
    // Advanced or More useful class decorator with good usage logic.
    function extensible(constructorFun) {
        constructorFun.prototype.print = function () {
            console.log('Print function is added to this class using Decorator Feature');
            console.log(this);
        };
    }
    var Auth = /** @class */ (function () {
        function Auth(username) {
            this.username = username;
        }
        Auth.prototype.login = function () {
            console.log(this.username + ' has been successfully logged in!!!');
        };
        Auth = __decorate([
            extensible
        ], Auth);
        return Auth;
    }());
    var authService = new Auth('rajesh');
    authService.print();
    authService.login();
    //Function Decorator.
    function writeable(value) {
        return function (target, propName, descriptor) {
            descriptor.writable = value;
        };
    }
    var Project = /** @class */ (function () {
        function Project(projectName) {
            this.projectName = projectName;
        }
        //@writeable(false)
        Project.prototype.calcBudget = function () {
            console.log('Default Budget is 1000');
        };
        __decorate([
            writeable(true)
        ], Project.prototype, "calcBudget", null);
        Project = __decorate([
            logged
        ], Project);
        return Project;
    }());
    var softProject = new Project('Notification Project');
    console.log(softProject);
    softProject.calcBudget();
    softProject.calcBudget = function () {
        console.log('Budget is now changed to 2000 by altering the function');
    };
    softProject.calcBudget();
    // Parameter Decorator
    function paramInfo(target, method, propIndex) {
        console.log('Parameter Decorator Executed, here is the Output');
        console.log(target);
        console.log(method);
        console.log(propIndex);
    }
    // Property Decorator.    
    function editable(value) {
        return function (target, propName) {
            var propertyDescriptor = {
                writable: value
            };
            return propertyDescriptor;
        };
    }
    var Plant = /** @class */ (function () {
        function Plant(name) {
            this.name = name;
        }
        Plant.prototype.printAll = function (mode, noOfStudents) {
            console.log(noOfStudents);
        };
        __decorate([
            editable(true)
        ], Plant.prototype, "name", void 0);
        __decorate([
            __param(1, paramInfo)
        ], Plant.prototype, "printAll", null);
        return Plant;
    }());
    var greenPlant = new Plant('Cactus Green Plant');
    greenPlant.printAll('anything', 3000);
    console.log(greenPlant);
})(decorators || (decorators = {}));
