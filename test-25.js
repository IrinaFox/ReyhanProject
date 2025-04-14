function filterEvenNumbers(arr) {
    if(arr % 2 === 0){
        return arr;
    }
}


//test
const nums = [1,4,5,8,2,9]
console.log(nums.filter(filterEvenNumbers));