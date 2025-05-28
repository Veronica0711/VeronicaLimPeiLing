const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
//Find the average first
let averagePrice = amdPrices.reduce((sum, price) => sum + price, 0) / amdPrices.length;

console.log(`Total Average $${averagePrice.toFixed(2)}`);
//Find above Average
const 