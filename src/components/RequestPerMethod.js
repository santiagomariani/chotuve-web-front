import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Title from 'components/Title';

export default function RequestPerMethod({data}) {
  
  let config = {
    dataPie: {
      labels: ['PATCH', 'POST', 'GET', 'DELETE', 'PUT'],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    },
    pieChartOptions: {
      legend: {
        labels: {
          fontColor: 'white'
        } 
      },
      responsive: true
    }
  }
  
  const tempData = []
  
  for (let i = 0; i < config.dataPie.labels.length; i++) {
    if (!data[config.dataPie.labels[i]]) {
      tempData.push(0)
    } else {
      tempData.push(data[config.dataPie.labels[i]])
    }
  }
  config.dataPie.datasets[0].data = tempData;

  return (
  <MDBContainer>
    <Title>Request per method</Title>
    <div>
      <Pie data={config.dataPie} options={config.pieChartOptions} />
    </div>
  </MDBContainer>
  );
}