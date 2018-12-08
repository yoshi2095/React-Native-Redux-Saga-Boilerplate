import {createStackNavigator} from "react-navigation";
import HomeContainer from "../containers/HomeContainer";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeContainer
    }
});

export default AppNavigator;