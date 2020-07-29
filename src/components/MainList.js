import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PeopleIcon from "@material-ui/icons/People";
import MenuLink from "./MenuLink";

export default function MainList() {
  return (
    <div>
      <MenuLink href="/dashboard">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </MenuLink>
      <MenuLink href="/resources">
        <ListItem button>
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>
      </MenuLink>
      <MenuLink href="/users">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </MenuLink>
    </div>
  );
}
