import { combineReducers } from "redux";
import { DashBoardReducer } from './dashBoardReducer'
import { HomePageReducer } from './homePageReducer'
import { AccountManagementReducer } from './accountManagementReducer'
import { FlashCardEditReducer } from './flashCardEditReducer'
import { reducer as formReducer } from 'redux-form'
export const reducer = combineReducers({
   dashBoard: DashBoardReducer,
   form: formReducer,
   homePage : HomePageReducer,
   accountManagement : AccountManagementReducer,
   flashCardEdit : FlashCardEditReducer
});