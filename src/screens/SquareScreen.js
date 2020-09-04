import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const colorValues = [
    {
        color: 'Red',
    },
    {
        color: 'Blue',
    },
    {
        color: 'Green',
    },
]

function SquareScreen() {
    return (
        <View>
            {
                colorValues.map(value => (
                    <ColorCounter color={value.color }/>
                ))
            }
        </View>
    )
}

export default SquareScreen
