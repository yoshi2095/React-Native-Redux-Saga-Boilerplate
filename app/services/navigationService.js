import {NavigationActions, StackActions} from 'react-navigation';
import store from "@store";
import actions from "@store/ui/actions";

let _navigator;

function setTopLevelNavigator(navigatorRef){
    _navigator = navigatorRef;
}

function navigate(routeName, params){
    if(!_navigator) return;
    _navigator.dispatch(  //why dispatch is called on the top level navigator?
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function goBack(){
    //if(!_navigator) return;
    _navigator.dispatch(
        NavigationActions.back()
    );
}

function navigateToTop(routeName, params){
    if(!_navigator) return;
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName, params})]
        })
    );
}

export default {
    setTopLevelNavigator,
    navigate,
    goBack,
    navigateToTop
}