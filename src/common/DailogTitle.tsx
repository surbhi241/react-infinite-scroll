import React from "react";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Grid, IconButton, Tooltip, Typography, withStyles } from "@material-ui/core";
import { CloseIcon } from "./Icons";
import { useStyles } from "../userDetails/DetailsDailog";

const styles = (theme: {
    spacing: {
      (arg0: number): void;
      (arg0: number): void;
      (arg0: number): void;
    };
    palette: { grey: any[] };
  }) => ({
    root: {
      margin: 0,
      paddingLeft: "20px",
      width: "500px",
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

export const DialogTitle = withStyles(styles as any)(
    (props: { [x: string]: any; children: any; classes: any; onClose: any }) => {
      const classNew = useStyles();
      const { children, classes, onClose, ...other } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Grid item xs={8}>
            <Typography variant="h6" className={classNew.dialogHead} id="dialogHead">
            {children}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {onClose ? (
              <Tooltip title={"Close"}>
                <IconButton
                  aria-label="close"
                  className={classes.closeButton}
                  onClick={onClose}
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            ) : null}
          </Grid>
        </MuiDialogTitle>
      );
    }
  );