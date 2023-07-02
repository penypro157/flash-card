import React from 'react';
import { Button } from '@mui/material';
import { GoogleLogin , useGoogleLogin} from '@react-oauth/google';
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/system';
import { withStyles } from '@mui/styles';
import { style } from './style';


const LoginGoogleComponent = (props) => {
    const {responseMessage, classes} = props
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: codeResponse => responseMessage(codeResponse),
        onError: (errorMessage) => console.error(errorMessage),
        flow: 'implicit',
      });
    return (
        <div>
            {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} onClick/> */}
                <Box className={classes.button}>
                    <Button color="info" variant="contained" startIcon={<GoogleIcon/>} type="submit" onClick={handleGoogleLogin}>
                        Log in with Google
                    </Button>
                </Box>
        </div>
    );
}
export default withStyles(style)(LoginGoogleComponent);
