import AdminLayoutRoute from './components/Shared/AdminLayout'
import AuthenticationLayoutRoute from './components/Shared/AuthenticationLayout'
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import routeList from './router';
import customTheme from './theme/index';
import { ToastContainer } from 'react-toastify';

function App() {
  var showRouteList = (routeList) => {
    var result = null;
    var test = 1
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
    </div>
  );
}

export default App;
