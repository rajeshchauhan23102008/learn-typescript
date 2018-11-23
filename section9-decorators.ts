/* Decorators in TypeScript */

console.log('Decorators in TypeScript');

//Class Decorator Example.
console.log('');
console.log('Class Decorator Example');

namespace decorators {

    //Class Decorator
    function logged(constructorFunc: Function) {
        console.log(constructorFunc);
    }
    
    @logged
    class Person {
        constructor() {
            console.log('Hi from Person Class');
        }
    }

    const rajesh = new Person();

    //Factory Decorator.
    function logging(value: boolean): any {
        return value ? logged : null;
    }

    @logging(true)
    class Car {

    }

    // Advanced or More useful class decorator with good usage logic.
    function extensible(constructorFun : Function) {
        constructorFun.prototype.print = function () {
            console.log('Print function is added to this class using Decorator Feature');
            console.log(this);
        }
    }

    @extensible
    class Auth {
        username: string;

        constructor(username: string) {
            this.username = username;
        }

        login() {
            console.log(this.username + ' has been successfully logged in!!!');
        }
    }

    const authService = new Auth('rajesh');

    (<any>authService).print();
    authService.login();
    
    //Function Decorator.
    function writeable(value: boolean) {
        return function(target: any, propName: string, descriptor: PropertyDescriptor) {
            descriptor.writable = value;
        }
    }

    @logged
    class Project {
        projectName: string;

        constructor(projectName: string) {
            this.projectName = projectName;
        }

        //@writeable(false)
        @writeable(true)
        calcBudget() {
            console.log('Default Budget is 1000');
        }

    }

    const softProject = new Project('Notification Project');
    console.log(softProject);
    softProject.calcBudget();

    softProject.calcBudget = function () {
        console.log('Budget is now changed to 2000 by altering the function');
    }

    softProject.calcBudget();

    // Parameter Decorator
    function paramInfo(target: any, method: string, propIndex: number){
        console.log('Parameter Decorator Executed, here is the Output');
        console.log(target);
        console.log(method);
        console.log(propIndex);
    }

    // Property Decorator.    
    function editable(value: boolean): Function {
        return function (target: any, propName: string) {
            const propertyDescriptor: PropertyDescriptor = {
                writable: value
            };

            return propertyDescriptor;
        }
    }    
    
    class Plant {
        @editable(true)
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        printAll(mode: string, @paramInfo noOfStudents: number) {
            console.log(noOfStudents);
        }
    }

    const greenPlant = new Plant('Cactus Green Plant');
    greenPlant.printAll('anything',3000);
    console.log(greenPlant);


}