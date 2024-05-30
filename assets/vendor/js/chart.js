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

  // --------------------------------------------------------------------


  const horizontalBarChart = document.getElementById('horizontalBarChart');
  if (horizontalBarChart) {
    const horizontalBarChartVar = new Chart(horizontalBarChart, {
      type: 'bar',
      data: {
        labels: ['SUBMITTED', 'APPROVED', 'REJECTED ', 'UNDER REVEW'],
        datasets: [
          {
            data: [400, 320, 40, 40],
            backgroundColor: config.colors.info,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }

  const horizontalBarCharttow = document.getElementById('horizontalBarChart-tow');
  if (horizontalBarCharttow) {
    const horizontalBarChartVar = new Chart(horizontalBarCharttow, {
      type: 'bar',
      data: {
        labels: ['SUBMITTED', 'APPROVED', 'REJECTED ', 'UNDER REVEW'],
        datasets: [
          {
            data: [400, 320, 40, 40],
            backgroundColor: purpColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  
  const horizontalBarChartthree = document.getElementById('horizontalBarChart-three');
  if (horizontalBarChartthree) {
    const horizontalBarChartVar = new Chart(horizontalBarChartthree, {
      type: 'bar',
      data: {
        labels: ['SUBMITTED', 'APPROVED', 'REJECTED ', 'UNDER REVEW'],
        datasets: [
          {
            data: [400, 320, 40, 40],
            backgroundColor: blueCOLORT,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }

  const horizontalBarChartfour = document.getElementById('horizontalBarChart-four');
  if (horizontalBarChartfour) {
    const horizontalBarChartVar = new Chart(horizontalBarChartfour, {
      type: 'bar',
      data: {
        labels: ['ISSUED', 'CLOSED', 'OPENNED '],
        datasets: [
          {
            
            data: [400, 320, 80],
            backgroundColor: dangerColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          
          x: {
            min: 0,
           
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor,
              
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            
            },
            ticks: {
              color: labelColor,
             
            }
          }
        }
      }
    });
  }
  //----------------------------------------------------
  const longChart = document.getElementById('long-Chart');
  if (longChart) {
    const horizontalBarChartVar = new Chart(longChart, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REMAINING','PEJECTED' ,'UNDER REVEW','DELIVERED'],
        datasets: [
          {
            data: [5, 5, 5, 0,0,0,5],
            backgroundColor: config.colors.info,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const longCharttow = document.getElementById('longCharttow-tow');
  if (longCharttow) {
    const horizontalBarChartVar = new Chart(longCharttow, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REMAINING','PEJECTED' ,'UNDER REVEW','DELIVERED'],
        datasets: [
          {
            data: [2, 2, 2, 0,0,0,2],
            backgroundColor: purpColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const longChartthree = document.getElementById('longChart-three');
  if (longChartthree) {
    const horizontalBarChartVar = new Chart(longChartthree, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REMAINING','PEJECTED' ,'UNDER REVEW','DELIVERED'],
        datasets: [
          {
            data: [15, 13, 10, 2,3,0,5],
            backgroundColor: blueCOLORT,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const longChartfour = document.getElementById('longChart-four');
  if (longChartfour) {
    const horizontalBarChartVar = new Chart(longChartfour, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REMAINING','PEJECTED' ,'UNDER REVEW','DELIVERED'],
        datasets: [
          {
            
            data: [10, 8, 6,2,1,1,5],
            backgroundColor: orangeColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          
          x: {
            min: 0,
           
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor,
              
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            
            },
            ticks: {
              color: labelColor,
             
            }
          }
        }
      }
    });
  }
  //----------------------------------------------------
  const MaterialChart = document.getElementById('Material-Chart');
  if (MaterialChart) {
    const horizontalBarChartVar = new Chart(MaterialChart, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [60, 55,45, 5,5,5],
            backgroundColor: yellowColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Materialtow = document.getElementById('Material-tow');
  if (Materialtow) {
    const horizontalBarChartVar = new Chart(Materialtow, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [45, 45, 45, 0,0,0],
            backgroundColor: brownCOLOR,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Materialthree = document.getElementById('Material-three');
  if (Materialthree) {
    const horizontalBarChartVar = new Chart(Materialthree, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [67, 47, 33, 11,3,20],
            backgroundColor: blueColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Materialfour = document.getElementById('Material-four');
  if (Materialfour ) {
    const horizontalBarChartVar = new Chart(Materialfour , {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            
            data: [111, 101, 57,17,27,10],
            backgroundColor: grunCOLOR,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          
          x: {
            min: 0,
           
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor,
              
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            
            },
            ticks: {
              color: labelColor,
             
            }
          }
        }
      }
    });
  }
  //----------------------------------------------------
  const BuiltChart = document.getElementById('Built-Chart');
  if (BuiltChart) {
    const horizontalBarChartVar = new Chart(BuiltChart, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [120, 95,23, 40,32,25],
            backgroundColor: grunCOLOR,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Builttow = document.getElementById('Built-tow');
  if (Builttow) {
    const horizontalBarChartVar = new Chart(Builttow, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [332, 320, 300, 0,20,10],
            backgroundColor: blueColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Builtthree = document.getElementById('Built-three');
  if (Builtthree) {
    const horizontalBarChartVar = new Chart(Builtthree, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [389, 170, 26, 72,72,219],
            backgroundColor: greyColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Builtfour = document.getElementById('Built-four');
  if (Builtfour ) {
    const horizontalBarChartVar = new Chart(Builtfour , {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            
            data: [202, 164, 58,42,64,38],
            backgroundColor: blueLightColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          
          x: {
            min: 0,
           
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor,
              
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            
            },
            ticks: {
              color: labelColor,
             
            }
          }
        }
      }
    });
  }
  //----------------------------------------------------
  const ShopChart = document.getElementById('Shop-Chart');
  if (ShopChart) {
    const horizontalBarChartVar = new Chart(ShopChart, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [122, 97,23, 40,34,25],
            backgroundColor: yellowColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Shoptow = document.getElementById('Shop-tow');
  if (Shoptow) {
    const horizontalBarChartVar = new Chart(Shoptow, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [332, 320, 300, 0,20,12],
            backgroundColor: dangerLIGHTColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Shopthree = document.getElementById('Shop-three');
  if (Shopthree) {
    const horizontalBarChartVar = new Chart(Shopthree, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [389, 170, 26, 72,72,219],
            backgroundColor: grunCOLOR,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Shopfour = document.getElementById('Shop-four');
  if (Shopfour ) {
    const horizontalBarChartVar = new Chart(Shopfour , {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            
            data: [202, 164, 58,42,64,38],
            backgroundColor: blueColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          
          x: {
            min: 0,
           
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor,
              
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            
            },
            ticks: {
              color: labelColor,
             
            }
          }
        }
      }
    });
  }
  //----------------------------------------------------
  const DrawingsChart = document.getElementById('Drawings-Chart');
  if (DrawingsChart) {
    const horizontalBarChartVar = new Chart(DrawingsChart, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [122, 97,23, 40,34,25],
            backgroundColor: blueLightColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Drawingstow = document.getElementById('Drawings-tow');
  if (Drawingstow) {
    const horizontalBarChartVar = new Chart(Drawingstow, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [332, 320, 300, 0,20,12],
            backgroundColor: dangerLIGHTColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Drawingsthree = document.getElementById('Drawings-three');
  if (Drawingsthree) {
    const horizontalBarChartVar = new Chart(Drawingsthree, {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            data: [389, 170, 26, 72,72,219],
            backgroundColor: blueColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            },
            ticks: {
              color: labelColor
            }
          }
        }
      }
    });
  }
  const Drawingsfour = document.getElementById('Drawings-four');
  if (Drawingsfour ) {
    const horizontalBarChartVar = new Chart(Drawingsfour , {
      type: 'bar',
      data: {
        labels: ['TOTALMTERIAL', 'SUBMITTED', 'APPROVED ','REJECTED' ,'UNDER REVEW','REMAINING'],
        datasets: [
          {
            
            data: [202, 164, 58,42,64,38],
            backgroundColor: purpColor,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          
          tooltip: {
            rtl: isRtl,
            backgroundColor: cardColor,
            titleColor: headingColor,
            bodyColor: legendColor,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          
          x: {
            min: 0,
           
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: labelColor,
              
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false,
              drawBorder: false
            
            },
            ticks: {
              color: labelColor,
             
            }
          }
        }
      }
    });
  }
  //-------------------
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
      colors: [blueColor,purpColor ,blueLightColor, dangerLIGHTColor],
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
      series: [39, 39, 39,64],
      labels: ['Design Drawings', 'Shop Drawings', 'As-Built Drawings','Material Status']
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
      height: 400,
 
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
//////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
      height: 200,
      whidth:200,
      type: 'radialBar',
  },
  series: [40],
  labels: ['SUBMITTED'],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub"), options);

chart.render();
//////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
      height: 200,
      type: 'radialBar',
  },
  series: [50],
  labels: ['APPROVED'],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub2"), options);

chart.render();
/////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
      height: 200,
      whidth:200,
      type: 'radialBar',
  },
  series: [40],
  labels: ['SUBMITTED'],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub3"), options);

chart.render();
//////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
      height: 200,
      type: 'radialBar',
  },
  series: [50],
  labels: ['APPROVED'],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub4"), options);

chart.render();
/////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
      height: 200,
      whidth:200,
      type: 'radialBar',
  },
  series: [40],
  labels: ['SUBMITTED'],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub5"), options);

chart.render();
//////////////////
var options = {
  colors : ['#6f309f'],
  chart: {
      height: 200,
      type: 'radialBar',
  },
  series: [50],
  labels: ['APPROVED'],
 
}

var chart = new ApexCharts(document.querySelector("#chart-sub6"), options);

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

var chart = new ApexCharts(document.querySelector("#chartteam1"), options);
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

var chart = new ApexCharts(document.querySelector("#chartteam2"), options);
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

var chart = new ApexCharts(document.querySelector("#chartteam3"), options);
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

var chart = new ApexCharts(document.querySelector("#chartteam4"), options);
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

var chart = new ApexCharts(document.querySelector("#chartteam1-pos"), options);
chart.render();
})();


   
 