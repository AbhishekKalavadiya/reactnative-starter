import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

  const navigate = navigation.navigate

  return (
    <View>
      <Text style={styles.text}>I am building React</Text>
      <Button

        onPress={() => navigate('Components')} 
        title="Go to components Demo" 
      />
      <Button 
        title={'Go to List demo'}  
        onPress={() => navigate('List')}
      />
       <Button 
        title={'Go to Image demo'}  
        onPress={() => navigate('Image')}
      />
      <Button 
        title={'Go to Counter demo'}  
        onPress={() => navigate('Counter')}
      />
      <Button 
        title={'Go to Color demo'}  
        onPress={() => navigate('Color')}
      />
      <Button 
        title={'Go to Square Screen demo'}  
        onPress={() => navigate('Square')}
      />
      <Button 
        title={'Go to Text Screen demo'}  
        onPress={() => navigate('Text')}
      />
      <Button 
        title={'Go to Box Screen demo'}  
        onPress={() => navigate('Box')}
      />
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
