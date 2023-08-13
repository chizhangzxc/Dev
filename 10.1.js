var _ = require("underscore")
const UPPER_LIMIT = 2000000
let arr = _.range(2, UPPER_LIMIT+1)
for(let i = 2; i <= Math.sqrt(UPPER_LIMIT); i++)
{
    arr = arr.filter(x => x%i!=0)
}
console.log(arr.reduce((num,sum) => sum+num, 0))