class EmployeeManager {
  constructor() {
    this.employees = [];
  }

  addEmployee(name, position) {
    // Check if an employee with the same name already exists
    const existingEmployee = this.employees.find(
      (emp) => emp.name.toLowerCase() === name.toLowerCase()
    );
    if (existingEmployee) {
      return null; // Employee already exists
    }

    // Generate unique ID
    const id =
      this.employees.length > 0
        ? this.employees[this.employees.length - 1].id + 1
        : 1;

    // Create new employee object
    const newEmployee = {
      id: id,
      name: name,
      position: position,
    };

    // Add new employee to the array
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
    // Case-insensitive search
    return this.employees.filter(
      (emp) => emp.name.toLowerCase() === name.toLowerCase()
    );
  }

  sortEmployeeByName() {
    console.log("Before sorting:", this.employees);
    this.employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log("After sorting:", this.employees);
  }

  updateEmployee(employee) {
    const index = this.employees.findIndex((emp) => emp.id === employee.id);
    if (index !== -1) {
      // Update the employee
      this.employees[index] = employee;
    }
  }

  promoteEmployee(id, newPosition) {
    const employee = this.employees.find((emp) => emp.id === id);
    if (employee) {
      employee.position = newPosition;
      console.log(`Promotes ${employee.name} to ${newPosition}`);
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
