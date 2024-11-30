// setTimeout:-

// console.log("Hello World");
// console.log("Red & White");
// let id = setTimeout(()=>{
//     console.log("Javascript");
//     console.log("Timing Function");
// },1000)
// clearTimeout(id);
// console.log("Clear Time");


// setInterval:-

// console.log("Hello World");
// console.log("Red & White");
// let id = setInterval(()=>{
//     console.log("Javascript");
// },1000)
// console.log("Clear Time");
// clearInterval(id);
// console.log("Timing Function");

// Model Show Web Page 

let model = document.querySelector('.model');
let btn = document.querySelector('.btn');

function ShowModel(){
    model.style.display = "block"
}

setTimeout(ShowModel,5000);
btn.addEventListener('click',()=>{
    model.style.display = "none"
})