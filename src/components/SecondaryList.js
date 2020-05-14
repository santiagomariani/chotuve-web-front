import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function SecondaryList () {
    return (
        <div>
            <ListItem button>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sign out" />
            </ListItem>
        </div>
    )
}
