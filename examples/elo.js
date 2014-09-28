var elorating = require('../elorating');

var expectedScores = elorating.getExpectedScore(1000, 1500);
console.log(expectedScores.Ea, expectedScores.Eb);

var newRatingA = elorating.updateRating(1000, 1, expectedScores.Ea);
var newRatingB = elorating.updateRating(1500, 0, expectedScores.Eb, 16);
console.log(newRatingA, newRatingB);