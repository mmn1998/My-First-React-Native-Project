import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/homeScreen";
import MyTripsScreen from "../screens/myTripsScreen";
import MyFavoritesScreen from "../screens/myFavoritesScreen";
import ProfileScreen from "../screens/profileScreen";


const RootDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:HomeScreen
    },
    Profile:{
        screen:ProfileScreen
    },
    Trips:{
        screen:MyTripsScreen
    },
    Favorites:{
        screen:MyFavoritesScreen
    }
})
export default createAppContainer(RootDrawerNavigator);