function filterPozitives(arr){
    return arr.filter(function(num) {

            return num > 0;
    })
}

function cleanEdges(arr) {
    if(typeof arr[0] === 'string'){
        arr.shift();
    }

    if(typeof arr[arr.length-1] === 'string'){
        arr.pop();
    }

    return arr;
}

function getStringify(arr) {
    return arr.map(function(item) {
        if(typeof item === 'number') {
            return String(item);
        }
        return item;
    })
}
//test
const numbers = [1,2,-3,4,5,-6,7,8,9,10];
const num = ["1",'4','5']
const pozitivesNumbers = filterPozitives(numbers);

console.log(pozitivesNumbers);

let names = ['Anna',34,'Tarlan','Orxan']
let result = cleanEdges(names);

console.log(result);

let result2 = getStringify(names);
console.log(result2);