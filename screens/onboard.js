import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, TextInput,Pressable } from 'react-native';

const Onboard = () => {
    return (
        <View style={styles.container}>
           <View style={styles.banner}>
               <Image source={
                   require("../assets/logos/logo.png")
               }
               style={styles.image}
               />
           </View>
           <View style={styles.highlight}>
               <View>
                   <Text style={styles.headerText}>Welcome to CopyGen</Text>
               </View>
               <View style={styles.highlightTextContainer}>
                   <Text style={styles.highlightText}>We deliver the freshest fruit salad combo. </Text>
                   <Text style={styles.highlightText}>Order from combo today</Text>
               </View>
           </View>
           <View style={styles.formContainer}>
               <TextInput style={styles.input} placeholder="email"/>
               <TextInput style={styles.input} secureTextEntry={true}  placeholder="password"/>

           </View>
           <View>
           <Pressable style={styles.button} >
               <Text style={styles.buttonText}>Log in</Text>
           </Pressable>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        padding: 20
    },
    banner: {
        alignItems: 'center',
        height: '30%',
        justifyContent:'space-around',

    },
    image: {
        width: 90,
        height:90
    },
    highlight: {
        alignItems:'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: "#424242"
    },
    highlightTextContainer: {
      marginTop: 20
    },
    highlightText: {
        fontWeight: 'normal',
        fontSize: 18,
        color: '#5D577E',
        textAlign:"center"
    },

    formContainer: {
        marginTop: 80
    },
    input: {
       borderRadius: 5,
       backgroundColor: '#f0f0f0',
       padding: 15,
       fontSize: 20,
       marginVertical: 10

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#46a6fa',
        marginVertical: 40
      },
      buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    
});
export default Onboard;