console.log ("Hello my name is"); // this is my test code

const firstName = "test";
const lastName = "lastname";

const fullName = firstName + " " + lastName;

var dogName = "Smikis"; //senovinis, nebenaudojamas
let age = 30; // naujovinis, naudojam kai reikia priskirti is naujo reiksme
const catName = "Pilkis"; // naujovinis, naudojam kai nereikia priskirti naujos reiksmes


const discount = 0.5;

const isAdult = false;
const isAlive = true;

const itemX = null; //tuscia, nera reiksmes

const itemY = undefined; //nera apibrezta reiksme


console.log(fullName);
let itemZ;
console.log(itemZ);

itemZ = "veliau priskirta reiksme";

let itemA = null;
console.log(itemA);

//Reference types

//masyvai

const array = [1,2,3];
const name = ["one", "two", "three"];
const fruits = ["Apple", "Banana", "Kiwi"];

console.log(fruits);

//objektai

const animalX = {name: "Smikis", age: 3, color:"marble"};
const animalY = {name: "Pilkis", age: 60, color:"grey"};

console.log(animalX);

//objektu masyvai
const items = [
{name: "iph"}

]
// Primitive data types
//let str = "Hello";  // String
let num = 42;       // Number
let bool = true;    // Boolean
let empty = null;   // Null
let notAssigned;    // Undefined

// Reference data type
let arr = [1, 2, 3];  // Array
let obj = { name: "John", age: 30 };  // Object

console.log(str);    // Output: string
console.log(num);    // Output: number
console.log(typeof bool);   // Output: boolean
console.log(typeof empty);  // Output: object (special case)
console.log(typeof notAssigned);  // Output: undefined
console.log(typeof arr);    // Output: object
console.log(typeof obj);    // Output: object

console.log(fullName);

// 1 uzduotis

const shopName = "Maxima";
const peopleCount = 500;
const consentWithPrivatePolicy = true;

// If(salygos)

let animalCount = 100;

if (animalCount >50) {
console.log ("Zoologijos sode yra daug gyvūnų")
}
else {
console.log ("Zoologijos sode yra mazai gyvunu")

}

let personAge = 18;

if (personAge >= 18 ){

    console.log ("prasome uzeiti");
} else {

    console.log ("i kluba neileisim");
}


const yearsOfExperience = 1.5;


if (yearsOfExperience < 2){
    console.log ("Atlygis iki 1500");
 } else if (yearsOfExperience <5){
    cconsole.log ("Atlygis iki 3000");
 } else if (yearsOfExperience <10){
    cconsole.log ("Atlygis nuo 3500");
 } else {
    cconsole.log ("Atlygis nuo 5000");
 }
const maternityLeaveInYears = 0;

if (maternityLeaveInYears === 0){
    console.log ("ismoka 80proc");
} else if (maternityLeaveInYears === 1 ){
    console.log ("ismoka 50proc");
} else {
    console.log ("Ismoka 30 proc.");
}

//&& and

let number = 10;
let number2 = 20;
let value = 15;

if (value > number && value < number2) {
	console.log("The value is between 10 and 20");
} else {
	console.log("The value is not in range");
}

// Output: The number value is between 10 and 20

// 2 uzduotis

let PersonAge = 18;
let str = "Lithuanian";
let DaysofLivingincountry = 35;

if (PersonAge >= 18 &&  str === "Lithuanian" && DaysofLivingincountry > 30) {
	console.log("Person is Lithuanian");
} else {
	console.log("Person is not Lithuanian");
}

