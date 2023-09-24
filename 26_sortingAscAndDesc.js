const arrayNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`-----------------------Step1-------------------------`);
arrayNumbers.reverse();
console.log(arrayNumbers);
console.log(`------------------------Step2--------------------------`);
arrayNumbers.sort();
console.log(arrayNumbers);
console.log(`-------------------------Step3--------------------------`);
arrayNumbers.sort((num1,num2)=>{
return num1>num2 ? 1: -1;
});
console.log(arrayNumbers);
console.log(`-------------------------Step4---------------------------`);
arrayNumbers.length-1;
console.log(arrayNumbers);
smallest number is an 0th indexedDB
spread operator