const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let highest = amdPrices[0]; 

for (let i = 0; i < amdPrices.length; i++) {
  if (amdPrices[i] > highest) {
    highest = amdPrices[i]; 
  }
}

console.log("The highest stock price is", highest);
