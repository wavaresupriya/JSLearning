
const arrayNums = [20,3,4,56,90,400,49];
let cloneArrayNum = arrayNums;
console.log(`Original array : ${arrayNums}`);

cloneArrayNum.push(55,66);
console.log(`Cloneed array : ${cloneArrayNum}`);
console.log(`-----------------------------------------------`);
let arrayClone=[...arrayNums];
arrayNums.push(10,25);
console.log(arrayNums);
console.log(arrayClone);
console.log(`------------------------------------------------`);

const arrayEven = [2,30,14,8];
const arrayOriginal = [20,3,4,56,90,400,49];
const newArray = [...arrayEven, ...arrayOriginal];
console.log(`After merge using spread operator array: ${newArray}`);

console.log(`------------------------------------------------`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },

    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
    
        },
       
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },

    mobiles: function () {
        ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]  
    }
}
let updateMonth = JSON.parse(JSON.stringify(employee_info));
updateMonth.salary.july_month = "80,000INR";
console.log(`Employee Details: ${employee_info.salary.july_month} `);
console.log(`New Employee Details: ${updateMonth.salary.july_month}`);

console.log(`------------------------------------------------------------------`);

let countryUpdate = JSON.parse(JSON.stringify(employee_info));
countryUpdate.address.country = "United Kingdom";
console.log(`Employee Details: ${employee_info.address.country}`);
console.log(`New Employee Details: ${countryUpdate.address.country}`);

