(function() {
	var randomWords  = ["MOTIVATED!", "COOL!", "AMAZING!", "HILARIOUS!", "BEAUTIFUL!", "HAPPY!","ALIVE!", "ADMIRABLE!", "INCREDIBLE!", "GENUINE!", "STRONG!", "POWERFUL!", "CAPABLE!", "GOOD AT PROGRAMMING!"];
	var arrColor     = ["#45c1bf", "#f0593e", "#aeacd4", "#bdd630", "#4479bd", "#f5b11e", "#70DB70", "#FFA347", "#A34747", "#FFFF66", "#AD5CFF"];
	var wordSelector = "#changingword";
	var speed 			 = 200;

	function randomNumber(highest) {
		return Math.floor(Math.random() * highest);
	};

	function generatingWords() {
		var randomIndex = randomNumber(randomWords.length);

		$(wordSelector).fadeOut(speed, function() {
			$(wordSelector).html(randomWords[randomIndex]);	
			$(wordSelector).fadeIn(speed);
		});
	};

	function changingColors() {
		var randomIndex = randomNumber(arrColor.length);

		$(wordSelector).fadeOut(speed, function() {
			$(wordSelector).css("color", arrColor[randomIndex]);	
			$(wordSelector).fadeIn(speed);
		});
	};

	setInterval(generatingWords, 2000);
	setInterval(changingColors, 2000);
})();


