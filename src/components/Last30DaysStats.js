import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Title from 'components/Title';

export default function Last30DaysStats({data, title}) {
  const config = {
    dataLine: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8",
               "9", "10", "11", "12", "13", "14", "15",
               "16", "17", "18", "19", "20", "21", "22",
               "23", "24", "25", "26", "27", "28", "29", "30"],
      datasets: [
        {
          label: title,
          fill: true,
          lineTension: 0.3,
          backgroundColor: "#5ec447",
          borderColor: "#4b9c39",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }
      ]
    },
    lineChartOptions: {
      responsive: true,
      legend: {
        labels: {
          fontColor: 'white'
        } 
      },
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              fontColor: 'white'
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            },
            ticks: {
              fontColor: 'white'
            }
          }
        ]
      }
    }
  };

  let labels = config.dataLine.labels
  let tempData = []
  for (let i = 0; i < labels.length; i++) {
    if (!data[labels[i] + '.0']) {
      tempData.push(0)
    } else {
      tempData.push(data[labels[i] + '.0'])
    }
  }
  config.dataLine.datasets[0].data = tempData;

  return (
    <MDBContainer>
      <Title>{title}</Title>
      <div>
        <Line data={config.dataLine}  style={{'width':'800px', 'height': '300px', 'overflow': 'hidden'}} options={config.lineChartOptions} />
      </div>
    </MDBContainer>
  );
}