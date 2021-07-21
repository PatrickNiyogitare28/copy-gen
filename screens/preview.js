import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Preview = ({navigation}) => {
    return(
        <View style={styles.container}>
           <View style={styles.banner}>
             <Image 
                source = {
                    require("../assets/images/preview.png")
                }

                style={styles.image}
             />
           </View>
           <View style={styles.envelopWrapper}>
                <Text style={styles.title}>Envelop Print</Text>
                <View style={styles.itemWrapper}>
                    <Text style={styles.leftText}>Envelop Type : </Text>
                    <Text style={styles.rightText}>Standard A4</Text>
                </View>
                <View style={styles.itemWrapper}>
                    <Text style={styles.leftText}>Envelop Size : </Text>
                    <Text style={styles.rightText}>8.3 Inches by 11.5 Inches</Text>
                </View>
                <View style={styles.itemWrapper}>
                    <Text style={styles.leftText}>Paper Texture</Text>
                    <Text style={styles.rightText}>Smooth Texture</Text>
                </View>
           </View>

           <Pressable style={styles.button} 
            onPress = {() => navigation.navigate("invoice")} >
               <Text style={styles.buttonText}
               >Continue</Text>
               <Icon 
                  name="east"
                  color="#ffff"
               />
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
    banner: {
        height: '60%',
        textAlign:'center',
        justifyContent:'space-around',
        alignItems:'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginVertical: 10
    },
    itemWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#D6D6D6AA',
        paddingVertical: 15
    },
    leftText: {
        color: '#a6a6a6',
        fontSize: 14,
    },
    rightText: {
        color: '#a6a6a6',
        textAlign: 'right',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#46a6fa',
        marginTop: 20,
        display:'flex',
        flexDirection:'row'
      },
      buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        paddingRight: 5
      },
   
})

export default Preview;