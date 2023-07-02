
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Component, useState } from 'react';
import { style } from './style';
import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { authenticationService } from '../../../../actionServices/AuthenticationService';
const Header = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    var handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = (event) => {
        setAnchorEl(null);
    };
    var { onMenuClick, title, user } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => onMenuClick(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        
                        onClick={handleMenu}
                        color="inherit"
                    >
                    {user ? <Avatar alt={user.name} src={user.picture} /> :  <AccountCircle />}
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {authenticationService.currentUser ?
                            <div>
                                <MenuItem onClick={authenticationService.logout}>Logout</MenuItem>
                            </div>
                            : <MenuItem onClick={handleClose}>Login</MenuItem>
                        }
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default withStyles(style)(Header);
