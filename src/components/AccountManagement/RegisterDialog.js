import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid } from "@mui/material";
import { Save } from "@mui/icons-material";
import {Role} from "./../../constants/authenAuthor";
import { Field, reduxForm, reset } from "redux-form";
import { Box } from "@mui/system";
import { renderSelectField, RenderTextField } from "../HookFormComponents";
import { required } from "../HookFormComponents/validation";
import { style } from './style'
import { withStyles } from "@mui/styles";
import { useCallback, useEffect } from "react";

const RegisterDialogComponent = (props) => {
  console.log(props)
  var { handleClose, handleSubmit, open, error, classes,onSubmitRegister,submitting } = props;
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
      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <DialogTitle id="alert-dialog-title">
          ADD ACCOUNT
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            To create new Account, please input all field.
          </DialogContentText>
          <Box className={classes.formItem}>
            <Field name="userName" label="Username" fullWidth={true} component={RenderTextField} validate={[required]} />
          </Box>
          <Box className={classes.formItem}>
            <Field name="passWord" label="Password" fullWidth={true} component={RenderTextField} validate={[required]} />
          </Box>
          <Box className={classes.formItem}>
            <FormControl >
              <Field name="role" label="Role" fullWidth={true} component={renderSelectField} validate={[]} >
                <option value={Role.ADMIN}>Admin</option>
                <option value={Role.USER}>User</option>
              </Field>
            </FormControl>
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
const RegisterDialog = withStyles(style)(RegisterDialogComponent);
export default reduxForm({
  form: 'register',
  enableReinitialize: true
})(RegisterDialog)