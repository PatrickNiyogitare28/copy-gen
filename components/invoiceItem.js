import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const InvoiceItem = ({item}) => {
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.card}>
              <View style={styles.leftWrapper}>
                  <Icon  iconStyle={styles.icon} name="description" color="#b0c4d1" />
                  <View style={styles.descriptionContainer}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.category}>Quantity {item.quantity}</Text>
                  </View>
              </View>
              <View style={styles.rightWrapper}>
                  <Text style={styles.price}>$ {item.price}</Text>
                  <Text style={styles.category}>{item.category}</Text>
              </View>
           </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    card: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        borderTopColor: '#E3E3E38C',
        borderTopWidth: 1,
        paddingTop: 10
        
    },
    leftWrapper: {
        display: 'flex',
        flexDirection:'row',
    },
    rightWrapper: {
        display: 'flex',
        flexDirection:'column',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5
    },
    category: {
        color: '#c2c4c4',
        marginTop: 5
    },
 

})

export default InvoiceItem;