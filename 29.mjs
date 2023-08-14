const seq = function(a,b)
{
    let num = []
    for(let i = 2; i <= a; i++)
    {
        for(let j = 2; j <= b; j++)
        {
            num.push(i**j)
        }
    }
    return(new Set(num.sort(function(a,b) {return a-b})))
}
console.log(seq(100, 100).size)

