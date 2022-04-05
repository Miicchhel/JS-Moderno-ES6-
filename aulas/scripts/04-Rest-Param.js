function greetCrew(message, ...names){
    // console.log(names)
    names.forEach(name => console.log(`${message}, ${name}`));
    console.log('\n')
}

let names = ["Michel", "Luciana", "José"]

greetCrew('Welcome', names)
greetCrew('Welcome', "Michel", "Luciana", "José")
greetCrew('Welcome', ...names)