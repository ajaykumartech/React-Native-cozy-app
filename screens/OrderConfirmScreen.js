import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'

function OrderConfirmScreen() {
    const navigation =useNavigation();
  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/order.png')} />
    <Text style={{fontSize:28,fontWeight:'700'}}>Order confirmed!</Text>
    <Text style={{width:322,fontSize:15,color:'gray'}}>Your order has been confirmed, we will send you a confirmation email shortly.</Text>
    <View style={styles.buttonContainer}>
      <Pressable onPress={()=>{navigation.navigate('menu');console.log("first")}}>
      <Button title="Go to Orders" />
      </Pressable>
      <View style={styles.buttonGap} />
      <Button title="Continue shopping"  />
    </View>
  </View>
  )
}

export default OrderConfirmScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Vertical centering
      alignItems: 'center', // Horizontal centering
    },
    buttonContainer: {
        marginTop: 40,
        flexDirection: 'column',
       // Spacing between buttons and text
    },
    buttonGap: {
        height: 10, // Adjust the height of the gap as needed
      },
  });