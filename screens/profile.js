import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image,FlatList,Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import ProfileItem from '../components/profileItem';

const Profile = ({navigation}) => {
    const items = [
       {
           name:'Active orders',
           icon: 'schedule',
           color: '#41a7fa',
           count: '34',
       },
       {
        name:'Projects',
        icon: 'folder',
        color: '#b53afc',
        count: '224',
       },
       {
        name: 'Invoices',
        icon: 'description',
        color: '#fc2b71',
        count: '',
       },
       {
        name:'Clients',
        icon: 'person',
        color: '#fca52b',
        count: '',
       },
       {
        name:'Stats',
        icon: 'circle',
        color: '#828282',
        count: '',
       },
       {
        name:'Settings',
        icon: 'settings',
        color: '#828282',
        count: '',
       },
       {
        name:'FAQ',
        icon: 'lightbulb',
        color: '#828282',
        count: '',
       },
    ]
    return (
        <View style={styles.container}>
           <View style={styles.profileWrapper}>
           <Image 
               source={
                   require('../assets/images/avatar-1.jpg')
               }
               style={styles.avatar}
               />
            <View style={styles.emailNameWrapper}>
               <Text  style={styles.name}>John Doe</Text>
               <Text  style={styles.email}>johndoe@gmail.cm</Text>
           </View>
           </View>

           <FlatList
            style={styles.list}
            data={items}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <ProfileItem item={item} />
            )}
          />

        <View style={styles.buttonsWrapper}>
        <Pressable style={styles.button1} 
            onPress = {() => navigation.navigate("profile")} >
               <Text style={styles.buttonText1}
               >Add Client</Text>
              
       </Pressable>
        <Pressable style={styles.button} 
            onPress = {() => navigation.navigate("profile")} >
               <Text style={styles.buttonText}
               >Create Invoice</Text>
              
           </Pressable>
           </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: 'white',
        height: '100%'
    },
    profileWrapper: {
     display:'flex',
     flexDirection: 'row',
     padding: 20
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    emailNameWrapper: {
        marginLeft: 20
    },
    name: {
        fontWeight: 'bold',
    },
    email: {
        color: 'grey'
    },
    list: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor:'#F0F0F0C9'
    },
    buttonsWrapper: {
        padding: 20,
        marginTop: 20
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 4,
        borderColor: '#46a6fa',
        borderWidth: 2,
        marginTop: 30,
        display:'flex',
        flexDirection:'row'
      },
      buttonText1: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        paddingRight: 5,
        color: '#46a6fa',

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

export default Profile;