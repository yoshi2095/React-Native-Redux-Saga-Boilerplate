import * as actions from './actions';

const defaultState = {
    displayInitialText: true,
    userName: null
};

const ui = ( state = defaultState, action) => {

    switch(action.type){

        case actions.GET_USER :
            return {
                ...state
            };
        case actions.GET_USER_SUCCESS :
            return {
                ...state,
                displayInitialText: false,
                userName: action.data.name
            };
        case  actions.GET_USER_ERROR :
            return {
                ...state,
                displayInitialText: true
                userName: null
            }
    }

    return state;
};

export default ui;