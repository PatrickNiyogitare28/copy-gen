import React from 'react';
import {StyleSheet , View, Text} from 'react-native';

const Title = () => {
    return (
        <View  style={styles.container}>
            <Text style={styles.title}>Quizzler</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   title: {
       fontSize: 36,
       fontWeight: '600'
   },
   container: {
       paddingVertical: 16,
       justifyContent:'center',
       alignItems:'center'

   }
})

export default Title;