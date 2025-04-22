function sortNumbersAsc(arr) {
    return arr.sort((a, b) => a - b);
}

function sortNumbersDesc(arr) {
    return arr.sort((a, b) => b - a);
}

function  sortStringsAlphabetically(arr) {
    return arr.sort()
}

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
// test

const numbers = [3, 1, 6, 8, 9, 10];
const fruits = ["banana", 'apple', 'lemon'];

const sortedAsc = sortNumbersAsc(numbers);
const sortedDesc = sortNumbersDesc(numbers);
const sortedStrings = sortStringsAlphabetically(fruits);
const sortLength = sortByLength(fruits);

console.log(sortedAsc);
console.log(sortedDesc);
console.log(sortedStrings);
console.log(sortLength);