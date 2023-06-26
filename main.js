// return the sum of all the positives ones

// let arr = [20,-8,17,-35,-95,56,135]


// let sum = arr.filter(item => item > 0).reduce((total,current) => (total+current) , 0)

// console.log(sum)


// abbreviate the name and return the name initials and move it to uppercase
// let str = "kargad rom chaujde or saatshi morchebi"

// let uppercase = str.split(" ").map(item => item[0].toLocaleUpperCase()).join(" ")

// console.log(uppercase)


// given an array of strings, remove the last character of each string


let arr = ["nika","kaxa","luka","pavle", "vaso"]
let  result = arr.map(item => item.slice(0, -1)).join(" ")
 
console.log(result)


