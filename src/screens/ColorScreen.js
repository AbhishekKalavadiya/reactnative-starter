import React, { useState } from 'react'
import { View, Button, StyleSheet, FlatList } from 'react-native'


function ColorScreen() {

    const [colors, setColors] = useState([])

    return (
        <View>
            <Button title='Add Color' onPress={()=>setColors([...colors,color()])}/>
            <FlatList 
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    return  <View style={{height: 100, width: 100, backgroundColor: item}}/>
                }}
            />
        </View>
    )
}

const color = () => {
    const colorBack = Math.floor(Math.random()*256)
    const colorBack1 =  Math.floor(Math.random()*256)
    const colorBack2 =  Math.floor(Math.random()*256)

    return `rgb(${colorBack}, ${colorBack1}, ${colorBack2})`;
}

export default ColorScreen
