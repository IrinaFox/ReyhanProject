function filterPozitives(arr){
    const result = [];
    arr.forEach((number) => {
        if(number > 0) {
            result.push(number);
        }
    })
    return result;
}

function cleanEdges(arr) {
    if (typeof arr[0] === 'string') {
        arr.shift();
    }

    if (typeof arr[arr.length-1] === 'string') {
        arr.pop();
    }

    return arr;
}

function getStringify(arr) {
    const newArr = [];

    arr.forEach((num) => {
        newArr.push(num + "");
    })
    return newArr;
}

function removeNegativeEdges(arr) {
        if (arr[0] < 0) {
            arr.shift();
        }

        if (arr[arr.length-1] < 0) {
            arr.pop();
        }

    return arr;
}
 function collectEvens(arr) {
    const newArr = [];

    arr.forEach((num) => {
        if (num % 2 === 0) {
            newArr.push(num);
        }
      })

     return newArr;
 }


//test
const numbers = [1,2,-3,4,5,-6,7,8,9,10];
const numbers1 = [-2,2,4,-5,];
const num = ["1",'4','5'];
const pozitivesNumbers = filterPozitives(numbers);

console.log(pozitivesNumbers);

let names = ['Anna',34,'Tarlan','Orxan']
let result = cleanEdges(names);

console.log(result);

let result2 = getStringify(names);
console.log(result2);

let result3 = removeNegativeEdges(numbers1);
console.log(result3);

let result4 = collectEvens(numbers);
console.log(result4);