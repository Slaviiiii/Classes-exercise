class Company {

  constructor() {
    this.departments = {};
    this.aveSalaries = {};
  }

  addEmployee(username, salary, position, department) {

    if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
      throw new Error('Invalid input!');
    }

    let user = {
      username: username,
      salary: salary,
      position: position
    };

    if (!this.departments.hasOwnProperty(department)) {

      this.departments[department] = [];

      this.aveSalaries[department] = {
        totalEmployees: 0,
        totalSalaries: 0,
        averageSalary: 0
      };
    }

    this.departments[department].push(user);
    this.aveSalaries[department].totalEmployees += 1;
    this.aveSalaries[department].totalSalaries += salary;

    this.aveSalaries[department].averageSalary =
      this.aveSalaries[department].totalSalaries /
      this.aveSalaries[department].totalEmployees;

    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {

    let result = '';
    let bestDepartment = Object
      .entries(this.aveSalaries)
      .sort((a, b) => b[1].averageSalary - a[1].averageSalary)
      .shift();

    result += `Best Department is: ${bestDepartment[0]}`;
    result += `\nAverage salary: ${bestDepartment[1].averageSalary.toFixed(2)}`;

    this.departments[bestDepartment[0]]
      .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

    this.departments[bestDepartment[0]].forEach(user => {
      result += `\n${user.username} ${user.salary} ${user.position}`;
    });

    return result;
  }
}