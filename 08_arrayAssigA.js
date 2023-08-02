console.log(`-----------------------------Step1---------------------------------`);
const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
let element1 = arrayFruits[0];
console.log(`Element stored at index 1 is: ${element1}`);
let arrayLength = arrayFruits.length;
let elementLast = arrayFruits[arrayLength-1];
console.log(`Last element is : ${elementLast}`);
console.log(`-----------------------------Step2---------------------------------`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`-----------------------------Step3---------------------------------`);
let elementRemoved = arrayFruits.splice(4, 1);
console.log(arrayFruits);
console.log(elementRemoved);
console.log(`-----------------------------Step4---------------------------------`);
arrayFruits.splice(5,0,"pineapple");
console.log(arrayFruits);
console.log(`-----------------------------Step5---------------------------------`);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(arrayFruits);
console.log(`-----------------------------Step6---------------------------------`);
arrayFruits.splice(2,1,"Kiwi");
console.log(arrayFruits);
console.log(`-----------------------------Step7---------------------------------`);
for (let index = 1; index <=4; index++) {
    const element = arrayFruits[index];
    console.log(element);
}
console.log(`-----------------------------Step8---------------------------------`);
console.log(`Getting the slice from array`);
let selectElement=arrayFruits.slice(4);
console.log(selectElement);




