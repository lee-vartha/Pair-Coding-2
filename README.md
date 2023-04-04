# Pair-Coding-2
// Lee is the driver, Ollie is the navigator.

Created Dev branch
Create a function that takes an array of numbers and strings and return a new array without strings.

Solution 1:

function newArray(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            newArr.push(arr[i])
        }
    }
    return newArr
}

Solution 2:

function newArray(arr){
    return arr.filter(i => typeof i === "number")
}

