import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, Paper, Typography } from "@mui/material";
import { Save } from "@mui/icons-material";
import { Role } from "../../constants/authenAuthor";
import { Field, FieldArray, formValueSelector, reduxForm, reset } from "redux-form";
import { Box } from "@mui/system";
import { flashCardService } from "./../../actionServices/FlashCardService";
import { style } from './style'
import { withStyles } from "@mui/styles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import FlashCardEdit from "./FlashCardEdit";
import { connect } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import ReplayIcon from '@mui/icons-material/Replay';
import { orange } from "@mui/material/colors";
const SetCardFormComponet = (props) => {
    console.log(props);
    var { change, classes, onSubmit, handleSubmit,setID } = props;
    const textSourceChange = (textSource) => {
        console.log(textSource);
    }
    const renderFlashCardEdit = useCallback((props) => {
        var { fields, meta: { error } } = props;
        return (
            <div className={classes.flashCardEditPanel}>
                {
                    fields.length > 0 ?
                        fields.map((flashCard, index) => {
                            return (
                                <FlashCardEdit arrayFieldName={flashCard} onDelete={() => fields.remove(index)} changeValue={change} />
                            )
                        }) : <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, background: orange[100] }}><Typography variant="p" >No Flash Card</Typography>
                        </Paper>
                }
                {error && <li className="error">{error}</li>}
                <Box ><Button color="info"
                    variant="contained"
                    size="small"
                    title="Add Flash Card"
                    startIcon={<AddIcon />}
                    sx={{ minWidth: 40 }}
                    onClick={() => {
                        fields.push({
                            textSource: '',
                            textTarget: '',
                            setID 
                        });
                    }} >Add Flash Card</Button>
                </Box>
                <div>
                    <Box className={classes.bottomButton}>
                        <Button variant="contained" type="submit" autoFocus startIcon={<Save />} color="info" >
                            Save
                        </Button> &nbsp;
                        <Button variant="contained" startIcon={<ReplayIcon />} onClick={() => window.location.reload(true) } >Unchange</Button>
                    </Box>
                </div>
            </div>
        )
    }, []);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FieldArray name="flashCardList" component={renderFlashCardEdit} />
        </form>
    );
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
const SetCardForm = (withStyles(style)(SetCardFormComponet));
export default connect(mapStateToProps, null)(reduxForm({
    form: 'setCardForm',
    enableReinitialize: true
})(SetCardForm))