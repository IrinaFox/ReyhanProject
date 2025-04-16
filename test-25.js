function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0)
}

function filterShortWords(arr) {
    return arr.filter(fruit => fruit.length < 5);
}

function filterAdults(arr) {
    return arr.filter(people => people.age >= 18);
}

function filterTruthy(arr) {
    return arr.filter(truthy => Boolean(truthy));
}

function filterByLetter(arr) {
    return arr.filter(letter => letter.includes('b'));
}


//test
const nums = [1,4,5,8,2,9];
const mixed = [null, 'hi', 15, 0, 'how are you?'];
const fruits = ['apple', 'banana', 'orange', 'pear']
const students = [
    {name: 'Ira', age: 15},
    {name: 'Vasya', age: 22},
    {name: 'Kolya', age: 32},
];


console.log(filterAdults(students));
console.log(filterTruthy(mixed));
console.log(filterEvenNumbers(nums));
console.log(filterShortWords(fruits));
console.log(filterByLetter(fruits));