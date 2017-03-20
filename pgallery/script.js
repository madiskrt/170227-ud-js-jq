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
	
	
});