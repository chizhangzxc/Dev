const SUM = 1000

let a = 1
found = false
while(a < SUM/2-1)
{
    for(let b = a; b < SUM/2-1; b++)
    {
        // console.log(a**2,b**2,(SUM-a-b)**2)
        if(a**2+b**2 == (SUM-a-b)**2)
        {
            console.log(a,b,(SUM-a-b), a*b*(SUM-a-b))
            found == true
            break
        }
    }
    a++
}
