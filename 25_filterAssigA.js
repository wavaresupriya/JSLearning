const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`---------------Numbers greater than 50---------------`);

const newArray = arrayNumbers.filter( (currentValue) =>{
    return currentValue>50;
} );
console.log(newArray);
console.log(`-------------------Even numbers----------------------`);
const evenNumbersArray = arrayNumbers.filter( (currentValue) =>{
    return currentValue %2==0;
} );
console.log(evenNumbersArray );

console.log(`-----------------------Odd numbers--------------------`);
const oddNumbersArray = arrayNumbers.filter( (currentValue) =>{
    return currentValue %2!=0;
} );
console.log(oddNumbersArray );
console.log(`---------------Numbers are Multiple of 5---------------`);
const mulpliplyOf5 = arrayNumbers.filter( (currentValue) =>{
    return currentValue %5==0;
} );
console.log(mulpliplyOf5);
console.log(`---------------Numbers between 20 and 50---------------`);

const between = arrayNumbers.filter( (currentValue) =>{
    return (currentValue>20 && currentValue<50);
} );
console.log(between);
