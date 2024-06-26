// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  employeesArray = [];
  firstName = 'Jeri';
  lastName = 'Gulsby';
  salary = 34600;
  addEmployee(firstName, lastName, salary);

  firstName = 'Joe';
  lastName = 'Hills';
  salary = 14000;
  addEmployee(firstName, lastName, salary);

  firstName = 'Shana';
  lastName = 'Smith';
  salary = 45789;
  addEmployee(firstName, lastName, salary);

  firstName = 'Sally';
  lastName = 'Hansen';
  salary = 36976;
  addEmployee(firstName, lastName, salary);

  firstName = 'Zach';
  lastName = 'Miller';
  salary = 35984;
  addEmployee(firstName, lastName, salary);

  firstName = 'Matthew';
  lastName = 'Jones';
  salary = 37800;
  addEmployee(firstName, lastName, salary);

  firstName = 'Raj';
  lastName = 'Patel';
  salary = 41500;
  addEmployee(firstName, lastName, salary);

  return employeesArray;
};

const addEmployee = (_firstName, _lastName, _salary) => {
  const newEmployee = {
    id: employeesArray.length + 1,
    firstName: _firstName,
    lastName: _lastName,
    salary: _salary,
  };
  employeesArray.push(newEmployee);
};

// Display the average salary
const displayAverageSalary = function (_employeesArray) {
  totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  averageSalary = totalSalary / employeesArray.length;
  console.log('Average Salary', averageSalary.toFixed("en-US", { style: "currency", currency: "USD" }));
};

// Select a random employee
const getRandomEmployee = function (_employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log('Congratulations to Random Employee:', randomEmployee.firstName, randomEmployee.lastName);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  employeesArray.forEach(function (currentEmployee) {

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.appendChild(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency", currency: "USD"
    });

    newTableRow.appendChild(salaryCell);

    employeeTable.appendChild(newTableRow);
  })
};


const trackEmployeeData = function () {

  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('============================');

  getRandomEmployee(employees);

  console.log('==============================');

  sortEmployeesByLastName();
};

const sortEmployeesByLastName = function () {
  const employees = employeesArray.sort(function (a, b) {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  });


  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
