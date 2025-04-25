function findEvenNumber(arr) {
    return arr.find(num => num % 2 === 0)
}

function findLongWord(arr) {
    return arr.find(word => word.length > 5);
}

function findNegativeIndex(arr) {
    return arr.findIndex(num => num < 0);
}

function findIndexOfWord(arr) {
    return arr.findIndex(word => word.includes('z'));
}

function hasNumberGreaterThanTen(arr) {
    return arr.some(num => num > 10);
}

function hasAdminUser(arr) {
    return arr.some(user => user.role === "admin");
}

function allPositive(arr) {
    return arr.every(num => num > 0)
}

function allStrings(arr) {
    return arr.every(word => typeof word === "string");
}

function containsApple(arr) {
    return arr.includes('apple');
}

function checkUsernameTaken(arr) {
    return arr.includes(user => user.name === 'Ira')
}



//test
const numbers = [1, 4, -5, 7, 8];
const fruits = ["apple", 'banana','crazy', 'lemon'];
const users = [
    {name: "Ira", role: 'user'},
    {name: 'Reyhan', role: "admin"},
    {name: 'Tarlan', role: 'user'},
]
const longWord = findLongWord(fruits);
const evenNum = findEvenNumber(numbers);
const negIndex = findNegativeIndex(numbers);
const findZ = findIndexOfWord(fruits);
const result = hasNumberGreaterThanTen(numbers);
const result2 = hasAdminUser(users);
const result3 = allPositive(numbers);
const result4 = allStrings(fruits);
const result5 = containsApple(fruits);
const result6 = checkUsernameTaken(users);

console.log(evenNum);
console.log(longWord);
console.log(negIndex);
console.log(findZ);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6)
