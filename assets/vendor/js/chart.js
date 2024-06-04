'use strict';

(function () {
  // Color Variables
  const purpleColor = '#836AF9',
    yellowColor = '#ffe800',
    cyanColor = '#28dac6',
    orangeColor = '#FF8132',
    orangeLightColor = '#FDAC34',
    oceanBlueColor = '#299AFF',
    greyColor = '#4F5D70',
    greyLightColor = '#EDF1F4',
    blueColor = '#2B9AFF',
    blueCOLORT ='#141C4D',
    blueLightColor = '#84D0FF',
    dangerColor='#ff0000',
    dangerLIGHTColor='#f973a0',
    grunCOLOR='#4CAF50 ',
    brownCOLOR='#795548',
    purpColor='#991CFB';
  let cardColor, headingColor, labelColor, borderColor, legendColor;

  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    headingColor = config.colors_dark.headingColor;
    labelColor = config.colors_dark.textMuted;
    legendColor = config.colors_dark.bodyColor;
    borderColor = config.colors_dark.borderColor;
  } else {
    cardColor = config.colors.cardColor;
    headingColor = config.colors.headingColor;
    labelColor = config.colors.textMuted;
    legendColor = config.colors.bodyColor;
    borderColor = config.colors.borderColor;
  }

  // Set height according to their data-height
  // --------------------------------------------------------------------
  const chartList = document.querySelectorAll('.chartjs');
  chartList.forEach(function (chartListItem) {
    chartListItem.height = chartListItem.dataset.height;
  });

  
  
  // Doughnut Chart
  // --------------------------------------------------------------------

  const doughnutChart = document.getElementById('doughnutChart');
  if (doughnutChart) {
    const doughnutChartVar = new Chart(doughnutChart, {
     
        
        type: 'doughnut',
   
     
      data: {
        labels: ['PLANNED PROGRESS', 'Actual PROGRESS'],
        datasets: [
          {
            data: [50,  50],
            backgroundColor: [purpColor,greyLightColor],
            borderWidth: 0,
            pointStyle: 'rectRounded'
          }
        ]
      },
     
      options: {
        responsive: true,
        cutoutPercentage: 40 ,
        animation: {
          duration: 500
        },
        cutout: '68%',
        plugins: {
          legend: {
            display: true
          },
         
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.labels || '',
                  value = context.parsed;
                const output = ' ' + label + ' : ' + value + ' %';
                return output;
              }
            },
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },datalabels: {
            display: true,
            formatter: (value) => {
              if (value < 15) return '';
              return value + '%';
            },
           
          },
          doughnutlabel: {
            labels: [
              {
                text: '550',
                font: {
                  size: 20,
                  weight: 'bold',
                },
              },
              {
                text: 'total',
              },
            ],
          },

        }
      }
    });
  }
  ////
    // Radial Bar Chart
  // --------------------------------------------------------------------
  const radialBarChartEl = document.querySelector('#radialBarChart'),
    radialBarChartConfig = {
      chart: {
        height: 600,
        type: 'radialBar'
      },
      colors: [blueColor,purpColor ,blueLightColor, dangerLIGHTColor,cyanColor],
      plotOptions: {
        radialBar: {
          size: 185,
          hollow: {
            size: '50%'
          },
          track: {
            margin: 5,
            background: config.colors_label.secondary
          },
          dataLabels: {
            name: {
              fontSize: '2rem',
              fontFamily: 'Public Sans'
            },
            value: {
              fontSize: '1.2rem',
              color: legendColor,
              fontFamily: 'Public Sans'
            },
            total: {
              show: true,
              fontWeight: 400,
              fontSize: '0.75rem',
              color: headingColor,
              label: 'Technical Average Approval',
              formatter: function (w) {
                return '90%';
              }
            }
          }
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: -25,
          bottom: -20
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        labels: {
          colors: legendColor,
          useSeriesColors: false
        }
      },
      stroke: {
        lineCap: 'round'
      },
      series: [39, 39, 39,64,72],
      labels: ['Design Drawings', 'Shop Drawings', 'As-Built Drawings','Material Status','LONG LEAD STATUS']
    };
  if (typeof radialBarChartEl !== undefined && radialBarChartEl !== null) {
    const radialChart = new ApexCharts(radialBarChartEl, radialBarChartConfig);
    radialChart.render();
  }
  //-----------------------------------------------------------------------------
  var options = {
    chart: {
        height: 470,
        type: 'radialBar',
    },
    series: [60],
    labels: ['ACTUALPROGRESS'],
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
//*****--------------------------------------- */
  var options = {
    series: [{
    name: 'Planned Cash flow',
    data: [5, 15, 5, 30, 10, 35, 5, 40, 5]
  }, {
    name: 'Actual Cash flow',
    data: [10, 30, 10, 20, ]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
     
    },
    
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + ".00M";
    },
    offsetY: 40,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
    

  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  colors: [
    "#4472C4",
    "#ED7D31",
  
   
  ],
  xaxis: {
    categories: ['Oct-23', 'Nov-23', 'Dec-23', 'Jun-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-tow"), options);
  chart.render();
//----------------------------------------------
var options = {
  colors : ['#06b12b'],
  chart: {
      height: 200,
      type: 'radialBar',
  },
  series: [50],
  labels: ['Total Paid'],
 
}

var chart = new ApexCharts(document.querySelector("#chartfinancial"), options);

chart.render();
//--------------------------------
var options = {
  colors : ['#06b12b'],
  chart: {
      height: 200,
      type: 'radialBar',
  },
  series: [100],
  labels: ['Total Paid'],
 
}

var chart = new ApexCharts(document.querySelector("#chartfinancial-1"), options);

chart.render();
//////////////////////----------------------------
var options = {
  colors : ['#e7ebeb','#f5728e'],
  series: [50,20],
  chart: {
  width: 150,
  height: 150,
  type: 'pie',
},

legend: {
  show:false,
  
},
labels: ['Total Unpaid',],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart-team"), options);
chart.render();
/////////////////////
var options = {
  colors : ['#e7ebeb','#f5728e'],
  series: [50,20],
  chart: {
  width: 150,
  height: 150,
  type: 'pie',
},
legend: {
  show:false,
  
},
labels: ['Total Unpaid',],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart-team-2"), options);
chart.render();
//////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
      height: 200,
      type: 'radialBar',
  },
  series: [50],
  labels: ['Total Paid'],
 
}

var chart = new ApexCharts(document.querySelector("#chartfinancial-o"), options);

chart.render();
//////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
      height: 200,
      type: 'radialBar',
  },
  series: [50],
  labels: ['Total Paid'],
 
}

var chart = new ApexCharts(document.querySelector("#chartfinancial-o2"), options);

chart.render();
//////////////////////----------------------------
var options = {
  colors : ['#e7ebeb','#fcbe00'],
  series: [50,20],
  chart: {
  width: 150,
  height: 150,
  type: 'pie',
  toolbar: {
    show: false
  }
},
legend: {
  show:false,
  
},
labels: ['Total Unpaid'],
responsive: [{
  breakpoint: 200,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      show:false,
    },
    total: {
      show: false
    },
    sparkline: {
      enabled: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart-team-o"), options);
chart.render();
//////////////////////----------------------------
var options = {
  colors : ['#e7ebeb','#fcbe00'],
  series: [50,20],
  chart: {
  width: 150,
  height: 150,
  type: 'pie',
},legend: {
  show:false,
  
},
labels: ['Total Unpaid',],
responsive: [{
  breakpoint:200,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      show:false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart-team-o2"), options);
chart.render();
///30-5-2024---------------------------
var options = {
  colors : ['#991CFB'],
  chart: {
      height: 420,
 
      type: 'radialBar',
  
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
      hollow: {
        size: '60%',
      }
      
    } 
    },
  },
  legend: {
    show: false
  },
  series: [60],
  labels: ['ACTUALPROGRESS'],
 
}

var chart = new ApexCharts(document.querySelector("#chart-chart"), options);

chart.render();
//////////////////////////////////////////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
    height:140,
    width:100,
      type: 'radialBar',
      offsetY: 0,
	  toolbar: {
		show: false
	  }
  },
  plotOptions: {
    radialBar: {
      size:50,
      hollow: {
        margin: 0,
        size: '65%',
        background: '#fff',
      }
    },
		track: {
		  background: '#F5F5FF',
		  strokeWidth: '75%',
		  margin: 0, // margin is in pixels
		  
		},
    dataLabels: {
		  showOn: 'always',
		  name: {
			offsetY: 0,
			show: false,
			color: '#003366',
			fontSize: '20px'
		  },
      value: {
        formatter: function(val) {
          return parseInt(val);
        },
        color: '#003366',
        fontSize: '80px',
        show: true,
        offsetY: 70,
        }
    }
  },
	series: [75],
	stroke: {
	  lineCap: 'round'
	},
  labels: [''],
}

var chart = new ApexCharts(document.querySelector("#chart-sub"), options);

chart.render();
//////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
    height:140,
    width:100,
      type: 'radialBar',
      offsetY: 0,
	  toolbar: {
		show: false
	  }
  },
  plotOptions: {
    radialBar: {
      size:50,
      hollow: {
        margin: 0,
        size: '65%',
        background: '#fff',
      }
    },
		track: {
		  background: '#F5F5FF',
		  strokeWidth: '75%',
		  margin: 0, // margin is in pixels
		  
		},
    dataLabels: {
		  showOn: 'always',
		  name: {
			offsetY: 0,
			show: false,
			color: '#003366',
			fontSize: '20px'
		  },
      value: {
        formatter: function(val) {
          return parseInt(val);
        },
        color: '#003366',
        fontSize: '80px',
        show: true,
        offsetY: 10,
        }
    }
  },
	series: [75],
	stroke: {
	  lineCap: 'round'
	},
  labels: [''],
}

var chart = new ApexCharts(document.querySelector("#chart-sub2"), options);

chart.render();
/////////////////
var options = {
  colors : ['#6f309f'],
  series: [75],
  chart: {
    height:140,
    width:100,
      type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: [''],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub3"), options);

chart.render();
//////////////////
var options = {
  colors : ['#6f309f'],
  series: [75],
  chart: {
    height:140,
    width:100,
      type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: [''],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub4"), options);

chart.render();
/////////////////
var options = {
  colors : ['#6f309f'],
  series: [75],
  chart: {
    height:140,
    width:100,
      type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: [''],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub5"), options);

chart.render();
//////////////////
var options = {
  colors : ['#6f309f'],
  series: [75],
  chart: {
    height:140,
    width:100,
      type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: [''],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub6"), options);

chart.render();
//////////////////////----------------------------
var options = {
  colors : ['#c44cd1','#e7ebeb'],
  series: [28.6, 100],
  chart: {
  width: 110,
  height: 110,
  type: 'pie',
  toolbar: {
    show: false
  }
},
legend: {
  show:false,
  
},
labels: [],
responsive: [{
  breakpoint: 200,
  options: {
    chart: {
      width: 200
    },
    legend: {
      show:false,
    },
    total: {
      show: false
    },
    sparkline: {
      enabled: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chartteam1"), options);
chart.render();
//////////////////////----------------------------
var options = {
  colors : ['#e7ebeb','#c44cd1'],
  series: [50,20],
  chart: {
  width: 110,
  height: 110,
  type: 'pie',
},legend: {
  show:false,
  
},
labels: ['Total Unpaid',],
responsive: [{
  breakpoint:200,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      show:false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chartteam2"), options);
chart.render();
//////////////////////----------------------------
var options = {
  colors : ['#e7ebeb','#c44cd1'],
  series: [50,20],
  chart: {
  width: 110,
  height: 110,
  type: 'pie',
  toolbar: {
    show: false
  }
},
legend: {
  show:false,
  
},
labels: ['Total Unpaid'],
responsive: [{
  breakpoint: 200,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      show:false,
    },
    total: {
      show: false
    },
    sparkline: {
      enabled: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chartteam3"), options);
chart.render();
//////////////////////----------------------------
var options = {
  colors : ['#e7ebeb','#c44cd1'],
  series: [50,20],
  chart: {
  width: 110,
  height: 110,
  type: 'pie',
},legend: {
  show:false,
  
},
labels: ['Total Unpaid','Total Paid'],
responsive: [{
  breakpoint:200,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      show:false
    },plotOptions: {
    pie: {
      dataLabels: {
        minAngleToShowLabel: 0
      }
    }
  }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chartteam4"), options);
chart.render();
//////////////////////----------------------------
var options = {
  colors : ['#e7ebeb','#c44cd1'],
  series: [50,20],
  chart: {
  width: 110,
  height: 110,
  type: 'pie',
},legend: {
  show:false,
  
},
labels: ['Total Unpaid',],
responsive: [{
  breakpoint:200,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      show:false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chartteam1-pos"), options);
chart.render();
// Horizontal Bar Chart
  // --------------------------------------------------------------------
  const horizontalBarChartEl = document.querySelector('#horizontalBarChart-ch'),
    horizontalBarChartConfig = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
        position: 'top', // display data labels above the chart
        orientation: 'ertical', // جعل القيمة تظهر عمودياً
        offsetX: 200, // ضبط المسافة بين القيمة والمخطط
              style: {
                fontSize: '12px',
                colors: ["#000"],
                
              }
      },
      series: [
        {
          data: [400, 320, 40, 40]
        }
      ],
      colors: [
        "#991CFB",
      ],
      xaxis: {
        categories: ['SUBMITTED', 'APPROVED', 'REJECTED ', 'UNDER REVEW'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartEl !== undefined && horizontalBarChartEl !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartEl, horizontalBarChartConfig);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  // --------------------------------------------------------------------
  const horizontalBarChartEl1 = document.querySelector('#horizontalBarChart-ch1'),
    horizontalBarChartConfig1 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#fff"]
              }
      },
      series: [
        {
          data: [400, 320, 40, 40]
        }
      ],
      colors: config.colors.info,
      xaxis: {
        categories: ['SUBMITTED', 'APPROVED', 'REJECTED ', 'UNDER REVEW'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '16px'
          }
        }
      }
    };
  if (typeof horizontalBarChartEl1 !== undefined && horizontalBarChartEl1 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartEl1, horizontalBarChartConfig1);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  // --------------------------------------------------------------------
  const horizontalBarChartE2 = document.querySelector('#horizontalBarChart-ch2'),
    horizontalBarChartConfig2 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#fff"]
              }
      },
      series: [
        {
          data: [400, 320, 40, 40]
        }
      ],
      colors: [
        "#141C4D",
      ],
      xaxis: {
        categories: ['SUBMITTED', 'APPROVED', 'REJECTED ', 'UNDER REVEW'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartE2 !== undefined && horizontalBarChartE2 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartE2, horizontalBarChartConfig2);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  // Horizontal Bar Chart
  // --------------------------------------------------------------------
  const horizontalBarChartE3 = document.querySelector('#horizontalBarChart-ch3'),
    horizontalBarChartConfig3 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#fff"]
              }
      },
      series: [
        {
          data: [400, 320, 80]
        }
      ],
      colors: [
        "#ff0000",
      ],
      xaxis: {
        categories: ['ISSUED', 'CLOSED', 'OPENNED '],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartE3 !== undefined && horizontalBarChartE3 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartE3, horizontalBarChartConfig3);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  const horizontalBarChartE4 = document.querySelector('#long-Chart'),
    horizontalBarChartConfig4 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#fff"]
              }
      },
      series: [
        {
          data: [5, 5, 5, 0,0,0,5]
        }
      ],
      colors: config.colors.info,
      xaxis: {
        categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REMAINING','PEJECTED' ,'UNDER REVEW','DELIVERED'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartE4 !== undefined && horizontalBarChartE4 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartE4, horizontalBarChartConfig4);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  const horizontalBarChartE5 = document.querySelector('#longCharttow-tow'),
    horizontalBarChartConfig5 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#fff"]
              }
      },
      series: [
        {
          data: [2, 2, 2, 0,0,0,2]
        }
      ],
      colors: [
        "#991CFB",
      ],
      xaxis: {
        categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REMAINING','PEJECTED' ,'UNDER REVEW','DELIVERED'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartE5 !== undefined && horizontalBarChartE5 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartE5, horizontalBarChartConfig5);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  const horizontalBarChartE6 = document.querySelector('#longChart-three'),
    horizontalBarChartConfig6 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#fff"]
              }
      },
      series: [
        {
          data: [15, 13, 10, 2,3,0,5]
        }
      ],
      colors: [
        "#141C4D",
      ],
      xaxis: {
        categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REMAINING','PEJECTED' ,'UNDER REVEW','DELIVERED'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartE6 !== undefined && horizontalBarChartE6 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartE6, horizontalBarChartConfig6);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  const horizontalBarChartE7 = document.querySelector('#longChart-four'),
    horizontalBarChartConfig7 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#fff"]
              }
      },
      series: [
        {
          data: [10, 8, 6,2,1,1,5]
        }
      ],
      colors: [
        "#FF8132",
      ],
      xaxis: {
        categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REMAINING','PEJECTED' ,'UNDER REVEW','DELIVERED'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartE7 !== undefined && horizontalBarChartE7 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartE7, horizontalBarChartConfig7);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  const horizontalBarChartE8 = document.querySelector('#Material-Chart'),
    horizontalBarChartConfig8 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#000"]
              }
      },
      series: [
        {
          data: [60, 55,45, 5,5,5]
        }
      ],
      colors: [
        "#ffe800",
      ],
      xaxis: {
        categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartE8 !== undefined && horizontalBarChartE8 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartE8, horizontalBarChartConfig8);
    horizontalBarChart.render();
  }
  // Horizontal Bar Chart
  const horizontalBarChartE9= document.querySelector('#Material-tow'),
    horizontalBarChartConfig9 = {
      chart: {
       
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          startingShape: 'rounded',
          borderRadius: 8
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -20,
          bottom: -12
        }
      },
      colors: config.colors.info,
      dataLabels: {
        enabled: true,
       
              style: {
                fontSize: '14px',
                colors: ["#000"]
              }
      },
      series: [
        {
          data: [45, 45, 45, 0,0,0]
        }
      ],
      colors: [
        "#795548",
      ],
      xaxis: {
        categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        yaxisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      }
    };
  if (typeof horizontalBarChartE9 !== undefined && horizontalBarChartE9 !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartE9, horizontalBarChartConfig9);
    horizontalBarChart.render();
  }
   // Horizontal Bar Chart
   const horizontalBarChartEm= document.querySelector('#Material-three'),
   horizontalBarChartConfigm = {
     chart: {
      
       height: 400,
       type: 'bar',
       toolbar: {
         show: false
       }
     },
     plotOptions: {
       bar: {
         horizontal: true,
         barHeight: '30%',
         startingShape: 'rounded',
         borderRadius: 8
       }
     },
     grid: {
       borderColor: borderColor,
       xaxis: {
         lines: {
           show: false
         }
       },
       padding: {
         top: -20,
         bottom: -12
       }
     },
     colors: config.colors.info,
     dataLabels: {
       enabled: true,
      
             style: {
               fontSize: '14px',
               colors: ["#000"]
             }
     },
     series: [
       {
         data: [67, 47, 33, 11,3,20]
       }
     ],
     colors: [
       "#2B9AFF",
     ],
     xaxis: {
       categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
       axisBorder: {
         show: true
       },
       axisTicks: {
         show: false
       },
       labels: {
         style: {
           colors: labelColor,
           fontSize: '13px'
         }
       }
     },
     yaxis: {
       yaxisBorder: {
         show: true
       },
       labels: {
         style: {
           colors: labelColor,
           fontSize: '12px'
         }
       }
     }
   };
 if (typeof horizontalBarChartEm !== undefined && horizontalBarChartEm !== null) {
   const horizontalBarChart = new ApexCharts(horizontalBarChartEm, horizontalBarChartConfigm);
   horizontalBarChart.render();
 }
   // Horizontal Bar Chart
   const horizontalBarChartEm4 = document.querySelector('#Material-four'),
   horizontalBarChartConfigm4 = {
     chart: {
      
       height: 400,
       type: 'bar',
       toolbar: {
         show: false
       }
     },
     plotOptions: {
       bar: {
         horizontal: true,
         barHeight: '30%',
         startingShape: 'rounded',
         borderRadius: 8
       }
     },
     grid: {
       borderColor: borderColor,
       xaxis: {
         lines: {
           show: false
         }
       },
       padding: {
         top: -20,
         bottom: -12
       }
     },
     colors: config.colors.info,
     dataLabels: {
       enabled: true,
      
             style: {
               fontSize: '14px',
               colors: ["#000"]
             }
     },
     series: [
       {
         data: [111, 101, 57,17,27,10]
       }
     ],
     colors: [
       "#4CAF50",
     ],
     xaxis: {
       categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
       axisBorder: {
         show: true
       },
       axisTicks: {
         show: false
       },
       labels: {
         style: {
           colors: labelColor,
           fontSize: '13px'
         }
       }
     },
     yaxis: {
       yaxisBorder: {
         show: true
       },
       labels: {
         style: {
           colors: labelColor,
           fontSize: '12px'
         }
       }
     }
   };
 if (typeof horizontalBarChartEm4 !== undefined && horizontalBarChartEm4 !== null) {
   const horizontalBarChart = new ApexCharts(horizontalBarChartEm4, horizontalBarChartConfigm4);
   horizontalBarChart.render();
 }
   // Horizontal Bar Chart
   const horizontalBarChartEb1 = document.querySelector('#Built-Chart'),
   horizontalBarChartConfigb1 = {
     chart: {
      
       height: 400,
       type: 'bar',
       toolbar: {
         show: false
       }
     },
     plotOptions: {
       bar: {
         horizontal: true,
         barHeight: '30%',
         startingShape: 'rounded',
         borderRadius: 8
       }
     },
     grid: {
       borderColor: borderColor,
       xaxis: {
         lines: {
           show: false
         }
       },
       padding: {
         top: -20,
         bottom: -12
       }
     },
     colors: config.colors.info,
     dataLabels: {
       enabled: true,
      
             style: {
               fontSize: '14px',
               colors: ["#000"]
             }
     },
     series: [
       {
         data: [120, 95,23, 40,32,25]
       }
     ],
     colors: [
       "#4CAF50",
     ],
     xaxis: {
       categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
       axisBorder: {
         show: true
       },
       axisTicks: {
         show: false
       },
       labels: {
         style: {
           colors: labelColor,
           fontSize: '13px'
         }
       }
     },
     yaxis: {
       yaxisBorder: {
         show: true
       },
       labels: {
         style: {
           colors: labelColor,
           fontSize: '12px'
         }
       }
     }
   };
 if (typeof horizontalBarChartEb1 !== undefined && horizontalBarChartEb1 !== null) {
   const horizontalBarChart = new ApexCharts(horizontalBarChartEb1, horizontalBarChartConfigb1);
   horizontalBarChart.render();
 }
 // Horizontal Bar Chart
 const horizontalBarChartEb2 = document.querySelector('#Built-tow'),
 horizontalBarChartConfigb2 = {
   chart: {
    
     height: 400,
     type: 'bar',
     toolbar: {
       show: false
     }
   },
   plotOptions: {
     bar: {
       horizontal: true,
       barHeight: '30%',
       startingShape: 'rounded',
       borderRadius: 8
     }
   },
   grid: {
     borderColor: borderColor,
     xaxis: {
       lines: {
         show: false
       }
     },
     padding: {
       top: -20,
       bottom: -12
     }
   },
   colors: config.colors.info,
   dataLabels: {
     enabled: true,
    
           style: {
             fontSize: '14px',
             colors: ["#000"]
           }
   },
   series: [
     {
       data: [332, 320, 300, 0,20,10]
     }
   ],
   colors: [
     "#2B9AFF",
   ],
   xaxis: {
     categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
     axisBorder: {
       show: true
     },
     axisTicks: {
       show: false
     },
     labels: {
       style: {
         colors: labelColor,
         fontSize: '12px'
       }
     }
   },
   yaxis: {
     yaxisBorder: {
       show: true
     },
     labels: {
       style: {
         colors: labelColor,
         fontSize: '10px'
       }
     }
   }
 };
if (typeof horizontalBarChartEb2 !== undefined && horizontalBarChartEb2 !== null) {
 const horizontalBarChart = new ApexCharts(horizontalBarChartEb2, horizontalBarChartConfigb2);
 horizontalBarChart.render();
}
 // Horizontal Bar Chart
 const horizontalBarChartEb3 = document.querySelector('#Built-three'),
 horizontalBarChartConfigb3 = {
   chart: {
    
     height: 400,
     type: 'bar',
     toolbar: {
       show: false
     }
   },
   plotOptions: {
     bar: {
       horizontal: true,
       barHeight: '30%',
       startingShape: 'rounded',
       borderRadius: 8
     }
   },
   grid: {
     borderColor: borderColor,
     xaxis: {
       lines: {
         show: false
       }
     },
     padding: {
       top: -20,
       bottom: -12
     }
   },
   colors: config.colors.info,
   dataLabels: {
     enabled: true,
    
           style: {
             fontSize: '14px',
             colors: ["#000"]
           }
   },
   series: [
     {
       data: [389, 170, 26, 72,72,219]
     }
   ],
   colors: [
     "#4F5D70",
   ],
   xaxis: {
     categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
     axisBorder: {
       show: true
     },
     axisTicks: {
       show: false
     },
     labels: {
       style: {
         colors: labelColor,
         fontSize: '12px'
       }
     }
   },
   yaxis: {
     yaxisBorder: {
       show: true
     },
     labels: {
       style: {
         colors: labelColor,
         fontSize: '10px'
       }
     }
   }
 };
if (typeof horizontalBarChartEb3 !== undefined && horizontalBarChartEb3 !== null) {
 const horizontalBarChart = new ApexCharts(horizontalBarChartEb3, horizontalBarChartConfigb3);
 horizontalBarChart.render();
}
 // Horizontal Bar Chart
 const horizontalBarChartEb4 = document.querySelector('#Built-four'),
 horizontalBarChartConfigb4 = {
   chart: {
    
     height: 400,
     type: 'bar',
     toolbar: {
       show: false
     }
   },
   plotOptions: {
     bar: {
       horizontal: true,
       barHeight: '30%',
       startingShape: 'rounded',
       borderRadius: 8
     }
   },
   grid: {
     borderColor: borderColor,
     xaxis: {
       lines: {
         show: false
       }
     },
     padding: {
       top: -20,
       bottom: -12
     }
   },
   colors: config.colors.info,
   dataLabels: {
     enabled: true,
    
           style: {
             fontSize: '14px',
             colors: ["#000"]
           }
   },
   series: [
     {
       data: [202, 164, 58,42,64,38]
     }
   ],
   colors: [
     "#84D0FF",
   ],
   xaxis: {
     categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
     axisBorder: {
       show: true
     },
     axisTicks: {
       show: false
     },
     labels: {
       style: {
         colors: labelColor,
         fontSize: '13px'
       }
     }
   },
   yaxis: {
    
     labels: {
       style: {
         colors: labelColor,
         fontSize: '10px'
       }
     }
   }
 };
if (typeof horizontalBarChartEb4 !== undefined && horizontalBarChartEb4 !== null) {
 const horizontalBarChart = new ApexCharts(horizontalBarChartEb4, horizontalBarChartConfigb4);
 horizontalBarChart.render();
}
// Horizontal Bar Chart
const horizontalBarChartEs1 = document.querySelector('#Shop-Chart'),
horizontalBarChartConfigs1 = {
  chart: {
   
    height: 400,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      startingShape: 'rounded',
      borderRadius: 8
    }
  },
  grid: {
    borderColor: borderColor,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: -20,
      bottom: -12
    }
  },
  colors: config.colors.info,
  dataLabels: {
    enabled: true,
   
          style: {
            fontSize: '14px',
            colors: ["#000"]
          }
  },
  series: [
    {
      data: [122, 97,23, 40,34,25]
    }
  ],
  colors: [
    "#ffe800",
  ],
  xaxis: {
    categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px'
      }
    }
  },
  yaxis: {
   
    labels: {
      style: {
        colors: labelColor,
        fontSize: '10px'
      }
    }
  }
};
if (typeof horizontalBarChartEs1 !== undefined && horizontalBarChartEs1 !== null) {
const horizontalBarChart = new ApexCharts(horizontalBarChartEs1, horizontalBarChartConfigs1);
horizontalBarChart.render();
}
// Horizontal Bar Chart
const horizontalBarChartEs2 = document.querySelector('#Shop-tow'),
horizontalBarChartConfigs2 = {
  chart: {
   
    height: 400,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      startingShape: 'rounded',
      borderRadius: 8
    }
  },
  grid: {
    borderColor: borderColor,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: -20,
      bottom: -12
    }
  },
  colors: config.colors.info,
  dataLabels: {
    enabled: true,
   
          style: {
            fontSize: '14px',
            colors: ["#000"]
          }
  },
  series: [
    {
      data: [332, 320, 300, 0,20,12]
    }
  ],
  colors: [
    "#f973a0",
  ],
  xaxis: {
    categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px'
      }
    }
  },
  yaxis: {
   
    labels: {
      style: {
        colors: labelColor,
        fontSize: '10px'
      }
    }
  }
};
if (typeof horizontalBarChartEs2 !== undefined && horizontalBarChartEs2 !== null) {
const horizontalBarChart = new ApexCharts(horizontalBarChartEs2, horizontalBarChartConfigs2);
horizontalBarChart.render();
}
// Horizontal Bar Chart
const horizontalBarChartEs3 = document.querySelector('#Shop-three'),
horizontalBarChartConfigs3 = {
  chart: {
   
    height: 400,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      startingShape: 'rounded',
      borderRadius: 8
    }
  },
  grid: {
    borderColor: borderColor,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: -20,
      bottom: -12
    }
  },
  colors: config.colors.info,
  dataLabels: {
    enabled: true,
   
          style: {
            fontSize: '14px',
            colors: ["#000"]
          }
  },
  series: [
    {
      data: [389, 170, 26, 72,72,219]
    }
  ],
  colors: [
    "#4CAF50",
  ],
  xaxis: {
    categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px'
      }
    }
  },
  yaxis: {
   
    labels: {
      style: {
        colors: labelColor,
        fontSize: '10px'
      }
    }
  }
};
if (typeof horizontalBarChartEs3 !== undefined && horizontalBarChartEs3 !== null) {
const horizontalBarChart = new ApexCharts(horizontalBarChartEs3, horizontalBarChartConfigs3);
horizontalBarChart.render();
}
// Horizontal Bar Chart
const horizontalBarChartEs4 = document.querySelector('#Shop-four'),
horizontalBarChartConfigs4 = {
  chart: {
   
    height: 400,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      startingShape: 'rounded',
      borderRadius: 8
    }
  },
  grid: {
    borderColor: borderColor,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: -20,
      bottom: -12
    }
  },
  colors: config.colors.info,
  dataLabels: {
    enabled: true,
   
          style: {
            fontSize: '14px',
            colors: ["#000"]
          }
  },
  series: [
    {
      data: [202, 164, 58,42,64,38]
    }
  ],
  colors: [
    "#2B9AFF",
  ],
  xaxis: {
    categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px'
      }
    }
  },
  yaxis: {
   
    labels: {
      style: {
        colors: labelColor,
        fontSize: '10px'
      }
    }
  }
};
if (typeof horizontalBarChartEs4 !== undefined && horizontalBarChartEs4 !== null) {
const horizontalBarChart = new ApexCharts(horizontalBarChartEs4, horizontalBarChartConfigs4);
horizontalBarChart.render();
}
// Horizontal Bar Chart
const horizontalBarChartEd1 = document.querySelector('#Drawings-Chart'),
horizontalBarChartConfigd1 = {
  chart: {
   
    height: 400,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      startingShape: 'rounded',
      borderRadius: 8
    }
  },
  grid: {
    borderColor: borderColor,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: -20,
      bottom: -12
    }
  },
  colors: config.colors.info,
  dataLabels: {
    enabled: true,
   
          style: {
            fontSize: '14px',
            colors: ["#000"]
          }
  },
  series: [
    {
      data: [122, 97,23, 40,34,25]
    }
  ],
  colors: [
    "#84D0FF",
  ],
  xaxis: {
    categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px'
      }
    }
  },
  yaxis: {
   
    labels: {
      style: {
        colors: labelColor,
        fontSize: '10px'
      }
    }
  }
};
if (typeof horizontalBarChartEd1 !== undefined && horizontalBarChartEd1 !== null) {
const horizontalBarChart = new ApexCharts(horizontalBarChartEd1, horizontalBarChartConfigd1);
horizontalBarChart.render();
}
// Horizontal Bar Chart
const horizontalBarChartEd2 = document.querySelector('#Drawings-tow'),
horizontalBarChartConfigd2 = {
  chart: {
   
    height: 400,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      startingShape: 'rounded',
      borderRadius: 8
    }
  },
  grid: {
    borderColor: borderColor,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: -20,
      bottom: -12
    }
  },
  colors: config.colors.info,
  dataLabels: {
    enabled: true,
   
          style: {
            fontSize: '14px',
            colors: ["#000"]
          }
  },
  series: [
    {
      data: [332, 320, 300, 0,20,12]
    }
  ],
  colors: [
    "#f973a0",
  ],
  xaxis: {
    categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px'
      }
    }
  },
  yaxis: {
   
    labels: {
      style: {
        colors: labelColor,
        fontSize: '10px'
      }
    }
  }
};
if (typeof horizontalBarChartEd2 !== undefined && horizontalBarChartEd2 !== null) {
const horizontalBarChart = new ApexCharts(horizontalBarChartEd2, horizontalBarChartConfigd2);
horizontalBarChart.render();
}
// Horizontal Bar Chart
const horizontalBarChartEd3 = document.querySelector('#Drawings-three'),
horizontalBarChartConfigd3 = {
  chart: {
   
    height: 400,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      startingShape: 'rounded',
      borderRadius: 8
    }
  },
  grid: {
    borderColor: borderColor,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: -20,
      bottom: -12
    }
  },
  colors: config.colors.info,
  dataLabels: {
    enabled: true,
   
          style: {
            fontSize: '14px',
            colors: ["#000"]
          }
  },
  series: [
    {
      data: [389, 170, 26, 72,72,219]
    }
  ],
  colors: [
    "#2B9AFF",
  ],
  xaxis: {
    categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING' ,'UNDER REVEW','REMAINING'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px'
      }
    }
  },
  yaxis: {
   
    labels: {
      style: {
        colors: labelColor,
        fontSize: '10px'
      }
    }
  }
};
if (typeof horizontalBarChartEd3 !== undefined && horizontalBarChartEd3 !== null) {
const horizontalBarChart = new ApexCharts(horizontalBarChartEd3, horizontalBarChartConfigd3);
horizontalBarChart.render();
}
// Horizontal Bar Chart
const horizontalBarChartEd4 = document.querySelector('#Drawings-four'),
horizontalBarChartConfigd4 = {
  chart: {
   
    height: 400,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      startingShape: 'rounded',
      borderRadius: 8
    }
  },
  grid: {
    borderColor: borderColor,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: -20,
      bottom: -12
    }
  },
  colors: config.colors.info,
  dataLabels: {
    enabled: true,
   
          style: {
            fontSize: '14px',
            colors: ["#000"]
          }
  },
  series: [
    {
      data: [202, 164, 58,42,64,38]
    }
  ],
  colors: [
    "#991CFB",
  ],
  xaxis: {
    categories: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px'
      }
    }
  },
  yaxis: {
   
    labels: {
      style: {
        colors: labelColor,
        fontSize: '10px'
      }
    }
  }
};
if (typeof horizontalBarChartEd4 !== undefined && horizontalBarChartEd4 !== null) {
const horizontalBarChart = new ApexCharts(horizontalBarChartEd4, horizontalBarChartConfigd4);
horizontalBarChart.render();
}



var options = {
  series: [0.876, 0.124],
  chart: {
    type: 'donut',
  },
  labels: ['Success', 'Failure'],
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
            label: 'Total',
          },
          value: {
            show: true,
          },
        },
      },
    },
  },
  colors: ['#FF00FF', '#C0C0C0'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
      },
      legend: {
        position: 'bottom',
      },
    },
  }],
};

var chart = new ApexCharts(document.querySelector("#chart-9"), options);
chart.render();
})();


   
 