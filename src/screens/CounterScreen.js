import React, { useReducer } from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT': 
            return { ...state, counter: state.counter + action.payload}
        case 'DECREMENT':
            return { ...state, counter: state.counter - action.payload}
        default:
            return state
    }
}


function CounterScreen() {

    const [{counter}, dispatch] = useReducer(reducer, {counter: 0})

    return (
        <View>
            <Button onPress={()=>dispatch({ type: 'INCREMENT', payload: 1})} title='Increase'/>
            <Button onPress={()=>dispatch({ type: 'DECREMENT', payload: 1})} title='Decrease'/>
            <Text> The value is {counter}</Text>
        </View>
    )
}

export default CounterScreen
