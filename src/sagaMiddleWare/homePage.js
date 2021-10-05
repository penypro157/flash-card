import axios from 'axios';
import { take, call, put } from 'redux-saga/effects'
import { saveData } from '../actions/homePageAction';
import * as actions from '../constants/action';
import ApiHandler from '../utils/ApiHandler';
import {API_URL} from './../constants/config'
export function* homePage() {
    while (true) {
        yield take(actions.FETCH_HOMEPAGE);
        try {
            var result = yield call(() => { return ApiHandler.get(`${API_URL}/api/Home/GetHomeData`).catch(error => { }) }, null);
            debugger
            yield put(saveData(result ? result.data : []))
        } catch (err) {
            console.log(err);
        }
    }
}