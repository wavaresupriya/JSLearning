console.log(`----------------------------------------------------------`);
function maleMarriageEligibility(gender,age,boyName){
  var result=gender=="Male" && age>=21? `Hey ${boyName}, you are Eligible for Marriage `:`Hey ${boyName} you are Not Eligible for Marriage`;
console.log(result);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`-----------------------------------------------------------`);
function femaleMarriageEligibility(gender,age,girlName){
    var result= gender=="Female" && age>=18? `Hey ${girlName}, you are Eligible for Marriage `:`Hey ${girlName} you are Not Eligible for Marriage`;
console.log(result);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");