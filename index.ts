// Annotated TypeScript code String

let myName: string = "Shayan Shah";
console.log(myName);

// Annotated TypeScript code Number

let myAge: number = 0;

console.log(myAge ? "You are hero" : "You are not hero");

// Annotated TypeScript code Boolean

let isMarried: boolean = false;
console.log(isMarried ? "Married" : "Single");

// Annotated TypeScript code Function

function myNum(Age: number) {
  if (Age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are not an adult");
  }
}

myNum(8);

// Inferred TypeScript code

let fName = "Shayan Shah";
let favNumber = 30;
let iRight = true;

console.log(`All Inferring Types: ${fName}, ${favNumber}, ${iRight}`);
// Inferred TypeScript code with function