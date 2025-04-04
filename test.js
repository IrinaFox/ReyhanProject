console.log("hi");
console.log("test");

function getMaxNumber(nums) {
    let maxNumber = nums[0];

    nums.forEach((value)=>{

        if (value > maxNumber) {
            maxNumber = value;
        }
    })

    return maxNumber;
}

function getMinNumber(nums) {
    let minNumber = nums[0];

    nums.forEach((value) => {
        if (value < minNumber) {
            minNumber = value;
        }
    });
    return minNumber;
}

function getSumNum(num) {
    let sum = 0;
    num.forEach(num => sum += num);
    return sum;
}

    //test
    let numbers = [1,2,5,7,8,3,];
    const result=getMaxNumber(numbers);
    console.log (result);
    const result1=getMinNumber(numbers);
    console.log(result1);
    const result2=getSumNum(numbers);
    console.log(result2);