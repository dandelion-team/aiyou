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
		'navigationTooltips': [ '1、十年绽放', '2、给生命一次机会', '3、爱佑十年成长（1）', '4、爱佑十年成长（2）', '5、爱佑童心（救助患儿）', 
		                        '6、爱佑童心（定点医院）', '7、爱佑童心（项目实施流程）', '8、爱佑童心（联合救助网络）', '9、爱佑新生（年养护数据）', 
								'10、爱佑新生（嵌入式养护中心）', '11、爱佑天使（定点医院统计）', '12、爱佑和康', '13、爱佑10年筹款总额增长', '14、爱佑慈善基金会'],

		'afterLoad': function(anchorLink, index) {
		    // 首页图片效果
			if (index == 1) {
                $('#homeImg').rotate3Di(20, 2000);
	            setTimeout(function() {$('#homeImg').rotate3Di(0, 2000);}, 800);
			}
	
			// 给生命一次机会
			if (index == 2) {
				$('.title01').animate({
                  opacity: 1,
                  bottom: 0,
                }, 1200);
			} else {
			    $('.title01').css("bottom", "-500px").css("opacity", 0);
			}
			
			// 爱佑十年成长（1）
			if (index == 3) {
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
			
			// 爱佑十年成长（2）
			if (index == 4) {
			    $('.row01').animate({
                  opacity: 1,
                  left: '-37.3%',
                }, 1200, function() {
                  showB();
                });
                
                function showB() {
                  $('.row02').animate({
                    opacity: 1,
                    left: '-37.3%',
                  }, 1200, function() {
                    showC();
                  });
                }
                
                function showC() {
                  $('.row03').animate({
                    opacity: 1,
                    left: '-37.3%',
                  }, 1200, function() {
                    showD();
                  });
                }
                function showD() {
                  $('.row04').animate({
                    opacity: 1,
                    left: '-37.3%',
                  }, 1200, function() {
                  });
                }
			} else {
			    $('.row01').css("left", "-746px").css("opacity", 0);
				$('.row02').css("left", "-746px").css("opacity", 0);
				$('.row03').css("left", "-746px").css("opacity", 0);
				$('.row04').css("left", "-746px").css("opacity", 0);
			}
			
			// 爱佑童心
			if (index == 5) {
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
                        type: 'category',
						labels: {
						    style: {
                                color: '#FFF',
                            }
						}
						,
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
                            }
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
                        data: [
                            ['2006', 139],
                            ['2007', 1068],
                            ['2008', 1335],
                            ['2009', 2067],
                            ['2010', 2990],
                            ['2011', 3952],
                            ['2012', 4591],
                            ['2013', 4608],
                            ['2014', 5500]
                        ],
                        dataLabels: {
						   color: '#FFF',
                           enabled: true,
                           align: 'right',
                           x: 10
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
			if (index == 6) {
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
			
			// 爱佑童心（项目实施流程）
			if (index == 7) {
			    $("#track").animate({opacity: 1}, 1200, "easeOutBounce");
				setTimeout(function(){$('.icon01').animate({opacity: 1}, 1200, "easeOutBounce");}, 1000);
				setTimeout(function(){$('.icon02').animate({opacity: 1}, 1200, "easeOutBounce");}, 2000);
				setTimeout(function(){$('.icon03').animate({opacity: 1}, 1200, "easeOutBounce");}, 3000);
				setTimeout(function(){$('.icon04').animate({opacity: 1}, 1200, "easeOutBounce");}, 4000);
				setTimeout(function(){$('.icon05').animate({opacity: 1}, 1200, "easeOutBounce");}, 5000);
			} else {
			    $("#track").css("opacity", 0);
			    $(".icon01").css("opacity", 0);
				$(".icon02").css("opacity", 0);
				$(".icon03").css("opacity", 0);
				$(".icon04").css("opacity", 0);
				$(".icon05").css("opacity", 0);
			}
			
			// 爱佑童心（联合救助网络）
			if (index == 8) {
				$(".yuan01").fadeIn(800, function(){});
                setTimeout(function(){$(".yuan02").fadeIn(800);}, 800);
                setTimeout(function(){$(".yuan03").fadeIn(800);}, 1600);
				setTimeout(function(){$(".yuan04").fadeIn(800);}, 2400);
				setTimeout(function(){$(".yuan05").fadeIn(800);}, 3200);
				setTimeout(function(){$(".yuan06").fadeIn(800);}, 4000);
				setTimeout(function(){$(".yuan07").fadeIn(800);}, 4800);
				setTimeout(function(){$(".yuan08").fadeIn(800);}, 5600);
			} else {
			    $(".yuan").css("display", 'none');
			}
			
			// 爱佑童心（嵌入式养护中心）
			if (index == 10) {
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
			
			// 爱佑和康
			if (index == 12) {
			    $('.dress04').animate({top:'31.5%', opacity: 1}, 1200, function() {showShenZhen();});
                
				function showShenZhen() {
				  $('.dress01').animate({bottom:'13.5%', opacity: 1}, 1200, function() {showNingXia();});
                }
				
				function showNingXia() {
                  $('.dress03').animate({bottom:'51%', opacity: 1}, 1200, function() {showHuBei();});
                }
				
				function showHuBei() {
                  $('.dress02').animate({bottom:'35%', opacity: 1}, 1200, function() {});
                }
			} else {
                $('.dress01').css("bottom", '200%');
                $('.dress02').css("bottom", '200%');
                $('.dress03').css("bottom", '200%');
                $('.dress04').css("top", '-200%');			    
			}
			
			// 公益创投
			if (index == 13) {
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
                        categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'],
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
                            }
					    }
                    },
                    tooltip: {
                        pointFormat: '{series.name} : {point.y}',
                    },
                    plotOptions: {
                        area: {
                            pointStart: 2005,
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            }
                        }
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
						   format: "{y}",
						   x: 10
                        },
                        data: [2000, 2423, 7800, 5000, 6000, 7000, 2300, 4500, 10000]
                    }, {
                        name: '累积公益支出总额(万元)',
						color: '#fcec00',
                        dataLabels: {
						   color: '#FFF',
                           enabled: true,
						   format: "{y}",
						   y: 30
                        },
                        data: [1000, 2000, 3000, 8000, 5340, 6000, 3400, 8000, 9000]
                    }]
                });
            }
		},
		'onLeave': function(index, nextIndex, direction) {
		}
	});
	
	function dictateRotate() {
	    rotate(".flower01");
		rotate(".flower03");
		rotate(".flower04");
	}
	
	function rotate(objID) {
        var angle = 0;
        setInterval(function() {
          angle += 3;
          $(objID).rotate(angle);
        }, 50);
    }
});
