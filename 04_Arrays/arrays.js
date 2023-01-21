"use strict";
// Arrays
// For declaring an array on TS, define the type of the elements
// then add []
let names = ["Pikachu", "Charizard", "Blastoise"];
console.log(names);
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let conditions = [true, false, true, false];
console.log(conditions);
let objects = [{ condition: true }, { condition: false }];
console.log(objects);
let whatever = ["Agumon", 25, true, { firstName: "Toriko", age: 25 }];
console.log(whatever);
// Readonly property
// Prevent arrays for being changed
let pokemonName = ["Pikachu", "Charizard", "Blastoise"];
console.log(pokemonName);
pokemonName.push("Infernape");
console.log(pokemonName);
