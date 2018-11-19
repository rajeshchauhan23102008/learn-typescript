/* Generic in Typescript */

namespace GenericExample {

    console.log('Javascript Any Type as a Simple Generic');

    function echo(data: any): any {
        return data;
    }

    console.log(echo('Any String Data'));
    console.log(echo(34));
    console.log(echo(true));

    // Simple Generic Function

    console.log('');
    console.log('TypeScript Generic Function Example')
    function betterEcho<T>(data: T): T {
        return data;
    }

    console.log(betterEcho<string>('Any String Data'));
    console.log(betterEcho<number>(34));
    console.log(betterEcho<boolean>(true));

    // In-built Generic Array.
    console.log('');
    console.log('In-built Generic Array.');

    const myList: Array<number> = [34, 67.8];

    myList.push(11);

    myList.forEach((item) => console.log(item));

    // for (let index = 0; index < myList.length; index++) {
    //     console.log(myList[index]);    
    // }

    console.log(myList);

    // Array of Generic Type.
    console.log('');
    console.log('Array of Generic Type.');

    console.log(genericArrayFunc);

    function genericArrayFunc<T>(args: T[]) {
        args.forEach((item) => console.log(item));
    }

    genericArrayFunc<string>(['apple', 'banana', 'oranges']);
    genericArrayFunc<number>([34, 55, 66]);
    // Use Generic Function as Type.

    console.log('');
    console.log('Use Generic Function as Type.');

    const myGenFunc: <T>(data: T) => T = betterEcho;

    console.log(myGenFunc);
    console.log(myGenFunc<string>('Generic String Function'));
    console.log(myGenFunc<number>(55));

    // Generic Classes.

    console.log('');
    console.log('Generic Classes');

    class MyMath<T> {
        sum?: (val1: T, val2: T) => T;
    }

    const myMathObj = new MyMath<number>();
    myMathObj.sum = function (v1: number, v2: number): number { return v1 + v2 };
    console.log(myMathObj.sum(2, 3));

    const myStringObj = new MyMath<string>();
    myStringObj.sum = (v1: string, v2: string): string => { return v1 + v2; };
    console.log(myStringObj.sum('Hello', ' Rajesh, You are doing great!!!'));

    // Generic Queue Example.
    console.log('');
    console.log('Generic Queue Example');

    class Queue<T> {
        private data: T[] = [];
        push = (item: T) => this.data.push(item);
        pop = () => this.data.shift();
    }

    const myFIFOQueue = new Queue<number>();

    myFIFOQueue.push(12);
    myFIFOQueue.push(45.44);
    myFIFOQueue.push(100);

    console.log(myFIFOQueue);

    console.log('Poppped Item is ' + myFIFOQueue.pop());

    console.log(myFIFOQueue);

    const myStringFIFOQ = new Queue<string>();
    myStringFIFOQ.push('rajesh');
    myStringFIFOQ.push('rohit');
    myStringFIFOQ.push('sachin');

    console.log(myStringFIFOQ);

    console.log('Pop item is ' + myStringFIFOQ.pop());

    console.log(myStringFIFOQ);

    // Generic Array Reverse Example with Constraints.

    console.log('');
    console.log('Generic Array Reverse Example.');

    class Utility {

        reverse<T extends number | string>(list: T[]): T[] {

            const returnVal: T[] = [];
            for (let i = list.length - 1; i >= 0; i--) {
                returnVal.push(list[i]);
            }

            return returnVal;
        }

        createCustomObject<Tkey, Tvalue>(custObj: { [key: string]: Tvalue }): {} {

            return custObj;
        }
    }

    const myUtil = new Utility();
    const numbers: number[] = [10, 30, 40];

    console.log('Original Number List', numbers);
    console.log('Reverse Number List', myUtil.reverse<number>(numbers));

    const names: string[] = ['raj', 'annu', 'babuu'];
    console.log(names);
    console.log(myUtil.reverse<string>(names));

    //This will throw error because of Generic Constraint.
    const switches: boolean[] = [true, false, false, true, false];
    console.log(switches);
    // console.log(myUtil.reverse<boolean>(switches)); 


    const myObj = myUtil.createCustomObject<string, string>({
        'name': 'rajesh',
        'age': '34'
    });

    console.log(myObj);


    /* Exercise : Generic */

    /*
   
    Let's keep it simple and only add the following methods to the Map:

    setItem(key: string, item: T) // should create a new key-value pair

    getItem(key: string) // should retrieve the value of the provided key
    clear() // should remove all key-value pairs
    printMap() // should output key-value pairs
    The map should be usable like shown below:

    const numberMap = new MyMap<number>();
    numberMap.setItem('apples', 5);
    numberMap.setItem('bananas', 10);
    numberMap.printMap();

    const stringMap = new MyMap<string>();
    stringMap.setItem('name', "Max");
    stringMap.setItem('age', "27");
    stringMap.printMap();

    */


    class MyMap<T> {

        private map: { [key: string] : T} = { };

        setItem(key: string, item: T) {
            // should create a new key-value pair
            this.map[key] = item;
        }

        getItem(key: string) {
            return this.map[key];
        }

        clear() {
            this.map = {};
        }

        printMap() {
            for (let itemKey in this.map) {
                console.log(itemKey, this.map[itemKey]);
            }
        }
    }

    const numberMap = new MyMap<number>();
    numberMap.setItem('apples', 5);
    numberMap.setItem('bananas', 10);
    console.log(numberMap.getItem('apples'));
    numberMap.printMap();

    numberMap.clear();
    numberMap.printMap();

    const stringMap = new MyMap<string>();
    stringMap.setItem('apples', 'rajesh');
    stringMap.setItem('bananas', 'anay');
    console.log(stringMap.getItem('bananas'));
    stringMap.printMap();

    stringMap.clear();
    stringMap.printMap();

}   