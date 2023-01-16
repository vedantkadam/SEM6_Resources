class student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    submit(): void {
        console.log("does submission");
    }
}
class s1 extends student {

    read(): void {
        console.log(`does reading: ${this.name}`)
    }
}

let s2 = new s1("Allan");
s2.read();
s2.submit();