import * as actionTypes from './../constants/action'
const initialState = {
    courseList : [],
    initCourseForm : {
        courseName : '',
        courseId : ''
    }
}
export const HomePageReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case actionTypes.SAVE_HOMEPAGE : {
            state.courseList = action.data;
            return { ...state };
        }
        default: return { ...state };
    }
}