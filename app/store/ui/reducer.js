import * as actions from './actions'

const defaultState = {
    displayInitialText: true,
    userName: '',
    followers: '',
    company: ''
};

const ui = ( state = defaultState, action) => {

    console.log("entered the reducer ui");
    console.log("all the actions in this directory are:", actions);
    console.log("action dispatched:", action, action.type);

    switch(action.type){
        case actions.GET_USER_CALL : {
            console.log("fired get user action");
            return {
                ...state
            };
        }
        case actions.GET_USER_SUCCESS : {
            console.log("the action response retrieved is:", action,action.data);
            return {
                ...state,
                displayInitialText: false,
                userName: action.data.name,
                followers: action.data.followers,
                company: action.data.company
            };
        }
        case  actions.GET_USER_ERROR : {
            return {
                ...state,
                displayInitialText: true,
                userName: '',
                followers: '',
                company: ''
            }
        }
    }
    return state;
};

export default ui;