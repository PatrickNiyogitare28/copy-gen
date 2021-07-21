import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const ClientCard = ({client}) => {
    const {name, email} = client;
    return(
        <View style={styles.container}>
           <View style={styles.avatarWrapper}>
           <Image 
               source={
                   require('../assets/images/avatar-1.jpg')
               }
               style={styles.avatar}
               />
           </View>
           <View style={styles.profile}>
               <Text style={styles.name}>{name}</Text>
               <Text style={styles.email}>{email}</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection:'row'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    profile: {
        marginLeft: 20
    },
    name: {
        fontWeight: 'bold',
        color: '#666666',
        fontSize: 15
    },
    email: {
        color: '#999999'
    }

})

export default ClientCard;