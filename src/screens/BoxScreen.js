import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function BoxScreen() {
    return (
        <View style={styles.text}>
            <Text style={styles.viewStyle}>My name is </Text>
            <Text style={styles.viewStyle, { flex: 1, alignSelf:'center', borderColor: 'red' }}>My name is </Text>
            <Text style={styles.viewStyle}>My name is R</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        margin: 15,
        // borderWidth: 5, 
        // alignItems: 'center',
        // padding:15,
        justifyContent: 'center',
        alignItems:'center',
        height: 200,
        // flexDirection: 'row'
    },
    viewStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // alignSelf:'center'
    }
})

export default BoxScreen
