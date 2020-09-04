import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetails from '../components/ImageDetails'

const images = [
    {
        name: 'Forest',
        img: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        key: '1'
    },
    {
        name: 'Beach',
        img: 'https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg',
        key: '2'
    },
    {
        name: 'Mountain',
        img: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
        key: '3'
    }
]

const ImageScreen = () => {
    return(
        <View>
            {
                images.map((image, index) => (
                    <ImageDetails key={index} name={image.name} img={image.img}/>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen