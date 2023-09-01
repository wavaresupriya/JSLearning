console.log(`--------------------Step1----------------------------------`);
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach( (currentValue, index)=>{
    console.log(`Array Element: ${currentValue} , Index: ${index}`);
} ); 
console.log(`---------------------Step2----------------------------------`);
arrayNumbers.forEach((currentValue) => {
    if(currentValue>0){
        console.log(`Positive Numbers in Array is: ${currentValue}`);
    }
});
console.log(`----------------------Step3----------------------------------`);
let newArray=[];
arrayNumbers.forEach((numbers) => {
    if(numbers<0){
        newArray.push(numbers);
    } 
});
console.log(`New Negative Numbers Array is:` ,newArray);

console.log(`-----------------------Step4---------------------------------`);
arrayNumbers.forEach((num) => {
    if(num%2==0){
        console.log(`Even numbers in Array is: ${num}`);
    }
});
console.log(`------------------------Step5---------------------------------`);
let sum=0;
arrayNumbers.forEach((currentValue) => {
sum+=currentValue;
});
console.log(`Addition of Array element is: ${sum}`);
console.log(`------------------------Step6---------------------------------`);
arrayNumbers.forEach((value,index) => {
    if(index%2==0){
        console.log(`Even indexed Array value is: ${value}`);
    }
});