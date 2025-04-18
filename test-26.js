function sumArray(arr) {
    return arr.reduce((acc,cur) => acc+cur, 0);
}

function concatStrings(arr) {
    return arr.reduce((acc,cur) => acc+cur, "");
}

function getMaxNumber(arr) {
    return arr.reduce((acc, num) => num > acc ? num : acc);
}


//test

const nums = [2, 4, 5, 6];
console.log(sumArray(nums));

const bye = ['Good', 'bye', 'my', 'friend'];
console.log(concatStrings(bye));
console.log(getMaxNumber(nums));