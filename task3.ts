// Scenario 1 - Modify Array with Methods:

const cities: string[] = ["New York", "Tokyo", "London", "Paris", "Berlin"];

// Push

cities.push("Mumbai");

// Pop

cities.pop();

// Shift

cities.shift();

// Unshift

cities.unshift("Tokyo");

// Scenario 2 - Subarray Creation:

// splice

const subArray1: string[] = cities.splice(1, 2);

// slice

const subArray2: string[] = cities.slice(1, 3);

console.log(`Subarray 1: ${subArray1}`);
console.log(`Subarray 2: ${subArray2}`);
console.log(`Original Array: ${cities}`);