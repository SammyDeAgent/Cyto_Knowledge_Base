/*
  Might need to read the math docs and equation beforehand
*/

// nCr Combinations of probability
function combination(i, r) {
	return factorial(i) / (factorial(r) * factorial(i - r));
}

// Factorial - recursive
function factorial(n) {
	if (n == 1) return n;
	return n * factorial(n - 1);
}

// Mean
function mean(arr) {
	return (
		arr.reduce((a, b) => {
			return a + b;
		}) / arr.length
	);
}

// Standard Deviation
function stdDev(arr) {
	let mu = mean(arr);
	let length = arr.length;
	return Math.pow(
		arr
			.map((item) => Math.pow(item - mu, 2))
			.reduce((a, b) => {
				return a + b;
			}) / length,
		0.5
	);
}

// Binomial Distribution
function binomial_dis(case_length, prob_b, prob_g) {
	let arr = [];
	for (let i = 0; i <= case_length; i++) {
		let xb = i == 0 ? 1 : Math.pow(prob_b, i);
		let xg = case_length - i == 0 ? 1 : Math.pow(prob_g, case_length - i);
		arr.push(combination(case_length, i) * xb * xg);
	}
	return arr;
}

// Geometric Distribution
function geometric_dis(size, prob) {
	let arr = [];
	for (let i = 1; i <= size; i++) {
		arr.push(prob * Math.pow(1 - prob, i - 1));
	}
	return arr;
}

// Poisson Distribution -> Special case: VAR(X) = VAR(X) + E(X)^2
function poisson_dis(prob_k, lambda) {
	return (
		(Math.pow(lambda, prob_k) * Math.pow(Math.E, -lambda)) / factorial(prob_k)
	);
}

// Normal Distribution
function normal_dis(mean, variance, x) {
	let stdDev = Math.sqrt(variance);
	return (
		(1 / (stdDev * Math.sqrt(2 * Math.PI))) *
		Math.pow(Math.E, -(Math.pow(x - mean, 2) / (2 * variance)))
	);
}

// Normal cummalative -> Starting from the left of a bell curve
function cummalative_normal(start, end, step, mean, variance) {
	let cumm = 0;
	for (let i = start; i <= end; i += step) {
		cumm += normal_dis(mean, variance, i) * step;
	}
	return cumm;
}

// Covariance between 2 sets of number
function covariance(size, X, Y, meanX, meanY) {
	let sum = 0;
	for (let i = 0; i < size; i++) {
		sum += (X[i] - meanX) * (Y[i] - meanY);
	}
	return (1 / size) * sum;
}

// Pearson Correlation Coefficient
function pearson_correlation(cov, stdDevX, stdDevY) {
	return cov / (stdDevX * stdDevY);
}

// Assigning ranks to a set for spearman rank correlation
function spearman_rank_assign(arr) {
	let size = arr.length;
	let map = {};

	let temp = [...arr];
	temp = temp.sort((a, b) => a - b);
	temp = new Set(temp);

	let rank = 1;
	temp.forEach((item) => {
		map[item] = rank;
		rank++;
	});

	return arr.map((item) => map[item]);
}

// Spearman's rank Correlation Coefficient
function spearman_rank_correlation(size, X, Y) {
	let rankX = spearman_rank_assign(X);
	let rankY = spearman_rank_assign(Y);
	let mean_rankX = mean(rankX);
	let mean_rankY = mean(rankY);
	let sig_rankX = stdDev(rankX);
	let sig_rankY = stdDev(rankY);
	return pearson_correlation(
		covariance(size, rankX, rankY, mean_rankX, mean_rankY),
		sig_rankX,
		sig_rankY
	);
}

// Regression -> Y = a + bx; This function returns Y;
function linear_regression(a, b, x) {
	return a + b * x;
}

// Regression -> Y = a + bx; a = meanY - b*meanX; This function finds a;
function least_square_a(meanX, meanY, b) {
	return meanY - meanX * b;
}

// Regression -> Y = a + bx; a = meanY - b*meanX; This function finds b;
function least_square_b(size, X, Y) {
	let meanX = mean(X);
	let meanY = mean(Y);
	let sig_X = stdDev(X);
	let sig_Y = stdDev(Y);
	return (
		pearson_correlation(covariance(size, X, Y, meanX, meanY), sig_X, sig_Y) *
		(sig_Y / sig_X)
	);
}
