const N = 10001
prime = [2]
let num = prime[prime.length-1]+1
console.log(prime.length)
while(prime.length < N)
{
    if( Math.min(...prime.map(x => num % x)) > 0)
    {
        console.log(num, Math.min(...prime.map(x => num % x)))
        prime.push(num)
    }
    num++
}
console.log(prime.length, prime[prime.length-1])