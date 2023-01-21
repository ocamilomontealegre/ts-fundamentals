// Arrays
// For declaring an array on TS, define the type of the elements
// then add []
let names: string[] = ["Pikachu", "Charizard", "Blastoise"];
console.log(names);
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
let conditions: boolean[] = [true, false, true, false];
console.log(conditions);
let objects: object[] = [{condition: true}, {condition: false}];
console.log(objects);
let whatever: any[] = ["Agumon", 25, true, {firstName: "Toriko", age: 25}];
console.log(whatever);

// Readonly property
// Prevent arrays for being changed
let pokemonName: readonly string[] = ["Pikachu", "Charizard", "Blastoise"];
console.log(pokemonName);
pokemonName.push("Infernape"); // Marks a TS error, not a JS error
console.log(pokemonName);