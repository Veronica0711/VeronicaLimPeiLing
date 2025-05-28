const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
const Data = [
	{
		open: "190.15",
		high: "196.21",
		low: "191.07",
		close: "194.44"
	},
	{
		open: "193.61",
		high: "195.89",
		low: "190.12",
		close: "193.40"
	}
]	
const averagePrice = Data.reduce((sum, { close }) => sum + parseFloat(close), 0) / Data.length;
console.log(`Average closing price of MSFT is $${averagePrice.toFixed(2)}`);
