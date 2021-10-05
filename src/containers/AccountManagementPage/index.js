
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountManagementActions from "./../../actions/accountManagementAction";
import RegisterDialog from '../../components/AccountManagement/RegisterDialog';
import { style } from './style'
import { reset, SubmissionError } from 'redux-form';
import * as message from './../../constants/message'
import { sleep } from '../../utils/JsExtentions';
import { AccountManagementService } from '../../actionServices/AccountManagementService';
const AccountManagementPage = (props) => {
    var { classes, initialValues, resetRegister } = props;
    const [registerDiaglog, setRegisterDiaglog] = useState({ open: false })
    var { open } = registerDiaglog;
    const addAcount = () => {
        setRegisterDiaglog({ open: true });
    }
    const toggleRegisterDialog = (open) => {
        setRegisterDiaglog({ open });
        resetRegister();
    }
    const submitRegister = (data) => {
        var { userName, passWord } = data;
        return AccountManagementService.register(userName, passWord).then(res => {
        }).catch(err => {
            debugger
            if ([500].indexOf(err.response.status) !== -1) {
                throw new SubmissionError({
                    _error: err.response.data.message
                })
            } else
                throw new SubmissionError({
                    _error: message.SERVER_FAIL
                })
        });
    }
    return (
        <div className={`container-fluid ${classes.container}`}>

            <div className="row" >

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">

                    <div className={`row ${classes.searchPanel}`}>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Search account" variant="standard" />
                        </Box>
                        <Box className={classes.addAccountBtn}>
                            <Button color="info" onClick={addAcount} variant="contained" type="submit" startIcon={<AddIcon />} >
                                Add Account
                            </Button>
                        </Box>
                    </div>
                    <div className={`row ${classes.accountGridPanel}`}>
                        <div>Admin Page</div>
                    </div>
                </div>

            </div>
            <RegisterDialog open={open} title="Add Account" onSubmitRegister={submitRegister} initialValues={initialValues} handleClose={() => toggleRegisterDialog(false)} />
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        initialValues: state.accountManagement.initRegisterForm
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        mainActions: bindActionCreators(accountManagementActions, dispatch),
        resetRegister: () => {
            dispatch(reset('register'))
        },
    }
}
export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(AccountManagementPage));