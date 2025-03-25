console.log("hi")
console.log("test")
function maxNumber(num){
    maxNumber = num[0]
    num.forEach((index)=>{
        if(index>maxNumber){
            maxNumber=index
        }
        return maxNumber
    })
}

function minNumber(num){
    minNumber = num[0]
    num.forEach((index)=>{
        if(index<minNumber){
            minNumber=index
        }
        return minNumber
    })
}