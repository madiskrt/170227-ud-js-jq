$(document).ready(function(){
	$('nav a').on('click', function(){
		//current class assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');

		//set heading text
		$('h1#heading').text($(this).text());
	
		//get a filter link text
		var category = $(this).text().toLowerCase().replace(' ','-');

		//remove hidden class if 'all-projects' is selected
		if(category == 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		//we want to take away the default behaviour (link)
		return false;
	});
	
	//overlay effect
	$('ul#gallery li').on('mouseenter', function(){
		//get data attribute values

		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');
		//console.log(desc);
		//console.log(title);

		//validation
		if(desc == null){
			desc = 'Click to enlarge';
		}
		if(title == null){
			title = '';
		}

		//create overlay div
		$(this).append('<div class="overlay"></div>');
		
		//get overlay div
		var overlay = $(this).children('.overlay');
		
		//add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		
		// fade in overlay
		overlay.fadeIn(500);

	});

	// mouseleave overlay
	$('ul#gallery li').on('mouseleave', function(){
		//create overlay div
		$(this).append('<div class="overlay"></div>');
		
		//get overlay div
		var overlay = $(this).children('.overlay');

		// fade out overlay
		overlay.fadeOut(300);
	});	
	
});