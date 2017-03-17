//accordion
var action="click";
var speed="500";

$(document).ready(function(){
	//li is not a class but an element so no dot
	$('li.q').on(action, function(){
		//we want next element, li class a:
		$(this).next().slideToggle(speed)
			.siblings('li.a').slideUp();
		//get image for active question
		var img = $(this).children('img');
		//remove the rotate class for all images exept the active
		$('img').not(img).removeClass('rotate');
		//toggle rotate class
		img.toggleClass('rotate');	
	})
});