import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/homeScreen';
const screens ={
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            title:'صفحه اصلی',
            headerStyle:{ backgroundColor:'#ccc' }
        }
    },
}
const HomeStack=createStackNavigator(screens,{
    headerTintColor:'#444',
    headerStyle:{ height:60 }
});
export default HomeStack;