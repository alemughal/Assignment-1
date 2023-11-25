// - **Scenario 1: Sum numbers**

const add = (a: number, b: number): number => {
    return a + b;
}

add(1, 2);

// Scenario 2: Check Even or Odd

function checkEvenOrOdd(number: number): string {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Usage:
const num: number = 8;
const result: string = checkEvenOrOdd(num);
console.log(`The number ${num} is ${result}.`);

// Scenario 3: Calculate Area: Rectangle

const calculateArea = (length: number, width: number): number => {
    return length * width;
}

// Scenario 4: String Reversal

const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello World"));

// Scenario 5: Temperature Conversion

const convertCelsiusToFahrenheit  = (celsius: number): number => {
    return (celsius * 9/5) + 32;
}

console.log(convertCelsiusToFahrenheit(30));

