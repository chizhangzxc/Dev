var _ = require("underscore")
const UPPER_LIMIT = 2000000
let arr = _.range(2, UPPER_LIMIT+1)
prime = []
while(arr.length>0)
{
    prime.push(arr[0])
    arr = arr.filter(x => x%prime[prime.length-1]!=0)
}

console.log(prime.reduce((sum,num) => sum+num,0))
