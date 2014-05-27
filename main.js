function presto() {
	var timer = new FrameTimer();

	timer.tick();

	// first we determine our frame size and
	// each frame location into spritesheet
	var linkSprites = new SpriteSheet({
		_width: 24,
		_height: 24,
		_sprites: [
			{ _name: 'walk_left_1', _x: 0, _y: 0},
			{ _name: 'walk_left_2', _x: 1, _y: 0},
			{ _name: 'walk_left_3', _x: 2, _y: 0},
			{ _name: 'walk_left_4', _x: 3, _y: 0},
			{ _name: 'walk_left_5', _x: 4, _y: 0},
			{ _name: 'walk_left_6', _x: 5, _y: 0},
		],
	});

	// creating a canvas where to draw the player
	var ctx = set_canvas();

	// Setting the frames which compound a specific animation
	// (in this case, a walkig to he left)
	// and duration for every frame in this amination
	var linkWalkLeftAnimation = new Animation([
		{ sprite: 'walk_left_1', time: 0.4 },
		{ sprite: 'walk_left_2', time: 0.4 },
		{ sprite: 'walk_left_3', time: 0.4 },
		{ sprite: 'walk_left_4', time: 0.4 },
		{ sprite: 'walk_left_5', time: 0.4 },
		{ sprite: 'walk_left_6', time: 0.4 },
		], linkSprites);

	var linkImage = new Image();

	// Finally we start animation and give it a
	// interval (the smaller number, the quickest movement)
	var xx = 480;
	linkImage.onload = function() {
		setInterval(function() {
			linkWalkLeftAnimation.animate(timer.getSeconds());
			var frame = linkWalkLeftAnimation.getSprite();
			ctx.clearRect(0,0, 480, 320);
			ctx.drawImage(linkImage, frame._x, frame._y, frame._width, frame._height, xx, 100, 72, 72);
			xx = (xx < (frame._width * -1) ) ? 480 : xx - 7;
			timer.tick();
		}, 85);
	};

	linkImage.src = 'linky.gif';

}


function set_canvas() {
	field = document.createElement('canvas');
	field.id = 'field';
	field.width = 480;
	field.height = 320;
	field.style.border = '#008000 1px solid';

	document.body.appendChild(field);

	return field.getContext('2d');
}