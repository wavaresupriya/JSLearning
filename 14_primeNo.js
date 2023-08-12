//WAP prime number or not
function primeNum(num){
    let prime=true;
    for (let index = 2; index <num; index++) {
        if( num % index ==0){
            prime =false;
            break;
        }
    }
        if(prime)
        {
            console.log(`${num} is a prime number`);
        }else{
            console.log(`${num} is not a prime number`);
    }
}
primeNum(11);
primeNum(21);


    
