//searchbar handler

$(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');

	//focus event handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width: '100%'
		},400, function(){
			console.log('focus animate');
		});
		$(icon).animate({
			right: '10px'
		}, 400);
	});

	//blur event handler
	$(searchField).on('blur', function(){
		if(searchField.val() == ''){
			$(searchField).animate({
				width: '45%'
			}, 400, function(){});
			$(icon).animate({
				right: '360px'
			}, 400, function(){});
		}
	});


	$('#search-form').submit(function(e){
		e.preventDefault();
	});
});

function search(){
	//clear results
	$('#results').html('');
	$('#buttons').html('');

	//get form input
	q = $('#query').val();

	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			type: 'video',
			key: 'AIzaSyBrSLZOyOVMIlzkN4eeFlR7OR2h_ggWobI'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				console.log(data);

				$.each(data.items, function(i, item){
					var output = getOutput(item);

					//display results
					$('#results').append(output);
				}
			}
		);
}