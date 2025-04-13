function doubleNumbers(arr) {
    let doubles = arr.map((num) => num * 2);
    return doubles;
}


function toUpperCaseArray(arr) {
    arr = arr.map((num) => num.toUpperCase());
    return arr;

}

//test
console.log(doubleNumbers([1,2,3]));
animals = ['rizik','banan'];
console.log(toUpperCaseArray(animals));