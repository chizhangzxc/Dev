const denominator = 990
let numerator  = 1
let digits = []
let recurring_cycle = []
let max_recurring = []
while(true)
{
  let last_digit = Math.floor(10*numerator / denominator)
  digits.push(last_digit)
  recurring_cycle.push(last_digit)
  let regex = new RegExp(recurring_cycle.join(""), "g")
  // console.log(digits.join("").match(regex).length)
  // let size = digits.join("").match(regex).length
  if(digits.join("").match(regex).length == 1)
  {
    // if(recurring_cycle.length > 1)
    // {
    //   recurring_cycle.pop()
    //   break
    // }
    recurring_cycle = [last_digit]

  }
  else
  {
    console.log(digits.join("").match(regex).length, digits.length, digits.slice(digits.length-recurring_cycle.length, digits.length))
  }

  numerator  = 10 * numerator % denominator
  if(numerator == 0)
  {
    break
  }
  if(recurring_cycle.length == denominator - 1)
  {
    break
  }
  if(max_recurring.length < recurring_cycle.length)
  {
    max_recurring = recurring_cycle
  }
}
// recurring_cycle.pop()
console.log(digits, recurring_cycle)

// const recur = function(n)
// {
//   return((10n**(n-1n)-1n)/n)
// }
// console.log((recur(89n)))
