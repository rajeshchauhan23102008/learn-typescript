"use strict";
var InterfaceExample;
(function (InterfaceExample) {
    console.log('Interface');
    var Employee = /** @class */ (function () {
        function Employee() {
            this.name = '';
            this.age = 0;
            this.hobbies = [''];
        }
        Employee.prototype.welcome = function (codename) {
            console.log('hi ' + this.name + ' your code name is ' + codename);
            console.log('You worked with ' + this.companyName + ' :)');
            console.log(this.hobbies);
        };
        return Employee;
    }());
    var mpoweremp = new Employee();
    mpoweremp.name = 'Amit Mishra';
    mpoweremp.age = 38;
    mpoweremp.hobbies = ['sports', 'cooking', 'music'];
    mpoweremp.welcome('Entertaining');
    mpoweremp.companyName = 'Mpower';
    mpoweremp.welcome('Rohini');
    console.log(mpoweremp);
    function employeeOnboard(emp) {
        console.log(emp);
    }
    var johnsonEmp = new Employee();
    johnsonEmp.name = 'Sachin Singla';
    johnsonEmp.age = 40;
    johnsonEmp.companyName = 'Johnson Control';
    johnsonEmp.welcome('Dominant Submissive');
    employeeOnboard(johnsonEmp);
    var net4emp = {
        name: 'Pankaj Shukla',
        age: 42,
        projectName: 'VOIP',
        welcome: function (codename) {
            console.log('YOur code name is ' + codename);
        },
    };
    net4emp.welcome('Sticky');
    employeeOnboard(net4emp);
    // Direct object value do not work if it contains any parameter that is not available
    // in Interface Type. So below code will not work
    // employeeOnboard({
    //     name: 'Pankaj Shukla',
    //     age: 42,
    //     projectName: 'VOIP',        //This line will not work since 'projectName' is not the part of interface parameters.
    //     welcome : function(codename: string) {
    //         console.log('YOur code name is ' + codename);
    //     }
    // });
    console.log('Arrow Function in Interface');
    var mySumFunc;
    mySumFunc = function (num1, num2) {
        return num1 + num2;
    };
    console.log(mySumFunc(30, 20));
    var myMultiplyFunc;
    myMultiplyFunc = function (no1, no2) { return no1 * no2; };
    console.log(myMultiplyFunc(5, 6));
    var gloSum = function (val1, val2) {
        return val1 + val2;
    };
    console.log(gloSum(33, 44));
    /* Interface Inheritance */
    console.log('Interface Inheritance');
    var rajeshBusiness = {
        age: 22,
        name: 'Rajesh Chauhan',
        businessType: 'software',
        revenue: 590,
        welcome: function (cname) { console.log('your code name is ' + cname); },
        balancesheet: function (gincome) {
            console.log('your grossincome is Rs ' + gincome +
                ' and your revenue is Rs ' + this.revenue);
        }
    };
    console.log(rajeshBusiness);
    rajeshBusiness.welcome('snail');
    rajeshBusiness.balancesheet(34);
    console.log(rajeshBusiness);
})(InterfaceExample || (InterfaceExample = {}));
