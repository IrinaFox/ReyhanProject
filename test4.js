function doubleNumbers(arr) {
    let doubles = arr.map((num) => num * 2);
    return doubles;
}


function toUpperCaseArray(arr) {
    arr = arr.map((num) => num.toUpperCase());
    return arr;

}

function addIndex(arr){
    let arr1 = arr.map((num) => num + num)
    return arr1;
}

function extractNames(people) {
    let arr = people.map(person => person.name);
    return arr
}


//test
console.log(doubleNumbers([1,2,3]));

let animals = ['rizik','banan'];
let people = [
    { name: 'rizik',age: 2},
    { name: 'banan', age: 4}
];

console.log(toUpperCaseArray(animals));

console.log(addIndex([1,2,3]));

const names = extractNames(people);
console.log(names);