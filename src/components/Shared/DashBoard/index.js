import { style } from './style';
import Header from './Header/index';
import SideBar from './SideBar/index';
import { withStyles } from '@mui/styles'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux';
import { SideBarPosition } from '../../../constants/layout';
import * as dashBoardActions from './../../../actions/dashBoardAction'
const Dashboard = (props) => {
    var toggleSideBar = (open) => {
        var { dashBoardActions } = props;
        dashBoardActions.toggleSideBar(open ? SideBarPosition.LEFT : '');
    }
    const { children, title } = props;
    return (
        <div>
            <Header title={title} onMenuClick={toggleSideBar} />
            <SideBar />
            {children}
        </div>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        dashBoardActions: bindActionCreators(dashBoardActions, dispatch)
    }

}
export default compose(withStyles(style), connect(null, mapDispatchToProps))(Dashboard);
