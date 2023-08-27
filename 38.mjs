import { range } from "underscore"

let pandigital = []

for(let i = 1; i< 10000; i++)
{
    let n = 2
    while(true)
    {
        let digits = range(1, n+1)
        let t = digits.map(x => x*i).join("")
        if(new Set(t).size == 9 & Math.min(...t.split("")) == 1 & t.length == 9)
        {
            console.log(i,n)
            pandigital.push(Number(t))
            break
        }
        if(t.length >= 9)
        {
            break
        }
        n++
    }
}

console.log(Math.max(...pandigital))