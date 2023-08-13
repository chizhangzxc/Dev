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
// const sum_nums = (arr) => arr.reduce((sum, num) => sum + num, 0)
// console.log(sum_nums(nums))

const array1 = [1, 4, 9, 16]

const sr5 = Math.sqrt(5)
const psi 