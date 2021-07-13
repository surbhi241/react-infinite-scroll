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
  }));
  
const Header = () => {
    const history = useHistory();
    const classes = useStyles();
    const handleLogout = () => {
        localStorage.setItem("user", JSON.stringify({}))
        history.push("/login");
    }
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                       User List
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;