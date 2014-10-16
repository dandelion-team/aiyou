$(document).ready(function() {
    // 首页图片效果
    $('#homeImg').rotate3Di(20, 2000);
	setTimeout(function() {$('#homeImg').rotate3Di(0, 2000);}, 800);
	
	// 十年成长效果
	var rate = 1.2;
	$('.growTooltip').mouseenter(function() {
        $(this).animate({
            width: $(this).width()*rate,
			height: $(this).height()*rate,
        }, 0, 'easeInOutCirc', function() {
        });
    });
    
    $('.growTooltip').mouseleave(function() {
        $(this).animate({
            width: $(this).width()/rate,
			height: $(this).height()/rate,
        }, 0, 'easeInOutCirc', function() {
        });
    });
	
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'css3': true,
		'sectionsColor': ['#F0F2F4', '#fff', '#fff'],
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': [ '1、十年绽放', '2、爱佑十年成长（1）', '3、爱佑童心（救助患儿）', 
		                        '4、爱佑童心（定点医院）', '5、爱佑新生（年养护数据）', '6、爱佑新生（嵌入式养护中心）', 
								'7、爱佑10年筹款总额增长', '8、xxxxx', '9、爱佑慈善基金会'],

		'afterLoad': function(anchorLink, index) {
		    // 首页图片效果
			if (index == 1) {
                $('#homeImg').rotate3Di(20, 2000);
	            setTimeout(function() {$('#homeImg').rotate3Di(0, 2000);}, 800);
			}
			
			// 爱佑十年成长（1）
			if (index == 2) {
			    $('.box08').animate({
                  opacity: 1,
                  left: 0,
                }, 1200, function(){
			      $('.img-box').animate({
                    opacity: 1,
                    bottom: 0,
                  }, 1200);
				});
			} else {
			    $('.box08').css("left", "-500px").css("opacity", 0);
			    $('.img-box').css("bottom", "-500px").css("opacity", 0);
			}
			
			// 爱佑童心
			if (index == 3) {
                $('.right05').highcharts({
                    chart: {
                        type: 'column',
						backgroundColor: 'transparent',
						borderColor: '#FFF',
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
					    categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
                        type: 'category',
						labels: {
						    style: {
                                color: '#FFF',
                            }
						},
						lineWidth: 1,
						lineColor: '#FFF',
						minorGridLineWidth: 0,
						tickWidth: 0,
                    },
                    yAxis: {
					    stackLabels: {enabled: true,},
                        min: 0,
                        title: {
                            text: ''
                        },
						labels: {
						    step: 1,
						    style: {
                                color: '#FFF',
                            },
							format: '{value:.,0f}'
						},
						gridLineColor: 'transparent',
						lineWidth: 1,
						lineColor: '#FFF',
                     },
	    	         tooltip: {
                        valueSuffix: '个'
                     },
                     legend: {
                        enabled: false
                     },
                     series: [{
					    name: '数量',
                        data: [139, 1068, 1335, 2067, 2990, 3952, 4591, 4608, 5500],
                        dataLabels: {
						   color: '#FFF',
                           enabled: true,
                           align: 'right',
                           x: 10,
						   y: -20,
                        },
						color: '#fff342',
                     }],
					credits: {
					    enabled: false,
					},
					navigation: {
					    buttonOptions: {
						    enabled: false,
						}
					}
                 });
			}
			
			// 爱佑童心（定点医院）
			if (index == 4) {
			    $('.right06').highcharts({
                    chart: {
                        type: 'bubble',
                        zoomType: 'xy',
						backgroundColor: 'transparent',
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
					    categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
						labels: {
						    step: 1,
						    style: {
                                color: '#FFF',
                            }
						},
						gridLineWidth: 1,
						gridLineColor: '#FFF',
						gridLineDashStyle: 'Dot',
						lineColor: '#FFF',
						tickWidth: 0,
                    },
					yAxis: {
					    categories: [],
                        min: 0,
						max: 70,
                        title: {
                            text: ''
                        },
						gridLineColor: 'transparent',
						lineWidth: 1,
						lineColor: '#FFF',
						minorGridLineColor: '#FFF',
						minorTickLength: 10,
						labels: {
						    step: 10,
						    style: {
                                color: '#FFF',
                            }
						}
					},
					tooltip: {
                        pointFormat: '{point.x}年 : {point.y}',
						valueSuffix: '家'
                    },
					credits: {
					    enabled: false,
					},
                    legend: {
                        enabled: false
                    },
                    series: [{
					    name: '定点医院',
						color: '#8cc43d',
                        data: [[2006, 3, 3], 
						       [2007, 6, 6], 
							   [2008, 8, 8], 
							   [2009, 9, 9], 
							   [2010, 19, 19], 
							   [2011, 31, 31], 
							   [2012, 36, 36], 
							   [2013, 54, 54], 
							   [2014, 58, 58]],
                        dataLabels: {
						   color: '#FFF',
                           enabled: true,
                        },
                    }]
                });
			}
						
			// 爱佑童心（年养护数据）
			if (index == 5) {
			    $('.right09').highcharts({
                    chart: {
                        type: 'area',
						backgroundColor: 'transparent',
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: ['2011.11', '2012.01', '2012.03', '2012.05', '2012.07', '2012.09', '2012.11', 
						                        '2013.01', '2013.03', '2013.05', '2013.07', '2013.09', '2013.11',
												'2014.01', '2014.03', '2014.05', '2014.07'],
						lineColor: '#FFF',
						labels: {
						    style: {
                                color: '#FFF',
                            },
							rotation: -45,
                        },
						tickWidth: 0,
                    },
                    yAxis: {
						min: 0,
                        title: {
                            text: ''
                        },
						gridLineColor: 'transparent',
						lineWidth: 1,
						lineColor: '#FFF',
						labels: {
						    step: 1,
						    style: {
                                color: '#FFF',
                            },
							format: '{value:.,0f}'
					    }
                    },
                    tooltip: {
                        pointFormat: '{series.name} : {point.y}',
                    },
                    plotOptions: {
						series: {
                            fillOpacity: 0.05
                        }
                    },
					credits: {
					    enabled: false,
					},
                    legend: {
					    enabled: false,
                    },
                    series: [{
                        name: '数据',
						color: '#fff000',
						marker: {
						    enabled: false,
						},
                        data: [2, 7, 14, 35, 51, 71, 98, 136, 190, 250, 314, 368, 516, 760, 1051, 1373, 1744]
                    }]
                });
            }
			
			// 爱佑童心（嵌入式养护中心）
			if (index == 6) {
                $('.rain01').animate({top:'32.5%', opacity: 1}, 1200, function() {});
                $('.rain02').animate({top:'41.5%', opacity: 1}, 1200, function() {});
                $('.rain03').animate({top:'51.5%', opacity: 1}, 1200, function() {});
                $('.rain04').animate({bottom:'33%', opacity: 1}, 1200, function() {});
                $('.rain05').animate({bottom:'30%', opacity: 1}, 1200, function() {});
                $('.rain06').animate({bottom:'17%', opacity: 1}, 1200, function() {});
                $('.rain07').animate({top:'49%', opacity: 1}, 1200, function() {});
                $('.rain08').animate({top:'43%', opacity: 1}, 1200, function() {});
                $('.rain09').animate({bottom:'37.5%', opacity: 1}, 1200, function() {});
                $('.rain10').animate({bottom:'34%', opacity: 1}, 1200, function() {});
                $('.rain11').animate({bottom:'22.8%', opacity: 1}, 1200, function() {});
                $('.rain12').animate({bottom:'14.5%', opacity: 1}, 1200, function() {});
			} else {
                $('.rain01').css("top", '-200%');
                $('.rain02').css("top", '-200%');
                $('.rain03').css("top", '-200%');
                $('.rain04').css("bottom", '200%');
                $('.rain05').css("bottom", '200%');
                $('.rain06').css("bottom", '200%');
                $('.rain07').css("top", '-200%');
                $('.rain08').css("top", '-200%');
                $('.rain09').css("bottom", '200%');
                $('.rain10').css("bottom", '200%');
                $('.rain11').css("bottom", '200%');
                $('.rain12').css("bottom", '200%');					    
			}
			
			// 公益创投
			if (index == 7) {
			    $('.main13').highcharts({
                    chart: {
                        type: 'area',
						backgroundColor: 'transparent',
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
						lineColor: '#FFF',
						labels: {
						    style: {
                                color: '#FFF',
                            }
                        },
						tickWidth: 0,
                    },
                    yAxis: {
						min: 0,
                        title: {
                            text: ''
                        },
						gridLineColor: 'transparent',
						lineWidth: 1,
						lineColor: '#FFF',
						labels: {
						    step: 1,
						    style: {
                                color: '#FFF',
                            },
							format: '{value:.,0f}'
					    }
                    },
                    tooltip: {
                        pointFormat: '{series.name} : {point.y}',
                    },
					credits: {
					    enabled: false,
					},
                    legend: {
					    borderRadius: '1px',
                        itemStyle: {
						    "color": "#FFF", 
							"borderRadius": "3px",
						},
						itemHoverStyle: {
						    "color": "#FFF", 
						},
						verticalAlign: 'top',
						symbolHeight: 16,
						symbolRadius: '50%',
                    },
                    plotOptions: {
                        series: {
                            fillOpacity: 0.28
                        }
                    },
                    series: [{
                        name: '累积捐款总额(万元)',
						color: '#8dc43f',
                        dataLabels: {
						   color: '#FFF',
                           enabled: true,
						   format: "{y:.,0f}",
						   y: -20
                        },
                        data: [148.16, 1027.07, 2565.51, 3784.50, 8253.95, 13561.16, 20535.20, 31688.51, 47563.92, 58920.39]
                    }, {
                        name: '累积公益支出总额(万元)',
						color: '#fcec00',
                        dataLabels: {
						   color: '#FFF',
                           enabled: true,
						   format: "{y:.,0f}",
                        },
                        data: [135.78, 338.41, 1404.36, 2580.05, 4357.43, 7320.57, 12909.36, 21066.59, 31933.83, 42509.65]
                    }]
                });
            }
		},
		'onLeave': function(index, nextIndex, direction) {
		}
	});
	
});
