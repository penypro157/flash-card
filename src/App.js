import AdminLayoutRoute from './components/Shared/AdminLayout'
import AuthenticationLayoutRoute from './components/Shared/AuthenticationLayout'
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import routeList from './router';
import customTheme from './theme/index';
import { ToastContainer } from 'react-toastify';
import {GoogleOAuthProvider} from '@react-oauth/google'

function App() {
  var showRouteList = (routeList) => {
    var result = null;
    result = routeList.map((item, index) => {
      if (item.isAuthentication) {
        return (
          <AuthenticationLayoutRoute key={index} path={item.path} exact={item.exact} component={item.component} name={item.name}  />
        )
      } else
        return (
          <AdminLayoutRoute key={index} path={item.path} exact={item.exact} component={item.component} name={item.name} />
        )
    })
    return result;
  }
  return (
    <div>
    <GoogleOAuthProvider clientId="100418033395-mpinsjap19a1ejac8q0677g91cob88i3.apps.googleusercontent.com">
      <BrowserRouter>
        <ThemeProvider theme={customTheme} >
          {/* <GlobalLoading test={this.x} /> */}
          <ToastContainer />
          {/* <TaskBar /> */}
          <Switch>
            {showRouteList(routeList)}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
    </div>
  );
}

export default App;
