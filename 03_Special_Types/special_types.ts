// Special Types

// Any: Allows all types to be used, however it could be counterproductive
let pokemonName: any; //pokemonName could be any data type (string, number, boolean, object)
pokemonName = "Pikachu"; // Here, pokemonName is a string
console.log(pokemonName);
pokemonName = 25; // Here, pokemonName is a number
console.log(pokemonName);
pokemonName = false; // Here, pokemonName is a boolean
console.log(pokemonName);

/* Unknown: Similar to any, but safer. You can use properties or methods without proving
the data type*/
let digimonName: unknown;
digimonName = 25; // Here, digimonName is a number
digimonName = "Agumon"; // Here, digimonName is a string

if (typeof digimonName === "string") {
  console.log(digimonName.length);
} else {
  console.log("It's not a string");
}





