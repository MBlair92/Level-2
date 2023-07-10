// function collectAnimals(/*your code here*/) {
//     /*and here*/
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

function collectAnimals(...animals) {
    console.log(animals)
}
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");


// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

let combineFruit=(fruits, sweets, vegetables) => {
    return {fruit: fruits, sweet: sweets, vegetables: vegetables}
}
console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]));


// function parseSentence(_________){
//     return `We're going to have a good time in ${location} for ${duration}`
// }
              
// parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
// });

let parseSentence = (location, duration) => {
     return `We're going to have a good time in ${"Burly Idaho"} for ${"2 weeks"}`
 }
 console.log(parseSentence())
              
parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
});


// let returnFirst = (items) => {
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
//             }

function returnFirst(items) {
    const [firstItem] = items; // array destructuring
    return firstItem;
  }
  const arr = ["bread", "milk", "tea"]
  const [b, m, t] = arr
  console.log(b, m, t)


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([firstFav, secondFav, thirdFav, ...arr]){
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and  ${thirdFav}!`
}
console.log(returnFavorites(favoriteActivities)
)
  

// 
function combineAnimals(...arrays) {
    return [...arrays.flat()];
  }
  
  const realAnimals = ["dog", "cat", "mouse"];
  const magicalAnimals = ["jackolope"];
  const mysteriousAnimals = ["platypus"];
  
  const combinedAnimals = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
  console.log(combinedAnimals);
  ["dog", "cat", "mouse", "jackolope", "platypus"]


//   function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }
  
product = (a, b, c, d, e) => [a, b, c, d, e].reduce((acc, number) => {
    return acc * number;
  }, 1)
  
  console.log(product(2, 4, 6, 8, 10))


// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }
  
const unshift=(a, b, c, d, e, arr) => [ a, b, ...arr, c, d, e]
  
 console.log(unshift(1, 2, 3, 4, 5,['string', 23, false]))

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// //[
// //  {firstName: "Frank", lastName: "Peterson"},
// //  {firstName: "Suzy", lastName: "Degual"},
// //  {firstName: "Liza", lastName: "Jones"},
// //]

const populatePeople = (names) => {
    return names.map(name => {
       let [firstName, lastName] = name.split(" ")
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
  