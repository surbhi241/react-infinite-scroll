import { CircularProgress, makeStyles, Paper } from "@material-ui/core";
import React, { useState, useRef, useCallback } from "react";
import useInfiniteScroll from "../useInfiniteScroll";
import UserCard from "./UserCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '60px',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(86),
          height: "auto",
        },
      },  
}));
const UserList = () => {
    const [pageNumber , setPageNumber] = useState(1);
    const { user, loading, error } = useInfiniteScroll(pageNumber);
    const classes = useStyles();
    const observer: any = useRef();
    const cleanObserver = () => {
        if (observer.current) {
            observer.current.disconnect()
        }
    }
    const observeNode = useCallback(node => {
        if(loading) return;
        cleanObserver();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setPageNumber(prevState => prevState + 1);
            }
        });
        if(node) observer.current.observe(node)
        return () => {
            cleanObserver();
        }
    }, [loading, observer])
    
    return(
        <div className={classes.root}>  
            {!error ? <Paper>
                {user instanceof Array ? user.map(item => <UserCard userDetails={item}  key={item.login.uuid} isViewRequired={true}/>) : <p>No Data</p>}
                <div ref={observeNode}>
                    <CircularProgress />
                </div>
            </Paper> : "Error Fetchig Data, Please refresh the page"}
        </div>
    )
}

export default UserList;