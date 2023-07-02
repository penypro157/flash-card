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
import LoginGoogleComponent from '../../components/LoginForm/loginGoogle'

LoginPage.propTypes = {

};

function LoginPage(props) {
    console.log(authenticationService.currentUser);
    var { classes } = props;
    if (authenticationService.currentUser) {
        props.history.push('/');
    }



    const submitLogin = (data) => {
        var { userName, passWord } = data;
        return authenticationService.login(userName, passWord)
            .then(data => {
                debugger
                const { from } = props.location.state || { from: { pathname: "/" } };
                window.location.reload(true);
                props.history.push(from);
            }).catch(err => {
                if (err.response) {
                    if ([401, 400].indexOf(err.response.status) !== -1) {
                        throw new SubmissionError({
                            _error: message.LOGIN_INVALID_ACCOUNT
                        })
                    }
                } else {
                    throw new SubmissionError({
                        _error: message.SERVER_FAIL
                    })
                }
            });
    }

    const responseMessage = async (response) => {
        return authenticationService.handleGooleAuthorize(response)
        .then(data => {
            debugger
            const { from } = props.location.state || { from: { pathname: "/" } };
            window.location.reload(true);
            props.history.push(from);
        }).catch(err => {
            if (err.response) {
                if ([401, 400].indexOf(err.response.status) !== -1) {
                    throw new SubmissionError({
                        _error: message.LOGIN_INVALID_ACCOUNT
                    })
                }
            } else {
                throw new SubmissionError({
                    _error: message.SERVER_FAIL
                })
            }
        });
    }

    return (
        <div className={classes.container}>
            <Container fixed maxWidth="md" className={classes.form} >
                <Card sx={{ minWidth: 275, maxWidth: 700 }}>
                    <CardContent>
                        <Box className={classes.title}>
                            <Typography variant="h5">Sign-In</Typography>
                        </Box>
                        <LoginForm onSubmitLogin={submitLogin} />
                        <LoginGoogleComponent responseMessage={responseMessage}/>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </Container>
        </div>
    );
}
export default withStyles(style)(LoginPage);