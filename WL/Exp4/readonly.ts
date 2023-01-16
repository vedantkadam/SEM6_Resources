// readonly

class worker {
    empName: string;
    empCode: number;

    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
}
let e = new worker('allan', 20)
e.empName = 'shyam';
e.empCode = 20;