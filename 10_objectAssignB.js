
let bankSbi ={
    bankName :"SBI Bank",
    location :"Mumbai",
    accountNo :"4524663525",
    interestRate:"6.75%",
}
let bankLocation ={
    street: "Kendra Vihar",
    city: "Mumbai",
    pinCode: 410210,
}
let hdfcBank = Object.assign({},bankSbi,bankLocation);
hdfcBank.bankName = "Housing Development Finance Corporation";
console.log(`HDFC Bank Details: ${hdfcBank.bankName}`);

let centralBank= {...bankSbi};
centralBank.bankName= "Central Bank Of India";
console.log(`Central Bank Name: ${centralBank.bankName}`);

let centralBankCity= {...bankLocation};
centralBank.city= "Pune";
console.log(`Central Bank Location: ${centralBank.city}`);

console.log(`-----------------------------------------------`);

let rateOfInterest = {
    homeLoanInterest: "8.50%",
    personalLoanInterest:"11%",
    dueInterest: "3.50%",
}
let sbiDetails=Object.assign({},bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);
console.log(`----------------------Traverse this merged object----------------------------------`);

for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(element);
    }
}