
const UPPER_LIMIT = 1000000


collatz = function(n)
{
    chain.push(n)
    if(n == 1)
    {
        return
    }
    if(n%2 == 0)
    {
        n = n/2
    }
    else
    {
        n = 3*n+1
    }
    collatz(n)
}

longest_chain = []
for(let i = 1; i < UPPER_LIMIT; i++)
{
    chain = []
    collatz(i)
    if(chain.length > longest_chain.length)
    {
        longest_chain = chain
    }
}
console.log(longest_chain, longest_chain.length)