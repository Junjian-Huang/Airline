import React from 'react';
import { Divider, Link, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FlightIcon from '@material-ui/icons/Flight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { HeaderProps } from '../AirlineHeader/AirHeader';

import "./Sidebar.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listText: {
    color: "black"
  },
  fullList: {
    width: 'auto',
  },
});

const CLIENT_ID = "3533ed427b1b4b228584";
const REDIRECT_URI = "http://localhost:3000/home";

export const SideBar: React.FC<HeaderProps> = ({ user }) => {
  const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem("token");
  }
  return (
    <div className={classes.list}>
      <List>
        <ListItem button href="/" component={Link} className='nav-links'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Home" />
        </ListItem>
        <ListItem button href="/submit" component={Link} className='nav-links'>
            <ListItemIcon><ArrowUpwardIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Submit" />
        </ListItem>
        <ListItem button href="/addAirline" component={Link} className='nav-links'>
            <ListItemIcon><FlightIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Add Airline" />
        </ListItem>
      </List>
      <Divider />
      <List className='nav-links'>
        {user ?
          <ListItem button href="/home" component={Link} onClick={handleLogout}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Logout" />
          </ListItem> :
          <ListItem button href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`} component={Link}>
            <ListItemIcon><AddBoxIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Login" />
          </ListItem>

        }
      </List>
    </div>
  )
}
