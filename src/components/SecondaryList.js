import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { app } from "app/app";
import { useHistory } from "react-router-dom";

export default function SecondaryList() {
  const history = useHistory();

  const handleOnClickSignOut = (e) => {
    e.preventDefault();
    app.logoutUser();
    history.push("/");
  };

  return (
    <div>
      <ListItem onClick={handleOnClickSignOut} button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sign out" />
      </ListItem>
    </div>
  );
}
