/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStyles, DialogContent, Grid, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle } from "../common/DailogTitle";
import UserCard from "./UserCard";

export const useStyles = makeStyles((theme) => createStyles({
      dailogTitle: {
        paddingTop: "20px"
      },
      dialogHead: {
        height: "18px",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: 1.29,
        letterSpacing: "normal",
        color: "#32325d"
      },
      wh_16: {
        width: "16px !important",
        height: "16px !important"
      }
}));

export interface DetailsDailogProps {
  dialogDetails: any;
  setOpenDialog: any;
  openDialog: any;
}
export const DetailsDailog = ({
  dialogDetails,
  setOpenDialog,
  openDialog,
}: DetailsDailogProps) => {
  const { head, userDetails } = dialogDetails;
  const classes = useStyles();
  return (
    <Dialog
      onClose={() => setOpenDialog(false)}
      aria-labelledby="dialog-container"
      open={openDialog}
      test-dataid="dialog"
    >
      <DialogTitle
        id="dialog-title"
        onClose={() => setOpenDialog(false)}
        className={classes.dailogTitle}
      >
        {head}
      </DialogTitle>
      <DialogContent>
        <Grid container item xs={12}>
          <UserCard userDetails={userDetails}/>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
