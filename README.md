# Pair-Coding-2
Lee is the driver, Ollie is the navigator.

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

Create a function that takes a 2D array with numbers return a new array (single)
with the largest numbers of each array.

Solution 1:

function largestNumbers(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        let number = arr[i][0]
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > number){
                number = arr[i][j]
            }
        }
        newArr.push(number)
    }
    return newArr
}

Solution 2:
function minNum(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.max(...arr[i]);
    }
    return arr.flat();
}

Create a function that returns the area of a rectangle

Solution 1:
function area(a, b){
    return a*b
}

Create a function to reverse an array

Solution 1:

function revArray(arr){
    return arr.reverse()
}