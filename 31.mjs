const currency = [1, 2, 5, 10, 20, 50, 100, 200]

const total = 200

let ways = new Array(total+1).fill(0)
ways[0] = 1

for(let coin in currency)
{
    for(let index = currency[coin]; index<=total; index++)
    {
        ways[index] += ways[index - currency[coin]]
    }
}


console.log(ways[ways.length-1])