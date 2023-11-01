/*
Filename: complexCode.js
Content: A Complex Employee Management System

This code is a sophisticated and elaborate Employee Management System that utilizes various JavaScript concepts and principles such as object-oriented programming, arrays, functions, and more. It provides functionality to add employees, calculate salaries, and display employee information.

*/

// Employee class
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getInfo() {
    return `Employee: ${this.name}\nPosition: ${this.position}\nSalary: ${this.salary}\n`;
  }
}

// Array to store employee objects
const employees = [];

// Function to add employees
function addEmployee() {
  const name = prompt("Enter employee name:");
  const position = prompt("Enter employee position:");
  const salary = parseFloat(prompt("Enter employee salary:"));

  const employee = new Employee(name, position, salary);
  employees.push(employee);
}

// Function to calculate total salary
function calculateTotalSalary() {
  let totalSalary = 0;

  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }

  return totalSalary;
}

// Function to display employee information
function displayEmployeeInfo() {
  console.log("Employee Information:\n");

  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].getInfo());
  }
}

// Main menu
function mainMenu() {
  let choice;

  do {
    console.log("======== Employee Management System ========");

    console.log("1. Add Employee");
    console.log("2. Calculate Total Salary");
    console.log("3. Display Employee Information");
    console.log("4. Exit");

    choice = parseInt(prompt("Enter your choice:"));

    switch (choice) {
      case 1:
        addEmployee();
        break;
      case 2:
        const totalSalary = calculateTotalSalary();
        console.log(`Total Salary: $${totalSalary.toFixed(2)}`);
        break;
      case 3:
        displayEmployeeInfo();
        break;
      case 4:
        console.log("Exiting...");
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  } while (choice !== 4);
}

// Start the program
mainMenu();
