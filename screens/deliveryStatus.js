import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import DeliveryProgress from '../components/deliverProgress'
import {Icon} from 'react-native-elements';

const DeliveryStatus = ({navigation}) => {
    return(
        <View style={styles.container}>
           <View style={styles.imageContainer}>
           <Image 
               source={
                   require('../assets/images/deliver.jpg')
               }
               />
           </View>
           <DeliveryProgress />
           <Pressable style={styles.button} 
            onPress = {() => navigation.navigate("home")} >
               <Text style={styles.buttonText}
               >Back to Home</Text>
           </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        height: '100%'
    },
    imageContainer: {
        height:'30%',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#46a6fa',
        marginTop: 20
      },
      buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
   
})

export default DeliveryStatus;