//JavaScript Object Notation
let planet_json = `{
    "name":"Terra",
    "physicalCharacteristics":{
        "surfaceArea":510072000,
        "equatorialDiameter":12756.2
    },
    "colors":["azul", "branco", "marrom"],
    "startRotation":"00:00",
    "finishRotation":"23:59"
}`

console.log(planet_json)

let planet = JSON.parse(planet_json)
console.log(planet)