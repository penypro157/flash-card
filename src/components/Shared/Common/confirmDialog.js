import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Component } from "react";

class ConfirmDialog extends Component {
  render() {
    var { content, ignoreButton, agreeButton, handleIgnore, handleAgree, open,title,data } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleIgnore}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleIgnore}>{ignoreButton}</Button>
          <Button onClick={() => handleAgree(data)} autoFocus>
            {agreeButton}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default ConfirmDialog