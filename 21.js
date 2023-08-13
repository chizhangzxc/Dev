var _ = require("underscore")

n = 220
proper_divisors = {}
amicable_nums = {}
find_proper_divisors = function(n)
{
    arr = _.range(1, n)
    divisor = arr.filter(x => n % x == 0)
    return(divisor)
}


for(let i = 1; i <= 10000; i++)
{
    proper_divisors[i] = find_proper_divisors(i)
    amicable_nums[i] = proper_divisors[i].reduce((a,b) => a+b, 0)
}

amicable_pairs = []
for(let i = 1; i <= 10000; i++)
{
    if(i == amicable_nums[amicable_nums[i]] & i != amicable_nums[i])
    {
        amicable_pairs.push(i)
        console.log(i, amicable_nums[i])
    }

}

console.log(amicable_pairs.reduce((a,b) => a+b, 0))