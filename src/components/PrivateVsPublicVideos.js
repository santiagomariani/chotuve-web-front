import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Title from 'components/Title';

export default function PrivateVsPublicVideos({data}) {
  
  let config = {
    dataPie: {
      labels: ['Private', 'Public'],
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#F7464A",
            "#46BFBD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1"
          ]
        }
      ]
    }
  }

  return (
  <MDBContainer>
    <Title>Public vs Private videos</Title>
    <div>
      <Pie data={config.dataPie} options={{ responsive: true }} />
    </div>
  </MDBContainer>
  );
}