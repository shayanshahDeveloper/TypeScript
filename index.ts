// Any type in TypeScript

let color: any = "red";

color = 5; // Now color is a number
color = true; // Now color is a boolean
console.log(color);

// Using any type allows for flexibility, but it sacrifices type safety
// It's generally better to use more specific types when possible
