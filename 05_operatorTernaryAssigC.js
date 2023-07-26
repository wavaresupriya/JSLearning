console.log(`----------------------------------------------------------`);
function maleMarriageEligibility(gender,age,boyName){
    (gender=="Male" && age>=21)? console.log(`Hey ${boyName}, you are Eligible for Marriage `):console.log(`Hey ${boyName} you are Not Eligible for Marriage`);

}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`-----------------------------------------------------------`);
function femaleMarriageEligibility(gender,age,girlName){
    (gender=="Female" && age>=18)? console.log(`Hey ${girlName}, you are Eligible for Marriage `):console.log(`Hey ${girlName} you are Not Eligible for Marriage`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");