//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7
function factorial(num){
let factorial = 1; // 3 
for (let index = 1; index <=num; index++) {
    factorial = factorial * index;
}
    return factorial;
}

console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log(`Factorial of 9 is: ${factorial(9)}`);
console.log(`Factorial of 11 is: ${factorial(11)}`);
console.log(`Factorial of 7 is: ${factorial(7)}`);

