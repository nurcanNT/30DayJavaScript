var myArrays = [];

var myArrays2 = [1, 235, 0.7, 90, 1234, 7.5, 345];

console.log(myArrays2.length);


var components = ['Facebook', 'Amazon', 'IBM', 'Microsoft', 'Apple', 'Oracle'];

console.log(components[0]);

console.log("First element : ", components[0], " median element : ", components[Math.floor(components.length / 2)], " last element : ", components[components.length-1]);

console.log(components.reverse()[0]);

 var main = components.join(" * ").toUpperCase().split(",");
 console.log(main);

 comp = "Facebook";
if (components.includes(comp)){
    console.log(comp);
} else{
    console.log("Company is not found.");
}


var regEx = /o+/gi;



var text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

var newText = text.match(/[^_\W]+/g);
console.log(newText);
console.log(newText.length);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(shoppingCart[0] != "Meat"){
    shoppingCart.unshift("Meat")
}
console.log(shoppingCart)

if(shoppingCart[shoppingCart.length-1] != "Sugar"){
    shoppingCart.push("Sugar")
}
console.log(shoppingCart)


isAllergic = true
if(isAllergic){
    shoppingCart.splice(shoppingCart.indexOf("Honey"),1);
}
console.log(shoppingCart)

shoppingCart.splice(3,1,"Green Tea")
console.log(shoppingCart)



const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack)
