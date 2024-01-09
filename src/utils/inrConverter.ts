export const inrConverter = (num: number) => {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		currencyDisplay: "symbol",
		minimumFractionDigits: 2,
	}).format(num);
};
