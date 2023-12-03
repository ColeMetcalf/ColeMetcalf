const companyData = {
  // QUESTION 1
  "employees": [
    {
      "firstname": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raise eligible": true
    },
    {
      "firstname": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raise eligible": true
    },
    {
      "firstname": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raise eligible": true
    },
    //QUESTION 3
    {
      "firstname": "Anna",
      "department": "Tech",
      "designation": "Executive",
      "salary": 25600,
      "raise eligible": false
    }
  ],
  //QUESTION 2
  "company": {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "array of Employees": [
      {
        "firstname": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise eligible": true
      },
      {
        "firstname": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise eligible": true
      },
      {
        "firstname": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise eligible": true
      },
        //QUESTION 3
      {
        "firstname": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raise eligible": false
      }
    ]
  },
  //QUESTION 6
  "workingFromHome": ['Anna', 'Sam']
};

//QUESTION 4
function calculateTotalSalary(data) {
  const employeesArray = data.employees.concat(data.company["array of Employees"]);
  let totalSalary = 0;

  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }

  return totalSalary;
}

//QUESTION 5
function applyRaise(data) {
  const employeesArray = data.employees.concat(data.company["array of Employees"]);

  for (const employee of employeesArray) {
    if (employee["raise eligible"]) {
      //QUESTION 5
      employee.salary *= 1.1;
      employee["raise eligible"] = false;
    }
  }
}

//QUESTION 6
function updateWFHStatus(data) {
  const employeesArray = data.employees.concat(data.company["array of Employees"]);
  const employeesWFH = data.workingFromHome;

  for (const employee of employeesArray) {
    employee.wfh = employeesWFH.includes(employee.firstname);
  }
}

//QUESTION 4
const totalSalaryBeforeRaise = calculateTotalSalary(companyData);
console.log("Total Salary for all employees before raise: $" + totalSalaryBeforeRaise);

//QUESTION 5
applyRaise(companyData);

//QUESTION 6
updateWFHStatus(companyData);

//QUESTION 4
const totalSalaryAfterRaise = calculateTotalSalary(companyData);
console.log("Total Salary for all employees after raise: $" + totalSalaryAfterRaise);
console.log("Updated Employee Data:", companyData);
