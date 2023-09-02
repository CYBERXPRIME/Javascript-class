console.log(25);
console.log(25);
setTimeout(() => {
  console.log(2);
  console.log("the call back functiion is fired");
}, 2000);
console.log(5);

//making request from an api endpoint
const request = new XMLHttpRequest();


//u can track the progress of your request using the eventistener
request.addEventListener('ready state change', ()=>{
    console.log(request, request.readyState);
})
request.open("GET", "./data.json")
request.send();