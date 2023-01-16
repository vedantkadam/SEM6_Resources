// protected
class emp {
    private empName: string;
    protected empCode: number;

    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;

    }
}
class subEmp extends emp {
    private sal: number;

    constructor(name: string, code: number, sal: number) {
        super(name, code);
        this.sal = sal;
    }

}
let empp = new subEmp('allan', 12, 2000);
empp.empName = 'allan';
empp.empCode = 10;