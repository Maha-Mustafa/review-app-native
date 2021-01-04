import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
//register fonts
const getFonts = () =>{
  return Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  })
}
export default function App() {
  //checking if the font is loaded 
  const[fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <Home/>
    ); 
  }else{
    //it will show apploading component
    return(
      <AppLoading
       startAsync={getFonts}
       onFinish = { () => setFontsLoaded(true)}
       onError = {()=> console.log('error')}
      />
    )
  }
}
