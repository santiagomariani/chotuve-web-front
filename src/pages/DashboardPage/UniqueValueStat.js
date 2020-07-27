import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../components/Title';
import ReactFitText from 'react-fittext'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function UniqueValueStat({title, value}) {
  const classes = useStyles();
  return (
    <div>
      <Title>{title}</Title>
      <ReactFitText>
      <h2 style={{'display': 'flex',
                  'justify-content': 'center',
                  'alignItems': 'center',
                  marginTop: '0px'}}>
        {value}
      </h2>
      </ReactFitText>
    </div>
  );
}
