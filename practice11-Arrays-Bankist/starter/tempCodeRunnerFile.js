const scores = [88, 95, 70, 100];
const max = scores.reduce((a, b) => (a > b ? a : b));
console.log(max);