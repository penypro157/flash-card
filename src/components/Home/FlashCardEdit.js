import React, { useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { RenderTextField } from './../../components/HookFormComponents/index'
import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material';
import { required } from './../HookFormComponents/validation'
import { Box } from '@mui/system';
import { withStyles } from '@mui/styles';
import { style } from './style';
import HearingIcon from '@mui/icons-material/Hearing';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { blue, orange } from '@mui/material/colors';
import { connect } from 'react-redux';
import { Voice_Type } from '../../constants/config';
import DeleteIcon from '@mui/icons-material/Delete';
import { flashCardService } from "./../../actionServices/FlashCardService";

const FlashCardEdit = (props) => {
    console.log('renderFlashCard');
    var { classes, arrayFieldName, state, onDelete, changeValue } = props;
    const getFieldValue = (fieldName) => {
        const selector = formValueSelector('setCardForm')
        return selector(state, fieldName);
    }
    const pronunciateText = () => {
        var textSource = getFieldValue(`${arrayFieldName}.textSource`);
        window.responsiveVoice.speak(textSource, Voice_Type.US_FEMALE);
    }
    const translateAPI = useRef(null);
    const translateTextSource = useCallback((textSource) => {
        debugger
        if (translateAPI.current) {
            clearTimeout(translateAPI.current)
        }
        translateAPI.current = setTimeout(() => {
            return flashCardService.translate(textSource).then(res => {
                changeValue(`${arrayFieldName}.textTarget`, res.data);
            }).catch(err => {
                changeValue(`${arrayFieldName}.textTarget`, '');
            })
        }, 2000)
    }, [])
    return (
        <div>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, background: orange[100] }}>
                <div class={`row ${classes.courseContainer}`} >
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Box className={classes.flashCardItem}>
                            <Field
                                name={`${arrayFieldName}.textSource`}
                                type="text"
                                multiline={false}
                                component={RenderTextField}
                                validate={[required]}
                                label="English"
                                onChange={(e) => translateTextSource(e.target.value)}
                            />
                            <Button color="info"
                                variant="text"
                                size="small"
                                title="Pronunciate"
                                onClick={pronunciateText}
                                startIcon={<HearingIcon />}
                                sx={{ minWidth: 40 }} />
                        </Box>
                    </div>
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                        <Box className={classes.flashCardItem}>
                            <DoubleArrowIcon />
                        </Box>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                        <Box className={classes.flashCardItem}>
                            <Field
                                name={`${arrayFieldName}.textTarget`}
                                type="text"
                                component={RenderTextField}
                                label="Vietnamese"
                            />
                        </Box>
                    </div>
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <Box className={classes.flashCardItem}>
                            <Button startIcon={<DeleteIcon />} onClick={onDelete} />
                        </Box>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps, null)(withStyles(style)(FlashCardEdit));
