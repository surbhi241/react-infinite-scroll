/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStyles, DialogContent, Grid, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle } from "../common/DailogTitle";
import UserCard from "./UserCard";

export const useStyles = makeStyles((theme) => createStyles({
      dailogContainer:{
        minWidth: theme.spacing(88),
        color: "rgb(63, 81, 181)",
      },
      dailogTitle: {
        paddingTop: "20px",
      },
      dialogHead: {
        height: "18px",
        fontWeight: 600,
        lineHeight: 1.29,
        letterSpacing: "normal",
        color: "#32325d",
        fontSize: "18px",
      },
      dailogContent: {
        minWidth: theme.spacing(88),
      }
}));

export interface DetailsDailogProps {
  dialogDetails: any;
  setOpenDialog: any;
  openDialog: any;
}
const DetailsDailog = ({
  dialogDetails,
  setOpenDialog,
  openDialog,
}: DetailsDailogProps) => {
  const { head, userDetails } = dialogDetails;
  const classes = useStyles();
  console.log("userDetails", userDetails);
  return (
    <Dialog
      onClose={() => setOpenDialog(false)}
      aria-labelledby="dialog-container"
      open={openDialog}
      test-dataid="dialog"
      className={classes.dailogContainer}
    >
      <DialogTitle
        id="dialog-title"
        onClose={() => setOpenDialog(false)}
        className={classes.dailogTitle}
      >
        {head}
      </DialogTitle>
      <DialogContent className={classes.dailogContent}>
        <Grid container item xs={12}>
          <UserCard userDetails={userDetails} isViewRequired={false}/>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDailog;