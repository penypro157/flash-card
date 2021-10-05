import * as actionTypes from './../constants/action'
const initialState = {
    initRegisterForm: {
        userName: '',
        passWord: '',
        role: 1
    }
}
export const AccountManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_REGISTER_FORM: {
            state.initRegisterForm = {
                userName: '',
                passWord: '',
                role: 1
            };
            return { ...state };
        }
        default: return { ...state };
    }
}