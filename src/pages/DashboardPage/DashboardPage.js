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
import Last30DaysStats from 'components/Last30DaysStats';
import Top10ErrorsLast30Days from 'components/Top10ErrorsLast30Days';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  equalHeight: {
    height: '100%',
  },
  fixedHeight: {
    height: '260px'
  }
}));

export default function DashboardPage() {
  const classes = useStyles();
  const equalHeightPaper = clsx(classes.paper, classes.equalHeight);
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
          <Paper className={equalHeightPaper} style={{"padding": "10px"}}>
            <RequestPerHour data={stats['requests_per_hour']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={equalHeightPaper} style={{"padding": "10px"}}>
            <RequestPerMethod data={stats['requests_per_method']}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={equalHeightPaper}>
            <RequestStatusCodes data={stats['requests_per_code']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={equalHeightPaper}>
            <UniqueValueStat title={'Registered Users'} value={stats['registered_users_count']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={equalHeightPaper}>
            <UniqueValueStat title={'Total Requests last 30 days'} value={stats['total_count_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={equalHeightPaper}>
            <UniqueValueStat title={'Average Views'} value={stats['average_views'].toFixed(3)} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={equalHeightPaper}>
            <PrivateVsPublicVideos data={stats['private_and_total_vids_count']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Top10ErrorsLast30Days title='Client errors per path in last 30 days' data={stats['cli_errors_per_path_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Top10ErrorsLast30Days title='Server errors per path in last 30 days' data={stats['sv_errors_per_path_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Last30DaysStats title='Requests in last 30 days' data={stats['requests_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Last30DaysStats title='Server errors in last 30 days' data={stats['sv_errors_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Last30DaysStats title='Client errors in last 30 days' data={stats['cli_errors_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Last30DaysStats title='New users in last 30 days' data={stats['new_users_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Last30DaysStats title='New videos in last 30 days' data={stats['new_vids_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Last30DaysStats title='New comments in last 30 days' data={stats['new_cmnts_in_last_30_days']} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={equalHeightPaper}>
            <Last30DaysStats title='Views in last 30 days' data={stats['views_in_last_30_days']} />
          </Paper>
        </Grid>
      </Grid>
      </Menu>
    )
  } else {
    return (<Menu>
      <LinearProgress />
    </Menu>)
  }
}