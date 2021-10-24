class ChartProperties {
    datasetProperties = {
        barThickness: 30,
        maxBarThickness: 35,
        minBarThickness: 25,
        lineTension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: 'rgba(78, 115, 223, 1)',
        pointBorderColor: 'rgba(78, 115, 223, 1)',
        pointHoverRadius: 3,
        pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
        pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
        pointHitRadius: 10,
        pointBorderWidth: 2,
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 199, 122, 0.6)',
            'rgba(255, 199, 102, 0.6)',
        ],
        hoverBackgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 199, 122, 0.9)',
            'rgba(255, 199, 102, 0.9)',
        ],
        borderWidth: 2,
        borderColor: '#777',
        hoverBorderColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 199, 122, 0.9)',
            'rgba(255, 199, 102, 0.9)',
        ],
    };
    chartOptionsProperties = {
        tooltips: {
            enabled: true,
            backgroundColor: 'rgb(255,255,255)',
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000',
            bodyFontColor: '#858796',
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            caretPadding: 10,
        },
        maintainAspectRatio: false,
        responsive: true,
        layout: {
            padding: {
                left: 5,
                right: 0,
                bottom: 0,
                top: 50
            }
        },
        legend: {
            display: true,
            labels: {
                fontColor: '#000',
                usePointStyle: true,
                fontSize: 10,
                padding: 7,
                boxWidth: 12,
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    maxTicksLimit: 10,
                    padding: 10,
                    paddingBottom: 20,
                    maxRotation: 90,
                    minRotation: 0,
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 10,
                    padding: 10,
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return '$' + value;
                    }
                },
                gridLines: {
                    color: 'rgb(234, 236, 244)',
                    zeroLineColor: 'rgb(234, 236, 244)',
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },

        plugins: {
            datalabels: {
                display: true,
                color: '#FFCE56',
                anchor: 'end',
                align: 'top',
                font: {
                    weight: 'bold',
                    size: 12
                },
            },
        }
    };
}


export const chartProperty = new ChartProperties();