import React from 'react';
import { Divider, Link, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FlightIcon from '@material-ui/icons/Flight';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { HeaderProps } from '../AirlineHeader/AirHeader';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

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
        <ListItem button href="/addDescription" component={Link} className='nav-links'>
            <ListItemIcon><ArrowUpwardIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Add Description" />
        </ListItem>
        <ListItem button href="/addAirline" component={Link} className='nav-links'>
            <ListItemIcon><FlightIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Add Airline" />
        </ListItem>
        <ListItem button href="/searchPage" component={Link} className='nav-links'>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Search Airpcraft" />
        </ListItem>
        <ListItem button href="/aircraftPage" component={Link} className='nav-links'>
            <ListItemIcon><FlightTakeoffIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Airpcrafts" />
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
            <ListItemIcon><LockOpenIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Login" />
          </ListItem>

        }
      </List>
    </div>
  )
}
