$(document).ready(function() {

	// ***********************************************
	// Initiate Chart Code
	// ***********************************************
	
	var chartDataArray,
		arrayChart1,
		arrayChart2,
		arrayChart3,
		arrayChart4;
	
	// Import data from file
	$.get('data/chart.txt', function(data) {
		chartDataArray = data.split("\n"); // seperate data by line
		
		arrayChart1 = chartDataArray[3].split(","); // Line 4 - Months of the year
		arrayChart2 = chartDataArray[4].split(","); // Line 5 - Price data
		arrayChart3 = chartDataArray[5].split(","); // Line 6 - Kwh data
		
		assignChartArrayData();
		
		// this must be called after the data above is set
		// google.setOnLoadCallback(drawVisualization); // already using document.ready
		drawVisualization();
		
		// Chart div must not have display: none until drawn to have correctly sized elements
		$('#popup-chart').css('visibility', 'visible');
		// hide it the normal way after above is loaded
		$('#popup-chart').hide();
	});

	
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data, and draws it.
	function drawVisualization() {
		
		// Create and populate the data table.
		var data = google.visualization.arrayToDataTable([
			[arrayChart1[0],  arrayChart2[0],  arrayChart3[0]],	// First line is title/type
			[arrayChart1[1],  parseFloat(arrayChart2[1]),  parseFloat(arrayChart3[1])], 	// Follow lines are data of each series
			[arrayChart1[2],  parseFloat(arrayChart2[2]),  parseFloat(arrayChart3[2])],
			[arrayChart1[3],  parseFloat(arrayChart2[3]),  parseFloat(arrayChart3[3])],
			[arrayChart1[4],  parseFloat(arrayChart2[4]),  parseFloat(arrayChart3[4])],
			[arrayChart1[5],  parseFloat(arrayChart2[5]),  parseFloat(arrayChart3[5])],
			[arrayChart1[6],  parseFloat(arrayChart2[6]),  parseFloat(arrayChart3[6])],
			[arrayChart1[7],  parseFloat(arrayChart2[7]),  parseFloat(arrayChart3[7])],
			[arrayChart1[8],  parseFloat(arrayChart2[8]),  parseFloat(arrayChart3[8])],
			[arrayChart1[9],  parseFloat(arrayChart2[9]),  parseFloat(arrayChart3[9])],
			[arrayChart1[10], parseFloat(arrayChart2[10]), parseFloat(arrayChart3[10])],
			[arrayChart1[11], parseFloat(arrayChart2[11]), parseFloat(arrayChart3[11])],
			[arrayChart1[12], parseFloat(arrayChart2[12]), parseFloat(arrayChart3[12])]
		]);
		
		var formatter = new google.visualization.NumberFormat({prefix: '$'});
		formatter.format(data, 1); // Apply formatter to second column (Price)


		// Create and draw the visualization.
		var ac = new google.visualization.ComboChart(document.getElementById('chart-data')); // div ID: chart-data
		ac.draw(data, {
			title : '',
			width: 740,
			height: 320,
			legend: "top",
			vAxis: {0: {},
					1: {}}, // To have matching y-Axes scales on left and right, add (example- maxValue: 250) to 0 and 1 here
			hAxis: {},
			backgroundColor: "transparent",
			seriesType: "bars",
			colors: ['#3e9dd4','#ff5757'],
			series: {0: {type: "bar", targetAxisIndex: 0},
					 1: {type: "line", pointSize: "8", targetAxisIndex: 1}}
		});
	}
	
	// Fill in HTML with values from data file
	function assignChartArrayData() {
		// 0 - Home size
		$('#chart-home-size').html(chartDataArray[0]);
		// 1 - Avg Month Electric Bill
		$('#chart-avg-bill').html(chartDataArray[1]);
		// 2 - Plane Name
		$('#chart-plan-name').html(chartDataArray[2]);
		
		// 3, 4, 5, - chart data handled above
		
		// 6 - Avg Annual Consumption
		$('#chart-avg-consumption').html(chartDataArray[6]);
		// 7 - Daytime Consumption
		$('#chart-daytime-consumption').html(chartDataArray[7]);
		// 8 - Neighbors with Similar homes
		$('#chart-similar-homes').html(chartDataArray[8]);
		// 9 - Icon (down or up)
		$('#chart-similar-homes-icon').attr('src', 'img/'+chartDataArray[9]);
	}
	
});