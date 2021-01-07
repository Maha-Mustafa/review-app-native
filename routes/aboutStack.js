import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About';
import React from 'react';
import Header from '../shared/Header';

const screens = {
    About: {
        screen : About,
        navigationOptions:({navigation}) =>{
          return {
              headerTitle : () => <Header navigation={navigation} title='About GameZone'/>
          }
      }
    }
}
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f4f4f4",
    headerStyle: { backgroundColor: "#654062", height: 60 },
  },
});
export default AboutStack;