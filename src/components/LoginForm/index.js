import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { RenderTextField } from './../../components/HookFormComponents/index'
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { required } from './../HookFormComponents/validation'
import { Box } from '@mui/system';
import { withStyles } from '@mui/styles';
import { style } from './style';


const LoginFormComponent = (props) => {
    var { classes, handleSubmit, onSubmitLogin, error,submitting } = props;
    console.log(props);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <Box className={classes.formItem}>
                    <Field name="userName" label="Username" fullWidth={true} component={RenderTextField} validate={[required]} />
                </Box>
                <Box className={classes.formItem}>
                    <Field name="passWord" label="Password" fullWidth={true} component={RenderTextField} validate={[required]} />
                </Box>
                <Box className={classes.error}>
                    {error && <strong>{error}</strong>}
                </Box>
                <Box className={classes.button}>
                    <Button color="info" variant="contained" type="submit" disabled={submitting}>
                        Log in
                    </Button>
                </Box>
            </form>

        </div>
    );
}
let validate = (values) => {
    var error = {};
    return error;
}
const LoginForm = reduxForm({
    form: 'login',
    enableReinitialize: true,
    validate
})(LoginFormComponent);
export default withStyles(style)(LoginForm);
