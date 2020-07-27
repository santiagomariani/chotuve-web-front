import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Title from 'components/Title';

export default function RequestsLast30Days({data}) {
  const config = {
    dataLine: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8",
               "9", "10", "11", "12", "13", "14", "15",
               "16", "17", "18", "19", "20", "21", "22",
               "23", "24", "25", "26", "27", "28", "29", "30"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(101, 206,42,1)",
          borderColor: "rgba(101, 150,42,1)",
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
          data: [65, 59, 80, 81, 56, 55, 40,
                65, 42, 80, 81, 26, 55, 40,
                65, 11, 80, 21, 56, 15, 49,
                65, 86, 80, 41, 66, 55, 40, 22, 55]
        }
      ]
    }
  };


  return (
    <MDBContainer>
      <Title>Requests Last 30 Days</Title>
      <Line data={config.dataLine} options={{ responsive: true }} />
    </MDBContainer>
  );
}