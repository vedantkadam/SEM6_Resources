// string type parameter  
function add(a: string, b: string): string;
// type parameter  
function add(a: number, b: number): number;
//Function Definition  
function add(a: any, b: any): any {
    return a + b;
}

console.log("Addition: " + add("Hello ", "Allan"));
console.log("Addition: " + add(60, 20));