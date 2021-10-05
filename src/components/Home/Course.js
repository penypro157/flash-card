import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material';
import { required } from './../HookFormComponents/validation'
import { Box } from '@mui/system';
import { withStyles } from '@mui/styles';
import { style } from './style';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { blue,orange } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';


const Course = (props) => {
    var { classes, total,course, children,onDelete,onEdit , onAddSetCard } = props;

    return (
        <div>
            <Paper elevation={3} sx={{padding : 2,marginBottom:2, background : orange[100]}}>
                <div className={`row ${classes.courseContainer}`} >

                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">

                        <Button color="info" variant="text" size="small" startIcon={<PlayCircleOutlineIcon />} sx={{ minWidth: 40 }} />
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Typography variant="h5" className={classes.courseTitle}>{course.courseName}</Typography>

                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                        <Box className={classes.actionButton}>
                        <Button color="info"
                                    variant="text" 
                                    size="small" 
                                    type="submit" 
                                    title="Add Set"
                                    startIcon={<AddIcon />} 
                                    sx={{ minWidth: 40 }} 
                                    onClick={() => onAddSetCard(course.courseId)} />
                            <Button color="info"
                                    variant="text" 
                                    size="small" 
                                    title="Edit Course"
                                    type="submit" 
                                    startIcon={<ModeEditIcon />} 
                                    sx={{ minWidth: 40 }} 
                                    onClick={() => onEdit(course)} />
                            <Button color="info" 
                                    variant="text" 
                                    size="small" 
                                    title="Delete Course"
                                    startIcon={<DeleteIcon />} 
                                    sx={{ minWidth: 40 }} o
                                    onClick={() => onDelete(course)} />
                        </Box>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                        <Typography variant="p" className={classes.total}>{`Total: ${total}`}</Typography>
                    </div>




                </div>
            </Paper>

            {children}
        </div>
    );
}
export default withStyles(style)(Course);
