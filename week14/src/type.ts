type Employee = {
    name: string;
    setDate: string;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

let e: Employee = {
    name:"rinku",
    setDate: "01-10-01"
}

let m: Manager= {
    name:"rinku",
    department: "01-10-01"
}

let t: TeamLead = {
    name: "harkirat",
    setDate: "01-10-101",
    department: "mca"
}