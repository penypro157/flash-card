import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import LoginForm from './../../components/LoginForm/index'
import { Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { style } from './style'
import { withStyles } from '@mui/styles';
import { authenticationService } from '../../actionServices/AuthenticationService';
import * as message from './../../constants/message'

AboutPage.propTypes = {

};

function AboutPage(props) {
    var { classes } = props;
    return (
        <div className={`row-fluid `}>

            <div className={`row ${classes.aboutContainer}`}>

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div>
                        <Typography  component="p" fontFamily="cursive">
                            Product of HuyLee
                        </Typography>
                    </div>
                    <div>
                        <Typography component="p" fontFamily="cursive">
                           All rights reserved
                        </Typography>
                    </div>
                    <div>
                        <Typography component="p" fontFamily="cursive">
                            Contact : 0901.123.830 for more infomation
                        </Typography>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default withStyles(style)(AboutPage);