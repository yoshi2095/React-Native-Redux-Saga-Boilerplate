import {getUser} from "../../services/getUserService";
import * as actions from './actions';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';

function * getGithubUser(action){
    console.log(action);
    try {
        let res = yield call(getUser, action.user);
        if(res.error){
            throw new Error(res.error);
        }
        yield put({type: actions.GET_USER_SUCCESS, data: res.result});
    } catch(err){
        yield put({type: actions.GET_USER_ERROR, error: err.toString()});
    }
}

function * watcher(){
    takeLatest(actions.GET_USER, getGithubUser);
}

