const UPPER_LIMIT = 1000
let solutions = Array(UPPER_LIMIT).fill(0)
for(let perimeter = 1; perimeter <= 1000; perimeter++)
{
    for(let a  = 1; a < Math.floor(perimeter/3); a++)
    {
        for(let b = a; b < (perimeter-a)/2; b++)
        {
            if(a**2 + b**2 == (perimeter-a-b)**2)
            {
                solutions[perimeter-1]++
            }
        }
    }
}

console.log(solutions.indexOf(Math.max(...solutions))+1)