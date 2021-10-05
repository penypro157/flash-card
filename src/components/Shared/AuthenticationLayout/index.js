
import {withStyles} from '@mui/styles'
import { Route } from 'react-router';
import {style} from './style'
const AuthenticationLayoutRoute = (props) => {
    var { name, ...remainProps } = props;
    var { exact, path, component: YourComponent } = remainProps;
    return (
        <Route exact={exact} path={path} component={YourComponent} />
    )
}

export default withStyles(style)(AuthenticationLayoutRoute);
