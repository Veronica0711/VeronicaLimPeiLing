const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
const priceData = {
low : '190.15',
high : '194.21',
open : '191.07',
close : '192.44',
volume : '129000',
};

if (priceData.close > priceData.open) {
  if (priceData.volume > 100000) {
    console.log('Strong Bullish');
  } else {
    console.log('Bullish');
  }
} else if (priceData.close < priceData.open) {
  if (priceDate.volume > 10000) {
    console.log('Strong Bearish');
  } else {
    console.log('Bearish');
  }
} else {
  console.log('Neutral');
}
