var _ = require("underscore")
nums = []
// const N = 7
// for(let i = 1; i <= 7; i++)
// {
//     nums.push(_.range(1, i+1).reduce((a,b) => a+b, 0))
// }
// console.log(nums)


let k = 0
while(true)
{
    k++
    n = _.range(1, k+1).reduce((a,b) => a+b, 0)
    arr = _.range(1, 1+ Math.floor(Math.sqrt(n)))
    // console.log(arr.map(x => arr[arr.length-1] % x), arr, k)
    divisor = arr.filter(x => n % x == 0)
    if(divisor.length >= Math.ceil(500/2))
    {
        break
    }
}
console.log(k, n)

