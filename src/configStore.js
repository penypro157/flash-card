import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducer/index";
import { rootSaga } from "./sagaMiddleWare";
import thunk from 'redux-thunk';
const sagaMiddleWare = createSagaMiddleware();
const configStore = () => {
    const middleWare = [thunk,sagaMiddleWare];
    const enhancers = [applyMiddleware(...middleWare)]
    var store = createStore(reducer, compose(...enhancers));
    sagaMiddleWare.run(rootSaga)
    return store;
}
export default configStore;