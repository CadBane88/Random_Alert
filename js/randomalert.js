var sound1 = new Audio("sound1.mp3");
var sound2 = new Audio("sound2.mp3");

// Startup
/////////////////

$(document).ready(function() {

	if(localStorage.getItem("min_time1") != null)
	{
		alert(localStorage.getItem("min_time1"));
		$('#mintime1').slider("option", "value", parseInt(localStorage.getItem("min_time1"),10) );
	}
	
});

/////////////////
// End startup


// Alert Functions
////////////////////////
function alert1()
{
	// Get values from sliders in app
	var mintime1 = parseInt($('#mintime1').val(),10) * 1000;
	var maxtime1 = parseInt($('#maxtime1').val(),10) * 1000;
	var temp;
	
	// Disable start button
	$('#start1').attr('disabled','true');

	var timeout_length = Math.floor((Math.random()*(maxtime1 - mintime1)) + mintime1);
	setTimeout(function() {
		
		// Get values from sliders in app
		mintime1 = parseInt($('#mintime1').val(),10) * 1000;
		maxtime1 = parseInt($('#maxtime1').val(),10) * 1000;
		
		// If minimum time is greater than maximum time, swap values
		if(mintime1 > maxtime1)
		{
			temp = mintime1;
			minetime1 =maxtime1;
			maxtime1 = temp;	
		}
		
		sound1.play();
		alert1();
	},timeout_length);
}

function alert2()
{
	// Get values from sliders in app
	var mintime2 = parseInt($('#mintime2').val(),10) * 1000;
	var maxtime2 = parseInt($('#maxtime2').val(),10) * 1000;
	var temp;

	// Disable start button
	$('#start2').attr('disabled','true');

	var timeout_length = Math.floor((Math.random()*(maxtime2 - mintime2)) + mintime1);
	setTimeout(function() {
		
		// Get values from sliders in app
		mintime1 = parseInt($('#mintime2').val(),10) * 1000;
		maxtime1 = parseInt($('#maxtime2').val(),10) * 1000;
		
		// If minimum time is greater than maximum time, swap values
		if(mintime2 > maxtime2)
		{
			temp = mintime2;
			minetime2 =maxtime2;
			maxtime2 = temp;	
		}
		
		sound2.play();
		alert2();
	},timeout_length);
}
///////////////////////
// End alert functions


// Local storage functions
///////////////////////

function store_mintime1()
{
	localStorage.setItem("min_time1",$('#mintime1').val());
}

/////////////////////
// End local storage functions