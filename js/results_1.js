$(window).load(function(){

	// ***********************************************
	// Load Data from file
	// ***********************************************
	
	var dataArray;
	
	$.get('data/results_1_example.txt', function(data) {
		dataArray = data.split("\n");
		assignArrayData();
	});
	
	function assignArrayData() {
		// 0 - Logo image
		$('#logo-img').attr('src', 'img/logo/'+dataArray[0]);
		// 1 - Savings gaurantee
		$('#savings-guarantee').html(dataArray[1]);
		// 2 - Spent on electricity this month
		$('#spent-elec-month').html(dataArray[2]);
		// 3 - Your Investment Now
		$('#investment-now').html(dataArray[3]);
		// 4 - Make Money Back Period
		$('#money-back-period').html(dataArray[4]);
		// 5 - 10 year Savings
		$('#amount-10-year').html(dataArray[5]);
		// 6 - Guaranteed Return
		$('#guaranteed-return').html(dataArray[6]);
		
	}
	
	
});