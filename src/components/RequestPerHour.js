import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Title from 'components/Title';

export default function RequestPerHour ({data}) {

  let config = {
    dataBar: {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8",
               "9", "10", "11", "12", "13", "14", "15",
               "16", "17", "18", "19", "20", "21", "22", "23"],
      datasets: [
        {
          label: "Request per hour",
          data: [],
          backgroundColor: [
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)",
            "rgba(101, 206,42,1)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)",
            "rgba(101, 150,42,1)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
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
            }
          }
        ]
      }
    }
  };
  let tempData = []
  for (let i = 0; i < 24; i++) {
    if (!data[i.toString() + '.0']) {
      tempData.push(0)
    } else {
      tempData.push(data[i.toString() + '.0'])
    }
  }
  config.dataBar.datasets[0].data = tempData;
  return (
    <div>
    <MDBContainer>
      <Title>Request Per Hour</Title>
      <div>
      <Bar data={config.dataBar} options={config.barChartOptions} />
      </div>
    </MDBContainer>
    </div>
  );
}