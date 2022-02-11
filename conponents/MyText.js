import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

function MyText({children}) {
    return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'Mj Flow',
        fontSize:18,
        color:'#555',
        fontFamily:Platform.OS === "android" ? "Roboto" : "Avenir",
        textAlign:'right'
    }
})

export default MyText;