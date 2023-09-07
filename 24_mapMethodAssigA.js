console.log(`------------------------------Add 10 into each element-----------------------------------`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const newArray = arrayNumbers.map((currentValue) =>{
return currentValue + 10;
});
console.log(newArray);

console.log(`--------------------------------Cube of each Array---------------------------------------`);

const arrayOfCube = arrayNumbers.map((currentValue) =>{
return currentValue * currentValue * currentValue;
});
console.log(arrayOfCube);

console.log(`-----------------------Add index value into each element----------------------------`);

const arrayWithIndex = arrayNumbers.map((currentValue,index) =>{
    return currentValue + index;
    });
    console.log(arrayWithIndex);