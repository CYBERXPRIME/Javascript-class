/* const list = ['a','b','c']
let i = 0 */
// while (i < list.length) {
//     console.log(list[i]);
//     console.log(i);
//     i = i+1
// }

/* do {
 console.log(list[i]) //value
 console.log(i) //index
 i = i + 0
} while (i < list.length)
 */

/* const list = ["mango",'melon','pineapple','apple']

for(let i = 0; i<list.length; i ++){
    console.log(list[i]);
} */
/* 
let i = 10
while (i > 4) {
    console.log(i+1);
    i = i + 1
}
 */

/* const list = ['a', 'b', 'c']
for (const value of list) {
 console.log(value) //value
 let addThis = value.length + 1
 console.log(addThis);
} */
/* 
let array = ['joe','harry','kim','samuel']
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
} */

const users = [
    {
        name: 'henry',
        adress: 'jos Nigeria',
        age: 10
    },
    {
        name: 'henry',
        adress: 'jos Nigeria',
        age: 10
    }
]
for (const value of users) {
    const element = users.adress;
    console.log(element);
}