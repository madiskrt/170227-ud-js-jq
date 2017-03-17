$(document).ready(function(){
	$('#submit').on('click', function(){
		var name = $('#name').val();
		var shout = $('#shout').val();
		var date = getDate();
		var dataString = 'name=' +name +'&shout=' + shout + '&date=' + date; //we'll use ajax to insert this into shoutbox.php file

		//validation
		if(name =='' || shout == ''){
			alert('Please fill in your name and shout');
		} else {
			//here we do ajax request
			$.ajax({

				type:"POST",
				url:"../170227-ud-js-jq/shoutbox.php",
				data: dataString,
				cache: false,
				success: function(html){
					$('#shouts ul').prepend(html);
				}
			});
		}

		return false; //we don't want the form to actually submit
	});
});

function getDate(){
	var date;
	date = new Date();
	date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);
return date;

}