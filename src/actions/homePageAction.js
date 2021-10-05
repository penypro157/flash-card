import * as actions from './../constants/action'
export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
}
}
export const fetchDataRequest = (data) => {
    return {
        type: actions.FETCH_HOMEPAGE,
        data
    }
}
export const saveData = (data) => {
    return {
        type:   actions.SAVE_HOMEPAGE,
        data
    }
}