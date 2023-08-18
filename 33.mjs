let numerator = 1
let denominator = 1
let nums = []
for( let denominator = 11; denominator < 100; denominator++)
{
    if(denominator % 10 == 0)
    {
        continue
    }
    for(let numerator = 11; numerator < denominator; numerator++)
    {
        if(numerator % 10 == 0)
        {
            continue
        }
        let common = denominator.toString().split("").filter(x => numerator.toString().split("").includes(x))
        if(common.length == 0)
        {
            continue
        }
        else if(common.length == 1)
        {
            let new_denominator = denominator.toString().split("").filter(x => x != common)
            let new_numerator = numerator.toString().split("").filter(x => x != common)
            if(new_denominator.length == 0 | new_numerator.length == 0)
            {
                continue
            }
            else
            {
                if(numerator/denominator == new_numerator/new_denominator)
                {
                    console.log(numerator, denominator, new_numerator, new_denominator, numerator/denominator)
                    nums.push(numerator/denominator)
                }
            }
        }
    }
}

console.log(1/nums.reduce((a,b) => a*b, 1))