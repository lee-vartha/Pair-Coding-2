// Create a function that takes an array of numbers and strings and return a new array without the strings.

function newArray (arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(newArray([1, 2, "a", "b"])); // [1, 2]

// Path: SRC\index.js




