import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid } from "@mui/material";
import { Save } from "@mui/icons-material";
import {Role} from "../../constants/authenAuthor";
import { Field, reduxForm, reset } from "redux-form";
import { Box } from "@mui/system";
import { renderSelectField, RenderTextField } from "../HookFormComponents";
import { required } from "../HookFormComponents/validation";
import { style } from './style'
import { withStyles } from "@mui/styles";
import { useCallback, useEffect } from "react";

const CourseDialogComponent = (props) => {
  console.log(props)
  var { handleClose, handleSubmit, open, error, classes,onSubmitCourse,submitting,title } = props;
  useEffect(() => {

  }, []);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth={true}
    >
      <form onSubmit={handleSubmit(onSubmitCourse)}>
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{marginBottom : 1}}>
            Course Name must unique.
          </DialogContentText>
          <Box className={classes.formItem}>
            <Field name="courseName" label="Course Name" fullWidth={true} component={RenderTextField} validate={[required]} />
          </Box>
          <Box className={classes.error}>
            {error && <strong>{error}</strong>}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" >Cancel</Button>
          <Button  variant="contained" type="submit" autoFocus startIcon={<Save />} color="info" disabled={submitting}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
const CourseDialog = withStyles(style)(CourseDialogComponent);
export default reduxForm({
  form: 'courseDialog',
  enableReinitialize: false
})(CourseDialog)