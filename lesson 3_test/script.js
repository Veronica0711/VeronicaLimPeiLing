let open = 82.71
let close = 81.90

if (open > close) {
	console.log("Bullish");
} else if (open < close) {
	console.log("Bearish");
} else {
	console.log("Neutral");
}