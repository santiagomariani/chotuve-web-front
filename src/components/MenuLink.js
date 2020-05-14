import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    estiloLink: {
      textDecoration: 'none',
      color: 'white'
    }
}));

export default function MenuLink (props) {
    const  classes = useStyles();
    return (
        <Link className={classes.estiloLink} {...props} underline='none'/>
    )
  }
