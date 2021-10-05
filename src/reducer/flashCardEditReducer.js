import * as actionTypes from './../constants/action'
const initialState = {
    flashCardList : []
}
export const FlashCardEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_FLASHCARD : {
            state.flashCardList = action.data;
            return { ...state };
        }
        default: return { ...state };
    }
}