//Com objeto
let spaceship = {
    name: "Colossus",
    crewQuantity:10,
    isHitched:false
}

// let spaceshipName = spaceship.name
// let spaceshipcrewQuantity = spaceship.crewQuantity

let {name:spaceshipName, crewQuantity:spaceshipcrewQuantity} = spaceship
console.log(spaceshipName,spaceshipcrewQuantity)

//Com Array
let spaceships = ["Colossus", "Ártemis","Fênix"]

// let spaceship0 = spaceships[0]
// let spaceship1 = spaceships[1]

let [spaceship0,spaceship2,spaceship1] = spaceships
console.log(spaceship0,'e',spaceship1)

//imprimindo com uma função
function printSpaceships(array){
    array.forEach(element => {
        console.log(element)
    });
}
printSpaceships([spaceship0,spaceship2,spaceship1])
