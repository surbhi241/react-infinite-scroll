import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";

interface UserDetails {
 firstName: string;
 lastName: string;
 userImg: string;
}

export const isEmpty: any = (value: any) => {
    return (typeof value === "undefined" || value === null);
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardWrapper:{
     border: "1px solid #f2f2f2",
     display: "flex",
     justifyContent: "center",
     height: "100px",
     padding: theme.spacing(1)
    },
    buttonContainer:{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    userCardContainer: {
        padding: theme.spacing(1)
    },
    userImgWrapper: {
        display: "flex",
        alignSelf: "center",
        borderRadius: "50px",
    },
    userImg: {
        width: `calc(30% - 30px)`,
        borderRadius: "50px"
    },
    userName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: theme.spacing(2)
    },
  }));
const UserCard = (props: any) => {
    const classes = useStyles();
    const { userDetails } = props;
    const { first, last } = userDetails.name;
    const { large } = userDetails.picture;
    const fullName = !isEmpty(first) && !isEmpty(last) ? `${first} ${last}` : first || last;
    const handleViewDetail = () => {
        console.log("hanlde view");
    }
    return(
        <>
            <Grid container className={classes.cardWrapper}>
                <Grid item xs={6} className={classes.userImgWrapper}>
                    <img src={large} alt="user-img" className={classes.userImg}/>
                    <Grid item xs={8} className={classes.userName}>
                    {fullName}
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.buttonContainer}>
                    <Button color="primary" variant="contained" size="small" onClick={handleViewDetail}>View</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default UserCard;