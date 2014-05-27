// This class searches on a spriteSheet to draw it on screen
// the basic idea is to delegate all the work to search for a specific
// sprite into the spritesheet to this class and use it as we need it
var SpriteSheet = function(data) {
	this.load(data);
}

SpriteSheet.prototype = {
	_sprites: [],
	_width: 0,
	_height: 0,

	load: function(data) {
		this._height = data._height;
		this._width = data._width;
		this._sprites = data._sprites;
	},

	getOffSet: function(spriteName) {
		// Paseamos por todos los sprites hasta encontrar el que queremos
		for (var i = 0, len = this._sprites.length; i < len; i++ ) {
			var sprite = this._sprites[i];
			if (sprite._name == spriteName) {
				return {
					_x: (i * this._width),// + (sprite._x||0),
					_y: (sprite._y||0),
					_width: this._width,
					_height: this._height,
				};
			}

		}
		return null;
	},

}