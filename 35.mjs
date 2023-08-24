import { range } from "underscore"

const sieve = function(n)
{
    let num = range(2, n+1)
    let prime = []
    while(num.length>0)
    {
        prime.push(num[0])
        num = num.filter(x => x%num[0] != 0)
    }
    return prime
}


let prime = sieve(1000000)
console.log(prime)
let circular_prime = []
for(let i in prime)
{
    let is_circular = true
    let num = prime[i].toString().split("")
    for(let j = 0; j < num.length; j++)
    {
        let temp = num.pop()
        num = [temp, ...num]
        if(!prime.includes(Number(num.join(""))))
        {
            is_circular = false
            break
        }
    }
    if(is_circular)
    {
        circular_prime.push(prime[i])
    }
}

console.log(circular_prime)

