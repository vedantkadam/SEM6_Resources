class calculatorr {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    addition() {
        console.log(this.x + this.y)
    }
}
let cal = new calculatorr(6, 9); //public method of class cal is accessible using instance
cal.addition();
