import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import UserCard from "./UserCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(86),
          height: "auto",
        },
      },  
  }));
const UserList = () => {
    const [user, setUser] = useState<object>([]);
    const classes = useStyles();
    useEffect(() => {
        axios
            .get(`api/?results=${20}`, {})
            .then(res => {
                const data = res.data.results;
                setUser(data);
                console.log("data", data, user)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return(
        <div className={classes.root}>  
            <Paper>
                {user instanceof Array ? user.map((item: any) => (
                    <div key={item.login.uuid}>
                        <UserCard userDetails={item} />
                    </div>
                )): "no data present"}
           </Paper>
        </div>
    )
}

export default UserList;