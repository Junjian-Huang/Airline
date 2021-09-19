import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { SideBar } from "../Sidebar/Sidebar";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import logo from "../assets/logos/header_logo.svg";
import { useHistory, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Self_self } from "../../api/__generated__/Self";
import { LOGIN } from "../../api/mutations";

import "./AirHeader.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export interface HeaderProps {
  user?: Self_self;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#5c2d91",
      minHeight: "65px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      border: "1px solid",
    },
    title: {
      flexGrow: 1,
      marginRight: "200px",
    },
    inputRoot: {
      color: "inherit",
    },
    userInformation: {
      display: "flex",
      marginLeft: "20px",
    },
    flexEnd: {
      justifyContent: "flex-end",
      alignItems: "center",
      display: "flex",
    },
    loginbutton: {
      border: "1px solid",
    },
  })
);


export interface Login_login_aircraft {
  __typename: "Aircraft";
  id: string;
  type: string;
  gitHub: string;
  imageURL: string;
}

export interface Login_login {
  __typename: "LoginPayload";
  aircraft: Login_login_aircraft;
  jwt: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  code: string;
}

const CLIENT_ID = "3533ed427b1b4b228584";
const REDIRECT_URI = "http://localhost:3000/home";


export const AirHeader: React.FC<HeaderProps> = ({ user }) => {
  const history = useHistory()
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);

  const query = useQuery();

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const [login] = useMutation<Login>(LOGIN);

  useEffect(() => {
    const loginMethod = async () => {
      const code = query.get("code");
      if (code != null) {
        try {
          const { data } = await login({ variables: { code } });
          if (data != null) {
            localStorage.setItem("token", data.login.jwt)
          }
        } catch (e) {
          console.log(e);
        }
        history.push('/home');
      }
    };
    loginMethod();
  }, []);


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar>
          <IconButton
            id="hoverChange"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSideBar}>
          <MenuIcon />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
              <SideBar user={user} />
            </Drawer>
          </IconButton>
          <IconButton href="/home" id="hoverChange">
              <img src={logo} id="logo" width="120px" alt="header Logo" />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
                      Airline Assignment System
          </Typography>
          {user == null ? (
              <Button
                className={classes.loginbutton}
                id="hoverChange"
                color="inherit"
                href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
              >
                Login
              </Button>
            ) : (
              <div className={classes.userInformation}>
                <Hidden smDown>
                  <Avatar alt="user-avatar" src={user.imageURL} />
                  <Button color="inherit" href="/submit">{user.type}</Button>
                </Hidden>
              </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
