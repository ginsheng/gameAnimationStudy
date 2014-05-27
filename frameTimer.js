// This "class" help us to determine how much time passes between frames in our game
// according to the pc the game is running at
var FrameTimer = function() {
	this._lastTick = (new Date()).getTime();
}

FrameTimer.prototype = {
	getSeconds: function() {
		var seconds = this._frameSpacing / 100;
		if (isNaN(seconds))
			return 0;
		return seconds;
	},

	tick: function() {
		var currentTick = (new Date()).getTime();
		this._frameSpacing = currentTick - this._lastTick;
		this._lastTick = currentTick;
	},
}