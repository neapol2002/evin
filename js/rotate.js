// we need to save the total rotation angle as a global variable 
var current_rotation = 0;

// change CSS transform property on click
document.querySelector("#rotate-button_plus").addEventListener('click', function() {
	// update total rotation
	// if angle is positive, rotation happens clockwise. if negative, rotation happens anti-clockwise.
	current_rotation += 90;

	// rotate clockwise by 90 degrees
	document.querySelector("#sample").style.transform = 'rotate(' + current_rotation + 'deg)';
});

document.querySelector("#rotate-button_minus").addEventListener('click', function() {
	// update total rotation
	// if angle is positive, rotation happens clockwise. if negative, rotation happens anti-clockwise.
	current_rotation -= 90;

	// rotate clockwise by 90 degrees
	document.querySelector("#sample").style.transform = 'rotate(' + current_rotation + 'deg)';
});
