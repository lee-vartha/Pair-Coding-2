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

// Create a function that takes a 2D array with numbers and return a new (single) array with the largest numbers of each.

function largestNumbers (arr){
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
console.log(largestNumbers([[1,3,5], [1,6,8],[5,1,6]]))

// create a function that returns the area of a rectangle
function area(a, b){
    return a*b
} 

// Create a function to reverse an array 

// revArray([1,2,3,4]) -> ([4,3,2,1])

function revArray(arr){
    return arr.reverse()
}
console.log (revArray([1,2,3,4,5]))