// Obj Destructuring 1
console.log(numPlanets);    // 8
console.log(yearNeptuneDiscovered);     // 1846




// Obj Destructuring 2
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


// Obj Destructuring 3
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // your name is Melissa and you like green
getUserData({}) // your name is undefined and you like green


// Array Destructuring 1
console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Ci


// Array Destructuring 2
console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings


// Array Destructuring 3
console.log(numbers) // [10, 30, 20]


//ES5 Assigning Variables to Object Properties
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const { a,b } = obj.numbers;
console.log({ a,b })

//ES5 Array Swap
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]
console.log(arr)



/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
// const raceResults = ([first, second, third, ...rest]) => {
//     return {
//         first: first,
//         second: second,
//         third: third,
//         rest: [...rest]
//     }
// }

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})


let result = raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])


console.log(result)