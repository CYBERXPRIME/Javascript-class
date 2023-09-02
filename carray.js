const fruits = ['mango','apple','orange','banana','fruits']

const fastFood = Array('yam and egg sause','jollof rice','indomie','egg and yam')

console.log(fruits[0]);

console.log(fastFood[0]);

const twoDimensionmatrix = [
    [3,4,6],
    [1,2,3],
    [7,8,9]
]
const threeDimensionMatrix = [
    [
        [1,"hello",3,3,4,5]

    ],
    [
        [1,2,3,4,5,6]
    ]
]
console.log(twoDimensionmatrix[0][0]);
console.log(threeDimensionMatrix[0][0][1]);

//whatever you put into the fill() will be duplicated the number of times specified in Array()
const generatedArray = Array(12).fill("gabriel")
console.log(generatedArray);
//it adds something to the end of an array
console.log(fruits.push("hello"));
//unshift adds something to the end of an array
//console.log(fruits.concat(fastFood));
//pop is used to remove from an array
//spread operator is denoted by ... it is used to concatenate a lot of arrays
console.log(...fruits,...fastFood)
//find and inlude are used to check if a certain word  is in an array
console.log(fruits.find((fruits) => fruits === 'orange'));

console.log(fruits.includes("watermelon"));

console.log(fruits.indexOf('orange'));

console.log(fruits.push("watermelon"));
console.log(fruits.sort());