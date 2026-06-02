const list = {name:"rohan",age:20,complete:false};
for(const key in list){
    console.log(key ,":",list[key]);
}

function ok(){
    return 5;
}

console.log(ok());


function greet(name){
    console.log("hello" + name);
    console.log(`hello ${name}`);
}

greet("rohan");

const factorial = function(n){
    if(n ==0 || n== 1){
        return 1 ;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));


//object

const same = {name:"rohan pandey",age:19,newObject:{name1:"arnav",age1:51},completed:false};

console.log(same.name);
console.log(same.age);
console.log(same.completed);
console.log(same.newObject.name1);
console.log(same.newObject.age1);

const color = ["red", "yellow","green"];

for(const i in color){
    console.log(i);
}

for(const i of color){
    console.log(i);
}

color.forEach((i)=>console.log(i));


//promice

let rohan = new Promise(function(resolve, resect){
    let task = true;

    if(task){
        resolve("rohan op ladka hai, I love you rohan.");
    }else{
        resect("rohan mere ko chhod kar mat jana please.");
    }
});

rohan.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});


let car = new Promise(function(resolve,resect){
    resect("such bolo bhai tab to wo ham log ko bhul jayega");
    resolve("rohan arnav bahut bada gayk banne wala hai");
});

car.then(function(hii){
    console.log(hii);
}).catch(function(hii){
    console.log(hii);
})


//async/await
async function getData(){
    try{
        // let response = await fetch("https://api.example.com/data");
        let data = await ["rohan","raj"];
        console.log(data);
    }catch{
        console.log("Error come ");
    }
}

getData();


async function tata(){
    return 5;
}

async function getTata(){
    let num = await tata();
    for(let i=0;i<num;i++){
        console.log(num);
    }
}

getTata();