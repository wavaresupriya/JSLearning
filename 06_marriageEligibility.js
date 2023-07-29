function marriageEligibility(gender,age)
{
if(gender=="Female" && age>=18)
{
    console.log(`Gender is: ${gender} ,age is ${age} ,You are eligible for marriage.`);
}
if(gender=="Male" && age>=21)
{
    console.log(`Gender is: ${gender} ,age is ${age} ,You are eligible for marriage.`);
}
 
 if(gender=="Other" || gender=="Male" && age<21 || gender=="Female" && age<18)
{
    console.log(`Gender is:${gender} ,age is ${age} ,You are Not eligible for marriage.`);
}
}
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",28);
marriageEligibility("Female",16);
marriageEligibility("Other",35);
marriageEligibility("Other",41);