/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStyles, DialogContent, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle } from "../common/DailogTitle";
import PersonalInfo from "../common/PersonalInfo";

export const useStyles = makeStyles((theme) => createStyles({
      dailogContainer:{
        maxHeight: '87vh',
        overflow: 'auto',
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
  const { head, personalDetails } = dialogDetails;
  const classes = useStyles();
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
      <DialogContent id="dailogContent">
        <PersonalInfo profileDetails={personalDetails}/>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDailog;