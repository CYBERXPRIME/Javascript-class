/* setTimeout(()=>{
    console.log("i am the guru after the above message");
}, 3000)

console.log("i am the guru before the below message");

const doSomething = (callback) => {
    const result = callback(result)
} */

//async functions

constasync = async()=>{

}
setTimeout(()=>{
    console.log("hello wait for me")
},3000
)

console.log('Am not waithing for you');
//a callback function is a function that takes another function as a parameter
function callbackFn(calculate){
    console.log(calculate(2*2))
}
callbackFn((eq)=>{
    return eval(eq)
})

