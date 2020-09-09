import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

function TextScreen() {

    const [name, setName ] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} 
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>my name is {name}</Text>
            <Text>Enter Password:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} 
                textContentType='password'
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {
                password.length < 5 ?<Text>password must be more than 5 caracter</Text>: null
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 15,
        fontSize:20,
        borderColor: 'white',
        backgroundColor: 'black',
        borderWidth: 2 
    }
})

export default TextScreen
