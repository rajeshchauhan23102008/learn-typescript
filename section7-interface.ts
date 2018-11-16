namespace InterfaceExample {
    console.log('Interface');

    interface IPerson {
        name: string;
        age: number;
        [placeholderPropName: string]: any;

        welcome(codename: string): void;
    }

    class Employee implements IPerson {
        name: string = '';
        age: number = 0;
        hobbies: string[] = [''];

        companyName?: string;

        welcome(codename: string): void {
            console.log('hi ' + this.name + ' your code name is ' + codename);
            console.log('You worked with ' + this.companyName + ' :)');

            console.log(this.hobbies);
        }
    }

    const mpoweremp = new Employee();
    mpoweremp.name = 'Amit Mishra';
    mpoweremp.age = 38;
    mpoweremp.hobbies = ['sports', 'cooking', 'music'];

    mpoweremp.welcome('Entertaining');

    mpoweremp.companyName = 'Mpower';

    mpoweremp.welcome('Rohini');

    console.log(mpoweremp);


    function employeeOnboard(emp: IPerson): void {
        console.log(emp);
    }

    const johnsonEmp = new Employee();

    johnsonEmp.name = 'Sachin Singla';
    johnsonEmp.age = 40;
    johnsonEmp.companyName = 'Johnson Control';
    johnsonEmp.welcome('Dominant Submissive');

    employeeOnboard(johnsonEmp);

    const net4emp = {
        name: 'Pankaj Shukla',
        age: 42,
        projectName: 'VOIP',
        welcome: function (codename: string) {
            console.log('YOur code name is ' + codename);
        },

    }

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

    interface IFunc {
        (value1: number, value2: number): number;
    }

    let mySumFunc: IFunc;
    mySumFunc = function (num1: number, num2: number): number {
        return num1 + num2;
    }

    console.log(mySumFunc(30, 20));

    let myMultiplyFunc: IFunc;
    myMultiplyFunc = (no1: number, no2: number): number => { return no1 * no2; };

    console.log(myMultiplyFunc(5, 6));

    const gloSum: IFunc = function (val1: number, val2: number): number {
        return val1 + val2;
    }

    console.log(gloSum(33, 44));


    /* Interface Inheritance */

    console.log('Interface Inheritance');

    interface IBusinessman extends IPerson {
        businessType: string,
        revenue: number

        balancesheet(grossincome: number): void;
    }

    const rajeshBusiness: IBusinessman = {
        age: 22,
        name: 'Rajesh Chauhan',
        businessType: 'software',
        revenue: 590,
        welcome(cname: string) { console.log('your code name is ' + cname); },
        balancesheet(gincome: number) {
            console.log('your grossincome is Rs ' + gincome +
                ' and your revenue is Rs ' + this.revenue);
        }
    }

    console.log(rajeshBusiness);
    rajeshBusiness.welcome('snail');
    rajeshBusiness.balancesheet(34);

    console.log(rajeshBusiness);


}

