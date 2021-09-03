
const reverter = string => string.split("").reverse().join("")

const mergeArrays = (a, b) => {
    return [...a, ...b].sort((a, b) => a - b);
}

console.log( reverter("OI meu nome é MAYCON"));

console.log( mergeArrays([0,3,4,31], [4,6,30]));