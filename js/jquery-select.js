$(document).ready(function () {
	// Reset Search Form
	$('#btn-clear').click(function() {
		$('#form-search')[0].reset();
			return false;
	});

	// Grab Text from Search Box and Encode It
	$('#btn-run').click(function () {
		var urlPart1 = 'https://googlecloud.looker.com/embed/dashboards/226?Log%20Search=%22'
		var urlPart2 = '%22&filter_config=%7B%22Log%20Search%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22'
		var urlPart3 = '%22%7D,%7B%7D%5D,%22id%22:1%7D%5D%7D'
		var textInput = $("#search-box").val();
		var textInputEsc1 = textInput.replace(/\\/g,"\\\\");
		var textInputEsc2 = textInputEsc1.replace(/"/g, '\\"');
		var encodedUrl = encodeURIComponent(textInputEsc2);
		var urlFinal = urlPart1 + encodedUrl + urlPart2 + encodedUrl + urlPart3
		$('#looker-frame').attr('src', urlFinal);
			return false; 
	});

});
