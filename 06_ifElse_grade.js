var voteEligible= function(age){
    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) ||age>120)  {
        console.log(`You are Invalid age ${age} `); 
    }else {
     if(age>=18){
        console.log(`You are Eligible for vote age ${age}`);
    }
    else{
        console.log(`You are Not eligible for vote age ${age}`);
    }
   
}
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
