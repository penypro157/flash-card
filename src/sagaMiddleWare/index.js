import { homePage } from "./homePage";
import { flashCardEdit } from "./flashCardEdit";
import { fork, take } from "@redux-saga/core/effects";

export function* rootSaga() {
    yield fork(homePage);
    yield fork(flashCardEdit);
}