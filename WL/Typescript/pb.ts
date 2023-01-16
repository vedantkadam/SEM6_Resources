class staff {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    code(): void {
        console.log("Coding:" + this.name)
    }
}
class teacher extends staff {
    subject(): void {
        console.log("Teaching")
    }
}
class office extends teacher {
    constructor(name: string) {
        super(name)
        console.log(`My name is ${name} `)
    }
    grade(): void {
        console.log("office")
    }
}
let example = new office("Allan");
example.code();
example.subject();
example.grade();

