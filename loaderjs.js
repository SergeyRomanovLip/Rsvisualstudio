// JavaScript Document
document.body.innerHTML += '<div class="loader" id="loader"><img src="img/shortcuts/load.gif" alt="Loading..." /></div>';
var fadein = document.querySelector(".loader");
fadein.className += " fadeIn";

window.addEventListener("load", function () 
	{
	const loader = document.querySelector(".loader");
	loader.className += " hidden"; // class "loader hidden"

	setTimeout(function end(){
	var end = document.getElementById("loader");
	end.parentNode.removeChild(end);
	},2000)
	
	});