const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`number: ${number}, index: ${index}`);
});

const res = numbers.map((number) => {
  return (number * 2);
});
console.log(res);

const res2 = numbers.filter((number) => {
    return number % 2 === 0;
})
console.log(res2);

const res3 = numbers.reduce((acc, number) => {
    return acc + number;
}, 0);
console.log(res3);