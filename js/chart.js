			window.onload=function(){/*  ww  w  .j a va2s . com*/
		var data = [{	
			// Jumlah Value yang ditampilkan
           data:[10,30,50,5,5],
		   backgroundColor:[
                 'rgba(24, 220, 110, 0.5)',
                 'rgba(111, 80, 10, 0.5)',
                 'rgba(11, 120, 170, 0.5)',
                 'rgba(55, 20, 50, 0.5)',
                 'rgba(99, 230, 90, 0.5)'
                 ]
        }];
		var options = {
			tooltips: {
				enabled: true,
				responsive: true,
				callbacks: {
					label: function(tooltipItem, data) {
						return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
						var index = tooltipItem.index;
						var currentValue = data.datasets[tooltipItem.datasetIndex].data[index];
						var total = 0;
						data.datasets.forEach(function(el){
						total = total + el.data[index];
						});
						var percentage = parseFloat((currentValue/total*100).toFixed(1));
						return currentValue + ' (' + percentage + '%)';
					}
				}	
			},
			plugins: {
				datalabels: {
					formatter: (value, ctx) => {
						let datasets = ctx.chart.data.datasets;
						if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
							let sum = datasets[0].data.reduce((a, b) => a + b, 0);
							let percentage = Math.round((value / sum) * 100) + '%';
							return percentage;
						} 	else {
							return percentage;
						}
					},
					color: '#fff',
				}
			}
		};
 
        var ctx = document.getElementById("inicanvas").getContext("2d");
        // tampilan chart
        var piechart = new Chart(ctx,{type: 'pie',
          data : {
		  labels:[
                  'PRIVATE SALE',
                  'PRESALE',
                  'LIQUIDITY',
                  'AIRDROP',
                  'BURN BEFORE LAUNCH'
          ],
			datasets: data
			},
		options: options
	});
		}
				
