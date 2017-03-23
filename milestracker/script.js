

// with jQuery mobile we use instead of document.ready
$(document).on('pageinit', function(){
	// add handler
	$('#submitAdd').on('tap', addRun);
	console.log('submitAdd');

	/*
	* Show all runs on homepage
	*/
	function showRuns(){
		// get runs object
		console.log('showRuns');
		var runs = getRunsObject();

		// check if empty
		if(runs != '' && runs != null){
			for(var i = 0; i < runs.length; i++){
				$('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date<strong>'+
					runs[i]["date"]+
					'<br><strong>Distance </strong>'+
					runs[i]["miles"]+'m</li>');
			}

			
			$('#home').bind('pageinit', function(){
				console.log('bind');
				$('#stats').listview('refresh');
			});
		}
	}

	/*
	* Add arun
	*/
	function addRun(){
		console.log('addRun');

		// get form values
		var miles = $('#addMiles').val();
		var date = $('#addDate').val();

		// create 'run' object
		var run = {
			date: date,
			miles: parseFloat(miles)
		};

		var runs = getRunsObject();

		// add new values to runs array
		runs.push(run);

		alert('Run Added');

		// set sttringify obj to localStorage
		localStorage.setItem('runs', JSON.stringify(runs));

		// redirect
		// window.location.href= "index.html";

		return false;
	}

	function getRunsObject(){
		console.log('get runs object');
		// set runs array
		var runs = new Array();
		// get current runs from localStorage
		var currentRuns = localStorage.getItem('runs');

		// check localStorage
		if(currentRuns != null){
			// set to runs
			var runs = JSON.parse(currentRuns);
		}

		// rturn runs object
		return runs.sort(function(a, b){return new Date(b.date) - new Date(a.date)});
	}

});