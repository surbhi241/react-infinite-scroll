import { AppBar, Toolbar, Typography, Button, makeStyles, Grid } from "@material-ui/core";
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
      marginLeft: theme.spacing(2),
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
        history.push("/");
    }
    return(
        <>
            <AppBar position="static" className={classes.stickyHeader}>
                <Toolbar>
                  <Grid container>
                    <Grid item xs={6} container justifyContent="flex-start">
                      <Typography variant="h6" className={classes.title}>
                        User List
                      </Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent="flex-end">
                      <Button color="inherit" 
                      className={classes.btnContained}
                      variant="contained"
                      onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </Grid>
                  </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;