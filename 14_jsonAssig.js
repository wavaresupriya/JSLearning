let jsonEmployeeInfo=`{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address" : {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`
// Convert JSON format into Object
const employeeObj=JSON.parse(jsonEmployeeInfo);
//log role DIV
console.log('role:',employeeObj.role[0].toUpperCase());
//log last name Melon
const fullName=employeeObj.name.split(" ");
const lastName=fullName[1];
console.log(`Last Name is: ${lastName}`);
//log date of joining year
const doj=employeeObj.doj.split("-");
const joiningYear=doj[2];
console.log(`Joining year: ${joiningYear}`);
