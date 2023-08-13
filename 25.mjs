const UPPER_LIMIT = 1000
const phi = (1 + Math.sqrt(5))/2
const psi = 1 - phi

const fib = function(n) 
{   

    let f = (Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5)
    return(f)
}



let fib_series = [1n, 1n]
while(true)
{
    if(fib_series[fib_series.length-1].toString().split("").length == UPPER_LIMIT)
    {
        break
    }
    else
    {
        fib_series.push(fib_series[fib_series.length-1] + fib_series[fib_series.length-2])
    }
}
console.log(fib_series.length)