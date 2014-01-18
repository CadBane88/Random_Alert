var sound1 = new Audio("sound1.mp3");

function alert1()
{
	setTimeout(function() {
		sound1.play();
		alert1();
	},1000);
}