const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`----------------------------Step1--------------------------------------`);

console.log(`Total number of elements in array is: ${arrayNumbers.length}`);

console.log(`------------------------------Step2-----------------------------------`);

let element1 = arrayNumbers[0];
console.log(`Element stored at index 1 is: ${element1}`);
let arrayLength = arrayNumbers.length;
let elementLast = arrayNumbers[arrayLength-1];
console.log(`Last element is : ${elementLast}`);

console.log(`-------------------------------Step3-----------------------------------`);
let arrayNumbersLength = arrayNumbers.length;
let thirdLastElement = arrayNumbers[arrayNumbersLength-3];
console.log(`Last element is : ${thirdLastElement}`);

console.log(`--------------------------------step4----------------------------------`);
//find all even numbers
for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element%2==0) {
        console.log(element); 
    }
}

console.log(`--------------------------Step5----------------------------------`);
//find all odd numbers
for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if (element%2!=0) {
        console.log(element); 
    }
}
console.log(`--------------------------Step6----------------------------------`);
//sum of all the even positioned elements
let count=0;
for (let index = 0; index < arrayNumbers.length; index++) {
   let element=arrayNumbers[index];
    if (index%2==0) {
count=count+element;       
       
}
}
console.log(`Sum of all the even positioned element: ${count}`); 

console.log(`--------------------------Step7----------------------------------`);
//sum of all the odd positioned elements 
let sumOdd=0;
for (let index = 0; index < arrayNumbers.length; index++) {
   let element=arrayNumbers[index];
    if (index%2!=0) {
sumOdd=sumOdd+element;       
       
}
}
console.log(`Sum of all the odd positioned element: ${sumOdd}`);
console.log(`--------------------------Step8----------------------------------`);
//sum of all the elements 
let sumAllElement=0;
for (let index = 0; index < arrayNumbers.length; index++) {
   let element=arrayNumbers[index];
    
    sumAllElement=sumAllElement+element; 
    
}
console.log(`Sum of all the element: ${sumAllElement}`);
console.log(`---------------------------Step9--------------------------------------`);
//the number which are multiple of 5
for(let index = 0; index<arrayNumbers.length; index++){
    const element=arrayNumbers[index];
    if(element%5==0){
        console.log(`The number is multiple of 5 is:${element}`);
    }
}

console.log(`-----------------------------Step10------------------------------------`);
// is number 155 is Available in array
let search=arrayNumbers.includes(155);
console.log(` is 155 available: ${search}`);

console.log(`------------------------------Step11-----------------------------------`);
// is number 23 is Available in array
let searchNum=arrayNumbers.includes(23);
console.log(`is 23 available: ${searchNum}`);

console.log(`-------------------------------Step12----------------------------------`);
//insert numbers 55,66 before index 3
console.log(arrayNumbers);
let insert=arrayNumbers.splice(3,0,55,66);
console.log(insert);
console.log(arrayNumbers);
console.log(`------------------------------Step13-----------------------------------`);
console.log(arrayNumbers);
let removeElement=arrayNumbers.splice(4);
console.log(removeElement);
console.log(arrayNumbers);