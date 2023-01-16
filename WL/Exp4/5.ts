class companyy {
    protected cName: string;
    constructor(cName: string) {
        this.cName = cName;

    }
}

class employeee extends companyy {
    empName: string;
    empCode: number;

    constructor(cName: string, empName: string, empCode: number) {
        super(cName)
        this.empCode = empCode;
        this.empName = empName;
    }
    profile() {
        console.log(`company name: ${this.cName}`);
        console.log(`emp name: ${this.empName}`)
        console.log(`emp Code: ${this.empCode}`)

    }

}
let aa = new employeee('allan', 'jimmy', 99);
aa.empName = 'Allannn';
aa.empCode = 25;