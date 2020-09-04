import React, { useState} from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

function CounterScreen() {

    const [counter, setCounter]  = useState(0)

    return (
        <View>
            <Button onPress={()=>setCounter(counter+1)} title='Increase'/>
            <Button onPress={()=>setCounter(counter-1)} title='Decrease'/>
            <Text> The value is {counter}</Text>
        </View>
    )
}

export default CounterScreen
