import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Title from "components/Title";

function sortObject(list) {
  var sortable = [];
  for (var key in list) {
    sortable.push([key, list[key]]);
  }

  sortable.sort(function (a, b) {
    return a[1] > b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });

  var orderedList = {};
  for (var idx in sortable) {
    orderedList[sortable[idx][0]] = sortable[idx][1];
  }

  return orderedList;
}

export default function Top10ErrorsLast30Days({ data, title }) {
  let config = {
    dataBar: {
      labels: [],
      datasets: [
        {
          label: "Request per hour",
          data: [],
          backgroundColor: [
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
            "#5ec447",
          ],
          borderWidth: 2,
          borderColor: [
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
            "#4b9c39",
          ],
        },
      ],
    },
    barChartOptions: {
      legend: {
        labels: {
          fontColor: "white",
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              fontColor: "white",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              beginAtZero: true,
              fontColor: "white",
            },
          },
        ],
      },
    },
  };
  let tempData = sortObject(data);
  config.dataBar.labels = Object.keys(tempData).slice(0, 10);
  config.dataBar.datasets[0].data = Object.values(tempData).slice(0, 10);
  console.log(tempData);
  console.log(config.dataBar.labels);
  console.log(config.dataBar.datasets[0].data);
  return (
    <div>
      <MDBContainer>
        <Title>{title}</Title>
        <div>
          <Bar data={config.dataBar} options={config.barChartOptions} />
        </div>
      </MDBContainer>
    </div>
  );
}
