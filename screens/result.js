import React from 'react';
import {StyleSheet , View, Text, TouchableOpacity, Image} from 'react-native';
import Title from '../components/title';
const Result = () => {
    return (
        <View>
            
            <Title />
            <View style={styles.bannerContainer}>
                <Image
                source={
                     require("../assets/images/one.png")
                }
                style={styles.banner}
                />
            </View>
            <TouchableOpacity>
                <Text>Home  </Text>
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
     alignItems: 'center'
 }
})

export default Result;