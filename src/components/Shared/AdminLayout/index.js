
import { withStyles } from '@mui/styles'
import { Redirect, Route } from 'react-router';
import { authenticationService } from '../../../actionServices/AuthenticationService';
import DashBoard from '../DashBoard';
import { style } from './style'
const AdminLayoutRoute = (props) => {
    var { name, ...remainProps } = props;
    var { exact, path, component: YourComponent } = remainProps;
    return (
        <Route exact={exact} path={path} render={routeProps => {
            const currentUser = authenticationService.currentUser;
            if (!currentUser) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }    
            return (
                <DashBoard title={name}>
                    <YourComponent />
                </DashBoard>)
        }} />
    )
}

export default withStyles(style)(AdminLayoutRoute);
