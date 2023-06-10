const name = "John"
const age = 101

let runForLoop = (pets) => {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])



// -1
function mapVegetables(arr) {
    return arr.map(carrot => ({type: "carrot", name: carrot}));
    }
console.log(mapVegetables(["bright orange", "ripe", "rotten"]));

// -2
 const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
const filterForFriendly=(arr) => {
    return arr.filter(person => person.friendly)
}
    console.log(filterForFriendly(people))

// -3
const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

// -4

function printString (firstName, lastName, age) {
    return ` Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
console.log(printString( "Jane", "Doe", 100));



 