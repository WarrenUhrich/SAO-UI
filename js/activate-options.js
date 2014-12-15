active = false;

function activateOptions(sY, eY) {
	var options = document.getElementById('sao-options');
	var dragDistance = 50;

	if ( (sY + dragDistance) < eY ) {

		if ( active == false ) {
			options.className = 'active';
			active = true;
		}

	} else if ( (sY - dragDistance) > eY ) {
		if ( active == true ) {
			options.className = '';
			active = false;
		}
	}
}