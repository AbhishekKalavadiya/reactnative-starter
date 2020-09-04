import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetails = ({name, img}) => {

    let photo = {uri: img}
    
    return (
        <View>
            {img && <Image source={photo} style={{ width: 400, height: 200}}/>}
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageDetails