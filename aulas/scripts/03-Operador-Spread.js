let spaceships = ["Colossus", "Ártemis", "Fênix"]

console.log(spaceships)
console.log(...spaceships) //console.log("Colossus", "Ártemis", "Fênix")

console.log(spaceships, "Puller")
console.log(...spaceships,"Puller")

function speedUp(velocity,acceleration){
    return velocity+acceleration
}

let spaceshipsAcceleration = [60,10]
let newVelocity = speedUp(...spaceshipsAcceleration) //speedUp(60,10) 
console.log(newVelocity)

