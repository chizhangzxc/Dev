const { cpSync } = require('fs')
var _ = require('underscore')

find_proper_divisors = function(n)
{
    arr = _.range(1, Math.floor(n/2) +1 )
    divisor = arr.filter(x => n % x == 0)
    return(divisor)
}

subset_sum = function(arr, sum)
{
    // pairs = []
    for(let i = 0; i < arr.length; i++)
    {
        if( arr.includes(sum - arr[i]))
        {   
            // pairs.push([arr[i], sum-arr[i]])
            return(true)
        }
    }
    return(false)
    // return(pairs)
}


abundant = []


for(let i = 12; i <= 28123; i++)
{
    if(find_proper_divisors(i).reduce((a,b) => a+b, 0) > i)
        abundant.push(i)
}
console.log(abundant)

// console.log(abundant.filter(x => subset_sum(abundant, x) == false))


l = []

for(let i = 0; i < abundant.length; i++)
{
    if( subset_sum(abundant.filter(x => x < abundant[i]), abundant[i]))
    {
        l.push(abundant[i])
    }
}

console.log(l.length)

console.log(_.range(1, 28123+1).filter(x => !l.includes(x)))