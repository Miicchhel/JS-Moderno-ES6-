let spaceshipName = "Colossus"
let velocity = prompt(`Digite a velocidade da nave ${spaceshipName} em km/s`)

//concatenação de strings
console.log("Nome da nave: " + spaceshipName + "\nsua velocidade atual é: " + velocity +"km/s")

//interpolação de strings
console.log(`Nome da nave: ${spaceshipName} \nsua velocidade atual é: ${velocity}km/s`) 