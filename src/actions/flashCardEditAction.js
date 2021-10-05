import * as actions from '../constants/action'
export const fetchData = (data) => {
    return (dispatch) => {
        dispatch(fetchDataRequest(data));
}
}
export const fetchDataRequest = (data) => {
    debugger
    return {
        type: actions.FETCH_FLASHCARD,
        data
    }
}
export const saveData = (data) => {
    return {
        type: actions.SAVE_FLASHCARD,
        data
    }
}