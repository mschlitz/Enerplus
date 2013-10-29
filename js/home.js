$(window).load(function(){

	// ***********************************************
	// Load Data from file
	// ***********************************************
	
	var dataArray;
	
	$.get('data/home_example.txt', function(data) {
		dataArray = data.split("\n");
		assignArrayData();
	});
	
	function assignArrayData() {
		// 0 - Logo image
		$('#logo-img').attr('src', 'img/logo/'+dataArray[0]);
		// 1 - House image
		$('#house-img img').attr('src', 'img/house/'+dataArray[1]);
		// 2 - Address desc
		$('#address1').html(dataArray[2]);
		// 3 - Address house address
		$('#address2').html(dataArray[3]);
		// 4 - Address city stat zip
		$('#address3').html(dataArray[4]);
		// 5 - Installed on data
		$('#installed-on').html(dataArray[5]);
		// 6 - Your home consumes
		$('#home-consumes').html(dataArray[6]);
		// 7 - That means you spend
		$('#home-spent').html(dataArray[7]);
		// 8 - Guaranteed savings 1
		$('#guaranteed-savings1').html(dataArray[8]);
		// 9 - Guaranteed savings 2
		$('#guaranteed-savings2').html(dataArray[9]);
		
	}
	
	
});