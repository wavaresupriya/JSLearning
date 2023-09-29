

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

  let arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];
  const employeeTcs = arrayEmployees.filter((employee)=> {
    return employee.emp_company==='Wipro';
  });
  
  for (const employee of employeeTcs) {
    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);
  }
 
  
  console.log(`------------------------Step2-----------------------------------`);
  const arrayOfITandHRDept = arrayEmployees.filter((employee)=> {
    return employee.emp_dept=='IT' || employee.emp_dept=='HR';
  });

  for (const employee of arrayOfITandHRDept) {
    console.log(`Employee Name in IT and HR department: ${employee.emp_name}`);
  }
  
  console.log(`------------------------Step3-----------------------------------`);
  const empIdGreater50 = arrayEmployees.filter((employee)=> {
    return employee.emp_id>50;
  });
  for (const employee of empIdGreater50) {
    console.log(`Employee Name whose EmpId is greater than 50: ${employee.emp_name}`);
  }
  console.log(`------------------------Step4-----------------------------------`);
  const starstWith=arrayEmployees.filter((employee)=>{
return employee.emp_name.startsWith("A")|| employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M")
  });
  for (const employee of starstWith) {
    console.log(`Employee Name start with 'A' || 'V' || 'M': ${employee.emp_name}`);
  }
  console.log(`--------------------------Step5----------------------------------`);
  const sumSalary= arrayEmployees.reduce((total,employee)=>{
     return total + employee.emp_salary;
  });
  let salSum=0;
  for(const employee of arrayEmployees) {
    salSum = salSum + employee.emp_salary;
  }

  console.log(`Average salary from  department: ${salSum/arrayEmployees.length}`);

 
  console.log(`--------------------------Step6-----------------------------------`);
  const empIT=arrayEmployees.filter((employee)=>{
    return employee.emp_dept=='IT';
  });
  const sum=empIT.reduce((total,value)=>{
  return total+value;
  });
  // let sumSal=0;
  // for (const employee of empIT) {
  //   sumSal=sumSal+employee.emp_salary;
  // }

  console.log(`Average salary of IT department: ${sum/sum.length}`);