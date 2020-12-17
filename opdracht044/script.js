// function with rest parameter (de argumenten worden behandeld als een array)


const sumOfNumbers = (...numbers) => {
    return numbers.reduce((prev, curr) => prev + curr);
}

console.log(sumOfNumbers(1,2,3,4,5,6,7,8));
console.log(sumOfNumbers(1,5,15,100));

// function with spread operator 

const sumOfNumbers2 = (x,y,z) => x+y+z;

let cijfers = [1,2,3];

console.log(sumOfNumbers2(...cijfers));