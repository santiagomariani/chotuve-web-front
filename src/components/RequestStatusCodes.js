import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Title from 'components/Title';

export default function RequestStatusCodes ({data}) {

  let config = {
    dataBar: {
      labels: ['200', '201', '400', '401', '404', '500', '502'],
      datasets: [
        {
          label: "Request per status code",
          data: [],
          backgroundColor: [
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447"
          ],
          borderWidth: 2,
          borderColor: [
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39"
          ]
        }
      ]
    },
    barChartOptions: {
      legend: {
        labels: {
          fontColor: 'white'
        } 
      },
      responsive: true,
      maintainAspectRatio: false,
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
              beginAtZero: true,
              fontColor: 'white'
            }
          }
        ]
      }
    }
  };
  const tempData = []
  for (let i = 0; i < config.dataBar.labels.length; i++) {
    if (!data[config.dataBar.labels[i]]) {
      tempData.push(0)
    } else {
      tempData.push(data[config.dataBar.labels[i]])
    }
  }
  config.dataBar.datasets[0].data = tempData;

  return (
    <div>
    <MDBContainer>
      <Title>Request Per Status Code</Title>
      <div>
      <HorizontalBar data={config.dataBar} options={config.barChartOptions} />
      </div>
    </MDBContainer>
    </div>
  );
}