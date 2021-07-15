import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { DetailsDailog } from "./UserDetails";

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
    const history = useHistory();
    const classes = useStyles();
    const { userDetails } = props;
    const { first, last } = userDetails.name;
    const { large } = userDetails.picture;
    const [openDialog, setOpenDialog] = useState<Boolean>(false);
    const [dialogDetails, setDailogDetails] = useState<object>({});
    const fullName = !isEmpty(first) && !isEmpty(last) ? `${first} ${last}` : first || last;
    const handleViewDetail = React.useCallback(() => {
        // history.push("user/view");
        setOpenDialog(!openDialog);
        setDailogDetails({
            userDetails,
            head: "User Information"
        })
    }, [openDialog, userDetails]);
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
            <DetailsDailog dialogDetails={dialogDetails} setOpenDialog={setOpenDialog} openDialog={openDialog} />
        </>
    )
}

export default UserCard;