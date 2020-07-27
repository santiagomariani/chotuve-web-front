import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UniqueValueStat from './UniqueValueStat';
import Menu from 'components/Menu';
import RequestPerHour from 'components/RequestPerHour'
import RequestPerMethod from 'components/RequestPerMethod'
import RequestStatusCodes from 'components/RequestStatusCodes'
import PrivateVsPublicVideos from 'components/PrivateVsPublicVideos'
import {app} from 'app/app'
import RequestsLast30Days from 'components/RequestsLast30Days';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: '100%',
  },
}));

export default function DashboardPage() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [stats, setStats] = useState(null)

  useEffect(() => {
    app.apiClient().getStats((response) => response.content())
                   .then((content) => {
      console.log(content)
      console.log(content['requests_per_hour'])
      console.log(content['requests_per_hour']['20.0'])
      setStats(content)
    })
  }, [])
  
  if (stats) {
    console.log(stats)
    return (
      <Menu>
      <Grid container alignItems="stretch" spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper className={fixedHeightPaper} style={{"padding": "10px"}}>
            <RequestPerHour data={stats['requests_per_hour']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={fixedHeightPaper} style={{"padding": "10px"}}>
            <RequestPerMethod data={stats['requests_per_method']}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={fixedHeightPaper}>
            <RequestStatusCodes data={stats['requests_per_code']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={fixedHeightPaper}>
            <UniqueValueStat title={'Registered Users'} value={stats['registered_users_count']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={fixedHeightPaper}>
            <UniqueValueStat title={'Total Requests'} value={stats['total_count']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={fixedHeightPaper}>
            <UniqueValueStat title={'Average Views'} value={stats['average_views'].toFixed(3)} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={fixedHeightPaper}>
            <PrivateVsPublicVideos data={stats['private_and_total_vids_count']} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <RequestsLast30Days />
          </Paper>
        </Grid>
      </Grid>
      </Menu>
    )
  } else {
    return null
  }
}