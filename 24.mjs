let NUMBER = 1000000
let digits = [0,1,2,3,4,5,6,7,8,9]
const rFact = function(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}

let nums = []
let check = true
for(let i = 9; i>=0; i--)
{
    nums.push(digits[Math.floor(NUMBER / rFact(i))])
    digits.splice(digits.indexOf(digits[Math.floor(NUMBER / rFact(i))]),1)
    // if(i == 0) {NUMBER = NUMBER-1}
    if(check){
        NUMBER -= 1
        check = false
    }
    NUMBER = (NUMBER) % rFact(i)  
    console.log(digits, NUMBER)

}
console.log(nums)
console.log(1000000%rFact(9))