$(document).ready(function(){
	
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	
	var ctx = $("#nerios").get(0).getContext("2d");

	var data = [
		{
			value: randomScalingFactor(),
			color: "#f46363",
			highlight: "#f78a8a",
			label: "Dalje"
		},
		{
			value: randomScalingFactor(),
			color: "#66b7ea",
			highlight: "#8cc9ef",
			label: "Gjendje"
		},
		{
			value: randomScalingFactor(),
			color: "#6fd981",
			highlight: "#93e3a1",
			label: "Hyrje"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
	
	
	
	var ctx = $("#nerios1").get(0).getContext("2d");

	var data = [
		{
			value: randomScalingFactor(),
			color: "#f46363",
			highlight: "#f78a8a",
			label: "Dalje"
		},
		{
			value: randomScalingFactor(),
			color: "#66b7ea",
			highlight: "#8cc9ef",
			label: "Gjendje"
		},
		{
			value: randomScalingFactor(),
			color: "#6fd981",
			highlight: "#93e3a1",
			label: "Hyrje"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
	
	
	
	var ctx = $("#nerios2").get(0).getContext("2d");

	var data = [
		{
			value: randomScalingFactor(),
			color: "#f46363",
			highlight: "#f78a8a",
			label: "Dalje"
		},
		{
			value: randomScalingFactor(),
			color: "#66b7ea",
			highlight: "#8cc9ef",
			label: "Gjendje"
		},
		{
			value: randomScalingFactor(),
			color: "#6fd981",
			highlight: "#93e3a1",
			label: "Hyrje"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);

});



