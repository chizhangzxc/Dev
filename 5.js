var _ = require("underscore")
divisor = _.range(1, 21)

let num = 1
while(true)
{
    if (Math.max(...divisor.map(x => num%x)) == 0)
    {
        break
    }
    num++
}
console.log(num)