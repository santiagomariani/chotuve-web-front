import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../components/Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function UniqueValueStat({ title, value }) {
  const classes = useStyles();
  return (
    <>
      <Title>{title}</Title>
      <h2
        style={{
          display: "flex",
          "justify-content": "center",
          alignItems: "center",
          marginTop: "30px",
          padding: "0px",
          fontSize: "60px",
        }}
      >
        {value}
      </h2>
    </>
  );
}
