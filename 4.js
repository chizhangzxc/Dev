var _ = require('underscore')

let INT1 = 999
let INT2 = 999

let nums = []
for(let i = 1; i <= INT1; i++)
{
    for(let j = 1; j <= INT2; j++)
    {
        let s = (i*j).toString()
        if(s == s.split("").reverse().join(""))
        {
            if(_.findIndex(nums, (x) => (x == s)) < 0)
                nums.push(i*j)
        }
    }
}
console.log(_.max(nums))

