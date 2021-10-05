import React from 'react';
import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material';
import { required } from './../HookFormComponents/validation'
import { Box } from '@mui/system';
import { withStyles } from '@mui/styles';
import { style } from './style';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { blue } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';


const Set = (props) => {
    var { classes, total, setCard, onEdit,onDelete } = props;
    console.log(props);
    return (
        <Paper elevation={3} sx={{ marginBottom: 2, background: blue[100], paddingTop: 4 }}>
            <div class={`row ${classes.courseContainer}`} >

                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">

                    <Button color="info" variant="text" size="small" startIcon={<PlayCircleOutlineIcon />} sx={{ minWidth: 40 }} />
                </div>

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                    <Typography variant="p"><NavLink to={`/edit-set/${setCard.setId}`} >{setCard.setName}</NavLink></Typography>

                </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    <Box className={classes.actionButton}>
                        <Button color="info" title="Edit Set" variant="text" size="small" type="submit" onClick={() => onEdit(setCard)} startIcon={<ModeEditIcon />} sx={{ minWidth: 40 }} />
                        <Button color="info" title="Delete Set" variant="text" size="small" startIcon={<DeleteIcon />} onClick={() => onDelete(setCard)} sx={{ minWidth: 40 }} />
                    </Box>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    <Typography variant="p" className={classes.total}>{`Total: ${total}`}</Typography>
                </div>
            </div>
        </Paper>
    );
}
export default withStyles(style)(Set);
