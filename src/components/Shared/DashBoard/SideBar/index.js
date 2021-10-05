
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Component } from 'react';
import { style } from './style';
import { bindActionCreators, compose } from 'redux';
import { SideBarPosition } from '../../../../constants/layout';
import routeList from './../../../../router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as dashBoardActions from './../../../../actions/dashBoardAction'
import { authenticationService } from '../../../../actionServices/AuthenticationService';
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchor: null
        }
    }
    toggleDrawer = (open) => (event) => {
        var { dashBoardActions } = this.props;
        dashBoardActions.toggleSideBar(open ? SideBarPosition.LEFT : '');
    };
    list = (anchor) => {
        var { classes } = this.props
        return (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
            >
                <List>
                    {
                        routeList.map((item, index) => {
                            if (item.isNavMenu) {
                                var { name, path, exact, symbol: SymbolIcon } = item;
                                return (
                                    <NavLink key={item.path} to={path} exact={exact} activeClassName={classes.menuLinkActive} className={classes.menuLink} >
                                        <ListItem button key={path}>
                                            <ListItemIcon>
                                                <SymbolIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={name} />
                                        </ListItem>
                                    </NavLink>
                                )
                            }
                            return null;
                        })
                    }
                </List>
            </Box>
        );
    }
    render() {
        var { sideBarPosition } = this.props.dashBoard;
        return (
            <Drawer
                anchor={sideBarPosition}
                open={Boolean(sideBarPosition)}
                onClose={this.toggleDrawer(false)}
                SlideProps={{ direction: SideBarPosition.RIGHT }}
            >
                {this.list(sideBarPosition)}
            </Drawer>

        )

    }
}
const mapStateToProps = (state) => {
    return {
        dashBoard: state.dashBoard
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dashBoardActions: bindActionCreators(dashBoardActions, dispatch)
    }

}
export default compose(withStyles(style), connect(mapStateToProps, mapDispatchToProps))(SideBar);
