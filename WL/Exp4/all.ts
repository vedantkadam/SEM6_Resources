class Foo {
    private x: number;
    protected y: number;
    public z: number;
    saveData(foo: Foo): void {
        this.x = 1; // ok
        this.y = 1; // ok
        this.z = 1; // ok

        foo.x = 1; // ok 
        foo.y = 1; // ok 
        foo.z = 1; // ok
    }
}

class Bar extends Foo {
    getData(foo: Foo, bar: Bar) {
        this.y = 1; // ok
        this.z = 1; // ok

        bar.y = 1; // ok
        bar.z = 1; // ok
        foo.z = 1; // ok

        foo.x = 1; // Error, x only accessible within A 
        bar.x = 1; // Error, x only accessible within A 
        bar.y = 1; // Error, y only accessible through instance of B 
    }
}