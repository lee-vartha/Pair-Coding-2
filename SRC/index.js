// Create a function that takes an array of numbers and strings and return a new array without the strings.

// Soultion 1:
function newArray (arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// Soultion 2:
function filterString(arr){
    return arr.filter(i => typeof i === "number");
}

console.log(newArray([1, 2, "a", "b"]));
console.log(filterString([1, 2, "a", "b"]));



