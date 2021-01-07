import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import React from 'react';
import Header from '../shared/Header';

const screens = {
    Home:{
        screen : Home,
        navigationOptions:({navigation}) =>{
            // title: 'Game Zone', replacing it with a header component
            // headerTitle : () => <Header/>
            return {
                headerTitle : () => <Header navigation={navigation} title='GameZone'/>
            }
            // headerStyle: {backgroundColor: 'purple'} we can over-ride it aswell
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title: 'Review Details',
        }
    }
}
//create stack navigator
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'#f4f4f4',
        headerStyle: {backgroundColor: '#654062' , height: 60}
}
});
//this alone does nothing so we wrap it around an app container
// export default createAppContainer(HomeStack);
// now we don't need app container as we will wrap it in a drawer navigation
export default HomeStack;