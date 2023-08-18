const factorial = function(n) 
{
    if(n == 0 | n == 1)
    {
        return 1
    }
    else
    {
        return(n*factorial(n-1))
    }
}

let nums = []
for(let i = 3; i < 10000000; i++)
{
    let sum = i.toString().split("").map(x => factorial(x)).reduce((a,b) => a+b, 0)
    if(sum == i)
    {
        nums.push(i)
    }
}
console.log(nums, nums.reduce((a,b) => a+b, 0))