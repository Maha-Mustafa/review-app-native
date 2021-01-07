import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation, title}) {
    const openMenu = () =>{
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            {/* icon for the menu */}
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
            <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
            <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffd66b',
        letterSpacing: 1
    },
    icon:{
        position: 'absolute',
        left: 16,
        color: '#ffd66b'
    },
    headerTitle:{
        flexDirection: 'row'
    },
    headerImage:{
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
});
