import { Grid } from "@material-ui/core";
import React from "react";
import { isEmpty, useStyles } from "../userDetails/UserCard";

interface PersonalInfoProps {
    profileDetails: object | any
};
const PersonalInfo = (props: PersonalInfoProps) => {
    const { profileDetails } = props;
    const classes = useStyles();
    return(
        <>
            <Grid item sm={12}>
                <Grid item sm={12} container justify="center">
                    <img src={profileDetails.imgLarge} alt="user-img" id="userImgLarge" className={classes.userImgLarge}/>
                </Grid>
                {Object.keys(profileDetails).length ? Object.keys(profileDetails).map((item: string) => (
                    <Grid key={item} xs={12} sm={12} md={12} className={classes.profileDetailsWrapper}>
                        {item.toUpperCase()} : {!isEmpty(profileDetails[item]) ? profileDetails[item] : ""}
                    </Grid>  
                )): "User data not available"}
            </Grid>
        </>
    );
}

export default PersonalInfo;