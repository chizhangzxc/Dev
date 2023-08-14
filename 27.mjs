import * as _ from "underscore"

const max_prime = function(a,b)
{
    const fn2 = function(a,b,n)
    {
        return(n**2 + a * n + b)
    }

    const sieve = function(n)
    {
        let num = _.range(2, Math.ceil(Math.sqrt(n))+1)
        let prime = []
        while(num.length>0)
        {
            prime.push(num[0])
            num = num.filter(x => x%num[0] != 0)
        }
        prime = prime.filter(x => n%x == 0)
        return(prime.length == 0)
    }

    // console.log(arr, arr.map(x => sieve(f2(x))))
    let k = 0
    while(true)
    {   
        if(fn2(a,b,k)<0)
        {
            break
        }
        if(!sieve(fn2(a,b,k)))
        {
            break
        }
        k++
    }
    return(k)
}
let max_num = 0
let max_a = 0
let max_b = 0
for(let a = -999; a<=999; a++)
{
    for(let b = -999; b<=999; b++)
    {
        let m = max_prime(a,b)
        if(m > max_num)
        {
            max_num = m
            max_a = a
            max_b = b
        }
    }
}
console.log(max_num, max_a, max_b, max_a * max_b)