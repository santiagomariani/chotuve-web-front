import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleIcon from '@material-ui/icons/People';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LayersIcon from '@material-ui/icons/Layers';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    estiloLink: {
      textDecoration: 'none',
    }
}));

export default function MainList () {
    const  classes = useStyles();
    return (
        <div>
        <Link href="/dashboard" className={classes.estiloLink}>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link href="/resources">
          <ListItem button>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Resources" />
          </ListItem>
        </Link>
        <Link href="/users">
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
        </Link>
        <Link href="/app-servers">
          <ListItem button>
            <ListItemIcon>
              <PhoneIphoneIcon />
            </ListItemIcon>
            <ListItemText primary="App servers" />
          </ListItem>
        </Link>
      </div>
    )
  }

