import {getUser} from "../../services/getUserService";
import {takeEvery} from "redux-saga"
import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';

function* getGithubUser(action){
    console.log("entered the get user saga. the action is", action);
    try {
        let res = yield call(getUser, action.user);
        if(res.error){
            throw new Error(res.error);
        }
        yield put({type: actions.GET_USER_SUCCESS, data: res});
    } catch(err){
        yield put({type: actions.GET_USER_ERROR, error: err.toString()});
    }
}

function* watcher(){
    console.log("logging the watcher!");
    console.log("inside the watcher function", actions);
    yield takeEvery(actions.GET_USER_CALL, getGithubUser);
}

export default [watcher];

