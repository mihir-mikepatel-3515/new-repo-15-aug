// const myArray = [1, 2, 3, 4, 5];    
// console.log(myArray[0]); // Output: 1
 // Output: 1
 const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
 const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
//  marvelHeroes.push(dcHeroes);
// marvelHeroes.concat(...dcHeroes); // Spread operator to merge arrays

const allheroes = [...marvelHeroes,...dcHeroes]; // Merging arrays using concat


 console.log(allheroes); // Output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]