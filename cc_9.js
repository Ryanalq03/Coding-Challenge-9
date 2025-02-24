//Coding Challenge 9

//Task 1 HR System

//Creates class Emlpoyee with properties
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary
    }

    //Adding way to show employee information as string
    getDetails () {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    //Method to calculate annual employee salary 
    calculateAnnualSalary() {
            return this.salary * 12;
    }
}

//Test Case
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

//Logging results to console
console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());

//Task 2 Manager Class

//Creates a manager class and extends employee class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
}

//Overrides getDetails to include team size
getDetails() {
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
}

//Method that calculates 10% of manager's salary
calculateBonus() {
    return this.calculateAnnualSalary(this.salary) * 0.1;
}
}

//Test Case
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

//Logs results to console
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

//Task 3 Company Class

//Created Company class with string and array
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];       
    }

//Method to add new employee to array
addEmployee (employee) {
    this.employees.push(employee)
}

//Method to log employee details 
listEmployees() {
    this.employees.forEach(employee => {
        console.log(employee.getDetails());
    });
}
}

//Test Case
const company = new Company("TechCorp");

company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();