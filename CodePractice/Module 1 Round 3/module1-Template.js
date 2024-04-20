//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500062       Name: Pootorn Phetyotha
class EmployeeManager {
  constructor() {
    this.employees = [];
  }

  addEmployee(name, position) {
    const existingEmployee = this.employees.find(
      (emp) => emp.name.toLowerCase() === name.toLowerCase()
    );
    if (existingEmployee) {
      return null; // Employee already exists
    }

    const id = this.employees.length + 1; // Generating unique id
    const newEmployee = { id, name, position };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  removeEmployee(id) {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index === -1) {
      return false; // Employee not found
    }
    this.employees.splice(index, 1);
    return true;
  }

  findEmployeeByName(name) {
    const matchingEmployees = this.employees.filter(
      (emp) => emp.name.toLowerCase() === name.toLowerCase()
    );
    return matchingEmployees;
  }

  sortEmployeeByName() {
    this.employees.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  updateEmployee(employee) {
    const index = this.employees.findIndex((emp) => emp.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  promoteEmployee(id, newPosition) {
    const employee = this.employees.find((emp) => emp.id === id);
    if (employee) {
      employee.position = newPosition;
      console.log(`${employee.name} has been promoted to ${newPosition}`);
      return true;
    }
    return false;
  }
}

// Example usage:
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); // Adds and logs new employee
console.log(manager.addEmployee("Jane Doe", "Designer")); // Adds and logs new employee
console.log(manager.findEmployeeByName("John Doe")); // Finds and logs John Doe
manager.sortEmployeeByName(); // Sorts employees by name
console.log(manager.employees); // Logs sorted employees
manager.promoteEmployee(1, "Senior Developer"); // Promotes John Doe to Senior Developer
console.log(manager.employees); // Logs employees to see the updated position of John Doe
