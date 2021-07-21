import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';

const InvoiceCard = ({invoice}) => {
    return(
        <View style={styles.container}>
          <View style={styles.cardHeader}>
             <Text style={styles.headerText}>Invoice #{invoice.id}</Text>
             <TouchableOpacity style={styles.cardAction}>
                <Text style={styles[invoice.status]}>. {invoice.status}</Text>
             </TouchableOpacity>
          </View>
          <View>
              <Text style={styles.date}>{invoice.date}</Text>
          </View>
          <View style={styles.description}>
             <View style={styles.avatarWrapper}>
               <Image 
               source={
                   require('../assets/images/avatar-1.jpg')
               }
               style={styles.avatar}
               />
               <View style={styles.profileWrapper}>
                   <Text style={styles.name}>{invoice.ownerName}</Text>
                   <Text style={styles.email}>{invoice.ownerEmail}</Text>

               </View>
             </View>

             <TouchableOpacity style={styles.status}>
                <Icon name="visibility" color="grey" />
             </TouchableOpacity>

          </View>

        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        borderRadius: 5,
        marginTop: 10
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
       color: 'black',
       fontSize: 15,
       fontWeight: 'bold'
    },
    cardAction: {
        
    },
    label: {
        color: '#218cd9'
    },
    date: {
        color: 'grey'
    },
    description: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatarWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '45%'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 45
    },
    profileWrapper: {
    },
    name: {
        fontWeight:'bold'
    },
    email: {
        color: 'grey'
    },
    status: {
       width: 45,
       height:45,
       backgroundColor: '#A9AAAB58',
       textAlign:'center',
       padding: 10,
       borderRadius: 5
    },
    Draft: {
        color: 'grey'
    },
    Active: {
        color: '#218cd9'
    }
})

export default InvoiceCard;