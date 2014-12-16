function displayMessage(messageTextArray) {
	if ( !(document.getElementById('sao-popup')) ) {
		var message = document.createElement('div');
		message.id = 'sao-popup';

		var text = messageContent[0];
		appendHeader(message, text);
		appendBody(message, messageContent);
		appendFooter(message);

		document.body.appendChild(message);
		activateButtons();

		setTimeout(function() {document.getElementById('sao-popup').className = 'active';}, 100);
	}
}

function appendHeader(message, text) {
	var newHeader = document.createElement('header');
	var textNode = document.createTextNode(text);
	newHeader.appendChild(textNode);
	message.appendChild(newHeader);
}
function appendBody(message, textArray) {
	var newBody = document.createElement('section');
	for (index = 1; index < textArray.length; ++index) {
		var paragraph = document.createElement('p');
		var textNode = document.createTextNode(textArray[index]);
		paragraph.appendChild(textNode);
		newBody.appendChild(paragraph);
		message.appendChild(newBody);
	}
}
function appendFooter(message) {
	var newFooter = document.createElement('footer');
	var newOButton = document.createElement('div');
	newOButton.id = 'sao-o';
	var newOButtonInner = document.createElement('div');
	var newOButtonSymbol = document.createElement('div');
	newOButtonInner.appendChild(newOButtonSymbol);
	newOButton.appendChild(newOButtonInner);
	var newXButton = document.createElement('div');
	newXButton.id = 'sao-x';
	var newXButtonInner = document.createElement('div');
	var newXButtonSymbol1 = document.createElement('div');
	var newXButtonSymbol2 = document.createElement('div');
	newXButtonInner.appendChild(newXButtonSymbol2);
	newXButtonInner.appendChild(newXButtonSymbol1);
	newXButton.appendChild(newXButtonInner);

	newFooter.appendChild(newOButton);
	newFooter.appendChild(newXButton);
	message.appendChild(newFooter);
}
function activateButtons() {
	var xButton = document.getElementById('sao-x');

	xButton.addEventListener('click', function(){
		popup = document.getElementById('sao-popup');
		document.getElementById('sao-popup').className = '';
		setTimeout(function() {popup.parentNode.removeChild(popup);}, 500);
		
	});
}