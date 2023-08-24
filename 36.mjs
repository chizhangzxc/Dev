const UPPER_LIMIT = 1000000
let palindrome = []
for(let i = 1; i < UPPER_LIMIT; i++)
{   
    let num = i.toString()
    if(num != [...num].reverse().join(""))
    {
        continue
    }
    let base_2 = i.toString(2)
    if(base_2 == [...base_2].reverse().join(""))
    {
        palindrome.push(i)
    }
}
console.log(palindrome, palindrome.reduce((a,b) => a+b, 0))