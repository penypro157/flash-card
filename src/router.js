import React from 'react'
import AccountManagementPage from './containers/AccountManagementPage/index';
import HomePage from './containers/HomePage/index';
import SetCardEditPage from './containers/SetCardEditPage/index';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LoginPage from './containers/LoginPage/index';
import InfoIcon from '@mui/icons-material/Info';
import AboutPage from './containers/AboutPage';
const routeList = [
    {
        path: '/',
        exact: true,
        name : 'Home Page',
        symbol : HomeIcon,
        isNavMenu : true,
        component: () => <HomePage/>
    },
    {
        path: '/edit-set/:setId',
        exact: false,
        name : 'Edit Set',
        symbol : ManageAccountsIcon,
        component: () => <SetCardEditPage />

    },
    {
        path: '/login',
        exact: false,
        name : 'Login Page',
        symbol : LoginIcon,
        isAuthentication : true,
        component: ({history,location}) => <LoginPage history={history} location={location} />
    },
    {
        path: '/about',
        exact: false,
        name : 'About',
        isNavMenu : true,
        symbol : InfoIcon,
        component: ({history,location}) => <AboutPage history={history} location={location} />
    }
]
export default routeList;