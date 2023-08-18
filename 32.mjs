import { uniq } from "underscore"

const isSameSet = (s1, s2) => {
    if (s1.size !== s2.size) {
      return false
    }
    return [...s1].every(i => s2.has(i))
  }

let digits = new Set((123456789).toString().split(""))
let nums = []

for(let multiplicand = 2; multiplicand <= 99; multiplicand++)
{
    for(let product = 1000; product <= 9999; product++)
    {
        if(new Set(product.toString()).size == Math.ceil(Math.log10(product)))
        {
            if(product % multiplicand == 0)
            {
                let multiplier = product / multiplicand
                let full_digis = multiplier.toString() + multiplicand.toString() + product.toString()
                // if(isSameSet(digits, new Set(multiplier.toString() + product.toString() + multiplicand.toString()) == digits))
                if(new Set(full_digis).size == 9 & 
                Math.min(...full_digis.split("")) == 1 &
                Math.max(...full_digis.split("")) == 9)
                {
                    nums.push(product)
                }
            }
        }
    }
}
console.log(uniq(nums), uniq(nums).reduce((a,b) => a+b, 0))
