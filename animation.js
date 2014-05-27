// 'Animation' class takes a definition and handles several things on it
var Animation = function(data, sprites) {
	this.load(data);
	this._sprites = sprites;
}

Animation.prototype = {
	_frames: [],
	_frame: null,
	_frameDuration: 0,

	load: function(data) {
		this._frames = data;
		// initialize the first frame
		this._frameIndex = 0;
		this._frameDuration = data[0].time;
	},

	animate: function(deltatime) {
		// Reduce time passed from the duration to show a frame
		this._frameDuration -= deltatime;

		// When the display duration has passed
		if (this._frameDuration <= 0) {
			// change to the next frame... Or the first one, if ran out of frames
			this._frameIndex ++;
			if (this._frameIndex == this._frames.length)
				this._frameIndex = 0;

			// change duration to Duration of new frame
			this._frameDuration = this._frames[this._frameIndex].time;
		}
	},

	getSprite: function() {
		// Return the sprite for the current frame
		return this._sprites.getOffSet(this._frames[this._frameIndex].sprite);
	}

}