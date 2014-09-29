var K_DEFAULT = 32;

var getExpected = function (a, b) {
	return 1 / (1 + Math.pow(10, (b - a) / 400));
};

var getExpectedScore = function (ratingA, ratingB) {
	return {
		Ea: getExpected(ratingA, ratingB), 
		Eb: getExpected(ratingB, ratingA)
	};
};

var updateRating = function (currentRating, actualScore, estimatedScore, kfactor) {
	if (arguments.length < 3) throw new Error("Need at least 3 arguments, currentRating, actualScore and estimatedScore");

	var accumulatedScore = 0;
	if (Array.isArray(actualScore)) {
		actualScore.forEach(function (s) {
			accumulatedScore += s;
		});
	}
	else {
		accumulatedScore = Number(actualScore);
	}

	if (!kfactor) {
		kfactor = K_DEFAULT;
	}

	return currentRating + kfactor * (accumulatedScore - estimatedScore);
};

module.exports = {
	getExpectedScore: getExpectedScore,
	updateRating: updateRating
};
