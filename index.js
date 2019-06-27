const number = 30.55
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.round(number))
console.log(Math.trunc(number))

const Newnumber = `30.55`

console.log(parseInt(Newnumber));
console.log(parseFloat(Newnumber));

console.log(Math.random());

const numbers = [1, 2, 3, 12, 32, 500, 99, 65, 987]
const Maxnumbers = numbers.reduce(function (a, b) {
    return Math.max(a, b)
})
const Minnumbers = numbers.reduce(function (a, b) {
    return Math.min(a, b)
})
console.log(Maxnumbers);
console.log(Minnumbers);


console.log(Math.max.apply(numbers));
console.log(Math.min.apply(numbers));

console.log(Math.pow(numbers[5], numbers[2]));

