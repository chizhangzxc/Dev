let digits = [1, 10, 100, 1000, 10000, 100000, 1000000]
let s = ""
let num = 1
while(s.length < digits[digits.length-1])
{
    s = s + num
    num++
}

console.log(digits.map(x => s[x-1]).reduce((a,b) => a*b, 1))