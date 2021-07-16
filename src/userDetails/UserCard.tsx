import { Button, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import React, { Suspense, useEffect, useState } from "react";
import PersonalInfo from "../common/PersonalInfo";
interface UserCardProps {
    userDetails: object | any,
    isViewRequired: boolean;
};

export const isEmpty: any = (value: any) => {
    return (typeof value === "undefined" || value === null);
}

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardWrapper:{
     border: "1px solid #f2f2f2",
     display: "flex",
     justifyContent: "center",
    //  height: "100px",
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
    userDetailWrapperList: {
        display: "flex",
        alignSelf: "center",
        borderRadius: "50px",
    },
    userDetailWrapperDetails: {
        display: "flex",
        justifyContent: "center",
        borderRadius: "50px",
    },
    userImgSmall: {
        width: `calc(30% - 30px)`,
        borderRadius: "50%"
    },
    userImgLarge:{
        width: `calc(90% - 30px)`,
        borderRadius: "3%"
    },
    userName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: theme.spacing(2)
    },
    profileDetailsWrapper: {
        background: "rgba(63, 81, 181, 0.6)",
        color: "#FFF",
        borderRadius: "3px",
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    }
  }));
const UserCard = (props: UserCardProps) => {
    const classes = useStyles();
    const { userDetails, isViewRequired} = props;
    const OtherComponent = React.lazy(() => import('./UserDetails'));
    const { first, last } = userDetails && userDetails.name;
    const { large } = userDetails && userDetails.picture;
    const { dob , gender, location, email, phone } = userDetails;
    const [openDialog, setOpenDialog] = useState<Boolean>(false);
    const [dialogDetails, setDailogDetails] = useState<object>({});
    const fullName = !isEmpty(first) && !isEmpty(last) ? `${first} ${last}` : first || last;
    const personalDetails = {
        fullName,
        age: dob.age,
        gender,
        email,
        phone,
        country: location.country
    }
    const handleViewDetail = React.useCallback(() => {
        setOpenDialog(!openDialog);
        setDailogDetails({
            userDetails,
            head: `${fullName} - Personal Information`
        })
    }, [openDialog, userDetails, fullName]);

    useEffect(() => {
        setOpenDialog(false);
    }, [])
    return(
        <>
            <Grid container className={classes.cardWrapper}>
                <Grid container justifyContent="center">
                    <Grid item xs={6} className={isViewRequired ? classes.userDetailWrapperList : classes.userDetailWrapperDetails}>
                        <img src={large} alt="user-img" className={isViewRequired ? classes.userImgSmall : classes.userImgLarge}/>
                        {isViewRequired ?<Grid item xs={8} className={classes.userName}>
                            {fullName}
                        </Grid> : null}
                    </Grid>
                    {isViewRequired ? (<Grid item xs={6} className={classes.buttonContainer}>
                        <Button color="primary" variant="contained" size="small" onClick={handleViewDetail}>View</Button>
                    </Grid>) : null}
                </Grid>
                <Grid container justifyContent="center">
                {!isViewRequired ? 
                    (<Grid item xs={12}>
                        <PersonalInfo profileDetails={personalDetails}/>
                    </Grid>)
                : null }
                </Grid>
            </Grid>
            {openDialog ? <Suspense fallback={<CircularProgress />}>
                <OtherComponent dialogDetails={dialogDetails} setOpenDialog={setOpenDialog} openDialog={openDialog} />
            </Suspense>: null}
        </>
    )
}

export default UserCard;