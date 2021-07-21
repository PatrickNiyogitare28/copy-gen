import React from 'react';
import {StyleSheet , View, Text, TouchableOpacity, Image} from 'react-native';
import Title from '../components/title';
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <Title />
            <View style={styles.bannerContainer}>
                <Image
                source={
                     require("../assets/images/one.png")
                }
                style={styles.banner}
                />
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Quiz")}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
 banner: {
     height: 300,
     width: 300
 },
 bannerContainer: {
     justifyContent: 'center',
     alignItems: 'center',
     height:'78%'
 },
 container:{
    paddingTop: 40,
    paddingHorizontal: 20,
 },
 button:{
     width: '100%',
     backgroundColor: '#1A759F',
     padding: 16,
     borderRadius: 20,
     alignItems:'center',
     marginBottom: 30

 },
 buttonText: {
     fontSize: 24,
     fontWeight: '600',
     color: 'white'

 }
})

export default Home; 