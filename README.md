# Elo rating
Node module to calculate Elo rating. Supports individual K-factors for each player.

## Installation
```
> npm install elorating
```

## Usage
```javascript
var elorating = require('elorating');

var rating_playerA = 1000;
var rating_playerB = 1500;

// Get expected scores. Current rating of player A and player B as parameters.
var expectedScore = elorating.getExpectedScore(rating_playerA, rating_playerB);
console.log('Expected score player A: ' + expectedScore.Ea);
console.log('Expected score player B: ' + expectedScore.Eb);

// Update rating. 
// Takes current rating of player, actual score (1 for win, 0.5 for draw, 0 for loss) 
// and expected score as parameters
rating_playerA = elorating.updateRating(rating_playerA, 1, expectedScore.Ea);

// You may also specify an array of actual scores if you want to calculate for a tournament.
// Theres is also a optional parameter to specify the K-factor. Default is 32
rating_playerB = elorating.updateRating(rating_playerB, [1, 0, 0.5, 1], expectedScore.Eb, 16);
```

