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
