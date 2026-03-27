let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// full array change - map

let result = nums.map((el) => {
    return el * 2;
})

console.log(nums)
console.log(result)


// specific elements change - filter

let even = nums.filter((el) => {
    return el % 2 == 0
})

console.log(even)



// !!!!!!!!!!!!!!!!!!!!!! Repeat for practice !!!!!!!!!!!!!!!!!!!!
let result2 = nums.map((element) => {
    return element * 2;
})
console.log(nums)
console.log(result2)

let odd = nums.filter((element) => {
    return element % 2 != 0     //filter out odd numbers
})

console.log(odd)

//Map 
let array = [1, 3, 5, 7, 9, 11]

let result3 = array.map((element) => {
    return element * 3
})
console.log("Transform array into a multiple of 3")
console.log(array)
console.log(result3)


//"For loop" traversal
let arr = [2, 3, 4]
console.log("For loop Traversal: ")

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


//"ForEach" traversal
let arr2 = [1, 2, 3, 4, 5]
console.log("ForEach traversal:")

arr2.forEach((element, index) => {
    console.log(element)
})


