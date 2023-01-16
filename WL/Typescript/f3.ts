class animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sleep(): void {
        console.log("sleeping")
    }
}
class bird extends animal {

    constructor(name: string) {
        console.log("sleeping1")
        super(name)
    }
}
class hen extends bird {
    constructor(name: string) {
        console.log("sleeping2")
        super(name)
    }
}
let heena = new hen("sfit");
// heena.eat();
// heena.fly();
// heena.sleep();