import {connect} from "react-redux";
import HomeScreen from "../screens/HomeScreen";
import actions from '../store/ui/actions';

const mapStateToProps = (state) => {
  const {ui} = state;
  console.log("state object?", state);
  console.log("the state object in home container is:", ui);
  return ui
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (username) => {
            console.log("going to return dispatch function");
            dispatch( actions.getUser(username) );
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
