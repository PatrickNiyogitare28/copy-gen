import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Icon} from 'react-native-elements';

const Configuration = () => {
  return (
      <View style={styles.container}>
          <View style={styles.header}>
           <ImageBackground 
           source={require("../assets/images/conf-gradient.png")}
           style={styles.image}
           imageStyle = {{borderRadius: 5}}
           >
          <View style={styles.headerContent}>
            <Icon
                name='description'
                color='#ffff' style={styles.headerIcon} 
            />
            <Text style={styles.headerText}>A4 Document Template</Text>
          </View>
          </ImageBackground>
          </View>
          

      </View>

  )
}
const styles = StyleSheet.create({
    container: {
      height: '100%',
      padding: 20,
      backgroundColor: 'white'
    },
    header: {
        borderRadius: 5,
        height: 90
    },
    image: {
        flex: 1,
        justifyContent: "space-around",
        width: '100%',
        height: '100%',
      
      },
    headerContent: {
        display: 'flex',
        flexDirection:'row',
        width: '55%',
        justifyContent:'space-between',
        height: '30%',
        paddingLeft: 20
      },
    headerIcon: {
        fontSize: 25

    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold'
    }
    
   
})
export default Configuration;