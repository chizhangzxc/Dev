const arr1 = [1, 5, 7, 5, 13, 8, 1, 7, 3, 8, 5, 2, 1, 5, 7];
const arr2 = [1, 5, 7, 5, 13, 8, 1, 7, 3, 8, 5, 2, 4, 5, 7];

function patternFound(arr) 
{
var newArray = arr.map(function(o, i) {
    if (i < arr.length - 1) {
        return arr[i] + "|" + arr[i + 1];
    }
    })
    .sort();

newArray = newArray.filter(function(o, i) {
    if (i < arr.length - 1) {
        return (o == newArray[i + 1]);
    }
    });

return (newArray.map(x => x[0]).join("") + newArray[newArray.length-1].slice(-1));
}
// console.log(patternFound(arr1).map(x => x[0]).join("") + patternFound(arr1)[patternFound(arr1).length-1].slice(-1))

console.log(patternFound(arr1))