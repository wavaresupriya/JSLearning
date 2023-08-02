const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`------------------------------------------------------------------`);

console.log(`Total number of elements in array is: ${arrayNumbers.length}`);

console.log(`-----------------------------------------------------------------`);

let element1 = arrayNumbers[0];
console.log(`Element stored at index 1 is: ${element1}`);
let arrayLength = arrayNumbers.length;
let elementLast = arrayNumbers[arrayLength-1];
console.log(`Last element is : ${elementLast}`);

console.log(`------------------------------------------------------------------`);
let arrayNumbersLength = arrayNumbers.length;
let thirdLastElement = arrayNumbers[arrayNumbersLength-3];
console.log(`Last element is : ${thirdLastElement}`);

console.log(`------------------------------------------------------------------`);
//find all even numbers
for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element%2==0) {
        console.log(element); 
    }
}

console.log(`------------------------------------------------------------`);
//find all odd numbers
for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element%2!=0) {
        console.log(element); 
    }
}
console.log(`-----------------------------------------------------------------`);
//the number which are multiple of 5
for(let index = 0; index<arrayNumbers.length; index++){
    const element=arrayNumbers[index];
    if(element%5==0){
        console.log(`The number is multiple of 5 is:${element}`);
    }
}

console.log(`-----------------------------------------------------------------`);
let search=arrayNumbers.includes(155);
console.log(` is 155 available: ${search}`);

console.log(`-----------------------------------------------------------------`);
let searchNum=arrayNumbers.includes(23);
console.log(`is 23 available: ${searchNum}`);

console.log(`-----------------------------------------------------------------`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`-----------------------------------------------------------------`);
let removeElement=arrayNumbers.splice(4);
console.log(arrayNumbers);
console.log(removeElement);