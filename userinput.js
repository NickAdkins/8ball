var messages = ["Did you seriously just ask me that", "If you have to ask, you don't need to know", "You bother me", "Lets hope your teacher is asking the questions", "HAHAHA", "Nope", "You thought I would know something.", "Good luck on that.", "Okay, I'm done"];



var enterButton = document.getElementById("submit");

enterButton.onclick = function () {
	var message = document.getElementById("input1");
	var random = Math.floor(Math.random() * messages.length);
	message.innerHTML = messages[random];
	console.log(message)
};