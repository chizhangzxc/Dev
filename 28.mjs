
const fn = function(n)
{
    let num = []
    num.push((2*n-1)**2 + 2*n)
    num.push((2*n-1)**2 + 2*n*2)
    num.push((2*n-1)**2 + 2*n*3)
    num.push((2*n-1)**2 + 2*n*4)

    return(num)
}

let sum = 1
for(let k = 1; k <= 500; k++)
{
    sum += fn(k).reduce((a,b) => a+b, 0)
}
console.log(sum)