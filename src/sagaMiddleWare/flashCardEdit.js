import axios from 'axios';
import { take, call, put,fork } from 'redux-saga/effects'
import { saveData } from '../actions/flashCardEditAction';
import ApiHandler from '../utils/ApiHandler';
import {API_URL} from '../constants/config'
import * as actions from '../constants/action';

export function* flashCardEdit() {
    yield fork(fetchData);
}
const fetchData = function* (){
    const getFlashCardBySetUrl = 'api/FlashCard/GetFlashCardBySet'
    while (true) {
        var action = yield take(actions.FETCH_FLASHCARD);
        debugger
        console.log('fetch flash card')
        try {
            var result = yield call(() =>   ApiHandler.post(`${API_URL}/${getFlashCardBySetUrl}`,action.data).catch(error => { }) , null);
            yield put(saveData(result ? result.data : []))
        } catch (err) {
            console.log(err);
        }
    }
}