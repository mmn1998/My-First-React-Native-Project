import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'

export default function MyButton({ text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius:10,
        borderTopLeftRadius:25,
        borderTopRightRadius:10,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:10,
        backgroundColor:'rgb(246, 114, 66)',
        paddingHorizontal:14,
        paddingVertical:10        
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'
    }
})

