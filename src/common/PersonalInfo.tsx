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
            <Grid>
                {Object.keys(profileDetails).length ? Object.keys(profileDetails).map((item: string) => (
                    <Grid key={item} className={classes.profileDetailsWrapper}>
                        {item.toUpperCase()} : {!isEmpty(profileDetails[item]) ? profileDetails[item] : ""}
                    </Grid>  
                )): "User data not available"}
            </Grid>
        </>
    );
}

export default PersonalInfo;