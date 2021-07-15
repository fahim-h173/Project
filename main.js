// premative and non premative 

//premative

/*
1.string
2.number
3.boolean
4.undefined
5.BigInt
6.symbol
7.null

*/

let a = ""
console.log(typeof a);

let b =10;
console.log(typeof b);
let c = true;
console.log(typeof c);
let d = 10n;
console.log(typeof d);
let e = Symbol ("fahim125"); 
let f = Symbol ("fahim125");
let result = (e==f) ? console.log(true) : console.log(false);;
console.log(typeof e);


//NONE PREMATIVE

let carierInfo = {
    name: "Allion",
    model: "2021",
    brand: "Toyota",
    price: "350000"
}
carierInfo["name"] = "BMW";
console.log(carierInfo["name"]);

let carInfo = {};
carInfo[name] = "Nissan";

console.log(carInfo[name]);

function sayHi() {
    let msg = "Hi, I'm learning JS";
    alert(msg);
}
sayHi();










