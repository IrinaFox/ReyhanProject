function sortNumbersAsc(arr) {
    return arr.slice().sort((a, b) => a - b);
}



// test

const numbers = [3, 1, 6, 8, 9, 10];
const sorted = sortNumbersAsc(numbers);

console.log(sorted);