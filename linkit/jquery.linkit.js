/*
 * name: LinkIt
 * author: madiskrt
 * version: 0.1.0
 * license: MIT
*/

(function($){
	$.fn.linkIt = function(options){
		//alert(this.html());

		//default settings
		var settings = $.extend({
			//whatever: 'something'
			//whatever: null

			href: null,
			text: null,
			target: '_self'
		}, options);

		//after options we validate
		if(settings.href == null){
			console.log('You need href option for linkIt to work');
			return this;
		}

		return this.each(function(){
			var object = $(this);

			if(settings.text == null){
				settings.text = object.text();
			}
			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
		});

		//what we want to wrap around it
		

		//that's how you access settings values
		//alert(settings.whatever);
	}
}(jQuery));