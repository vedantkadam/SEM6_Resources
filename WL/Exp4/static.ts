// static

class home {
    static n: number = 2;
    static a(b: number) {
        console.log(this.n * b);
    }
    c(d: number) {
        console.log(this.n * d)
    }
}
home.n;
home.a(3); //static methods can be accessed using dot notations
home.c(4); //c is not static method 
let e1 = new home();
e1.c(6);