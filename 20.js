
function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}
// const factorial_100 =  "93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000"

const factorial_100 = BigInt(rFact(100))

console.log(rFact.toString().split("").map(x => Number(x)).reduce((a,b) => a+b, 0))
console.log(factorial_100)