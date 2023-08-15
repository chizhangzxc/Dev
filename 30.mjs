const sum_of_powers = function(n)
{
    let num = 2
    let res = []
    while(num < n * (9 ** n))
    {
        // console.log(num)
        // console.log(num.toString().split("").map(x => x**n).reduce((a,b) => a+b, 0))
        if(num.toString().split("").map(x => x**n).reduce((a,b) => a+b, 0) == num)
        {
            res.push(num)
        }
        num++
    }
    return res
}

console.log(sum_of_powers(5))