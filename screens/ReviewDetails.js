import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {globalStyles, images} from '../style/global';
import Card from "../shared/Card";

export default function ReviewDetails({navigation}) {
    // const pressHandler = () =>{
    //     navigation.navigate('Home');
    // }
    const rating = navigation.getParam('rating');
    return (
      <View style={globalStyles.container}>
        {/* <Text style={globalStyles.titleText}>Review Screen</Text> */}
        <Card>
          <Text>{navigation.getParam("title")}</Text>
          <Text>{navigation.getParam("body")}</Text>
          <View style = {styles.rating}>
              <Text>GameZone Rating: </Text>
              <Image source = {images.ratings[rating]} style={styles.image}/>
          </View>
        </Card>
        {/* <Button title='Back to Home screen' onPress={pressHandler}/> */}
      </View>
    );
}

const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    image:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
})