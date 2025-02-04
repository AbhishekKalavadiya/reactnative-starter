import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

function ComponentsScreen() {
    const name = 'Abhi'
    return (
        <View>
            <Text style={styles.textStyle}>Getting s tarted with React-Native</Text>
            <Text style={styles.subHeaderStyle}>My Name is {name}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen
