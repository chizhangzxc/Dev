import { readFileSync } from "fs"

const quadratic = function(x)
{
    const delta = 1/4+2*x
    return(-.5+Math.sqrt(delta))
}

const is_triangle = function(string)
{
    return Number.isInteger(quadratic(string.split("").map(x => x.charCodeAt() - "A".charCodeAt() + 1).reduce((a,b) => a+b, 0)))
}



const words = readFileSync('words.txt', 'utf8').split("").filter(x => x != "\"").join("").split(",")

console.log(words.filter(x => is_triangle(x)))

console.log(words.map(x => x.split("").map(x => x.charCodeAt() - "A".charCodeAt() + 1).reduce((a,b) => a+b, 0)).filter(x => Number.isInteger(quadratic(x))))