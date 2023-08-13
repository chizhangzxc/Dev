const UPPER_LIMIT = 100
var _ = require('underscore')
arr = _.range(1,UPPER_LIMIT+1)
const sum_squared = arr.reduce((num,sum) => num+sum,0)**2
const squared_sum = arr.map(x => x**2).reduce((num,sum) => num+sum)
console.log(sum_squared - squared_sum)