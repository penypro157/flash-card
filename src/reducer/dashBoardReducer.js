import * as actionTypes from './../constants/action'
const initialState = {
    sideBarPosition: ''
}
export const DashBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_SIDE_BAR: {
            state.sideBarPosition = action.position;
            return { ...state };
        }
        default: return { ...state };
    }
}