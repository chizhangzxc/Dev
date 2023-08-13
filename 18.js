const { forEach } = require("underscore")

const tree = [
[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20, 4, 82, 47, 65],
[19, 1, 23, 75, 3, 34],
[88, 2, 77, 73, 7, 63, 67],
[99, 65, 4, 28, 6, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
]
trace = [0]
// nums = [75]
// for(let i = 1; i < tree.length; i++)
// {
//     arr = tree[i].slice([trace[trace.length-1]], trace[trace.length-1]+2)
//     trace.push(trace[trace.length-1]+arr.indexOf(Math.max(...arr)))
//     nums.push(Math.max(...arr))
//     console.log(arr, trace[trace.length-1], trace[trace.length-1]+2)
    // console.log(arr, trace[trace.length-1]+arr.indexOf(Math.max(...arr)), Math.max(...arr))
// }
// console.log(trace, nums, nums.reduce((a,b) => a+b, 0))

// tree_trace = []

// for(let i = 1; i < tree.length; i++){
//     tree_trace[i] = tree[i].map(x => {
//         [x]
//         console.log(x)
//     })
// }


// console.log(tree_trace[8])

// for(let i = tree.length-2; i >=0; i--)
// {
//     for(let j = 0; j < tree[i].length; j++)
//     {
//         Array(tree[i+1][j])
//         if(tree[i+1][j].reduce((a,b) => a+b, 0) >= tree[[i+1][j+1]].reduce((a,b) => a+b, 0))
//         {
//             tree[i][j].push(tree[i+1][j])
//         }
//         else
//         {
//             tree[i][j].push(tree[i+1][j])
//         }
//     }
// }

for(let i = tree.length-2; i >=0; i--)
{
    for(let j = 0; j < tree[i].length; j++)
    {
        if(tree[i+1][j] >= tree[i+1][j+1])
        {
            tree[i][j] += tree[i+1][j]
        }
        else
        {
            tree[i][j] += tree[i+1][j+1]
        }
    }
}
console.log(tree[0])