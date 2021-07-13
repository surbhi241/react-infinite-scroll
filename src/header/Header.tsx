import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    stickyHeader: {
      position: "fixed",
      top: 0
    },
    btnContained: {
      color: "#3F51B5",
      background: "#FFF"
    }
  }));
  
const Header = () => {
    const history = useHistory();
    const classes = useStyles();
    const handleLogout = () => {
        localStorage.setItem("user",JSON.stringify({}))
        history.push("/login");
    }
    return(
        <>
            <AppBar position="static" className={classes.stickyHeader}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                       User List
                    </Typography>
                    <Button color="inherit" className={classes.btnContained} variant="contained" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;