import { withStyles } from "@mui/styles";
import { showAlertMessage } from './../../utils/ToastHelper'
import { connect } from "react-redux";
import { fetchData } from "../../actions/flashCardEditAction";
import { style } from "./style";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SetCardForm from "../../components/Home/SetCardForm";
import { flashCardService } from "../../actionServices/FlashCardService";
import { MessageType } from "../../constants/config";
import * as message from './../../constants/message'
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const SetCardEditPage = (props) => {
    var { classes, flashCardList, fetchData } = props;
    var { setId } = useParams();
    useEffect(() => {
        fetchData(setId);
    }, []);
    const submitFlashCard = (data) => {
        return flashCardService.saveFlashCard(data).then(res => {
            showAlertMessage(res.message, MessageType.SUCCESS);
            fetchData(setId);
        }).catch(err => {
            if ([500].indexOf(err.response?.status) !== -1) {
                showAlertMessage(err.response.data.message, MessageType.ERROR);
            } else
                showAlertMessage(message.SERVER_FAIL, MessageType.ERROR);
        });
    }
    return (
        <div class={`container-fluid ${classes.container}`}>

            <div class="row" >

                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <div class="row">
                        <Box className={classes.setTitle}>
                            <Typography variant="h5" className={classes.setTitle}>Set Card</Typography>
                        </Box>
                        <Box className={classes.addCourseBtn}>
                            <Typography variant="p">Total: {flashCardList.length}</Typography>
                        </Box>
                    </div>
                    <SetCardForm initialValues={{ flashCardList }} setID={setId} onSubmit={submitFlashCard} />
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                </div>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        flashCardList: state.flashCardEdit.flashCardList,
        setCardFormState: state.form.setCardForm
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (data) => {
            dispatch(fetchData(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(SetCardEditPage));