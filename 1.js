const upper_limit = 1000
function divided_by(numebr)
{
    let number = numebr
    return((number % 3 == 0) || (number % 5 == 0))
}
let nums = []
for(let i = 1; i < upper_limit; i++)
{
    if(divided_by(i))
    {
        nums.push(i)
    }
}
console.log(nums.reduce((sum,num) => sum+num, 0))
// criterion = (num) => num*(num % 3 == 0 || num % 5 == 0)

// for(let i = 1; i < upper_limit; i++)
// {
//     if(criterion(i)>0)
//         nums.push(criterion(i))
// }

// var _ = require('underscore')
// const arr = _.range(1, upper_limit+1)
// console.log(arr.filter(x => criterion(x)>0))
// console.log(_.range(1, upper_limit+1).filter(x => x % 3 == 0 || x % 5 == 0).reduce((a,b) => a+b, 0))