var messageIcon = document.getElementById('message-icon');
var messageContent = ['Message','Heathcliff has challenged you to a duel.','Type: 1 vs 1'];

messageIcon.addEventListener('click', function(){
	displayMessage(messageContent);
});