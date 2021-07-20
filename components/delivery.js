import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Delivery  = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
               <Text style={styles.heading}>DELIVERY</Text>
               <TouchableOpacity style={styles.editWrapper}>
                   <Text style={styles.label}>EDIT</Text>
                   <Icon name ="create" color="#4890bd" />
               </TouchableOpacity>
            </View>
            <View style={styles.addressWrapper}>
                <Text style={styles.name}>Jacob Jones</Text>
                <View style={styles.addressTextWrapper}>
                    <Icon name="place" color="grey" />
                    <Text style={styles.addressText}>Kigali, Rwanda KK 384A</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      padding: 30,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      marginTop: 15
  },
  headerWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  heading: {
      fontWeight: 'bold',
      color: '#9e9e9e'
  },
  editWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '13%',
      justifyContent:'space-between'
  },
  label: {
    color: '#4890bd'
  },
  addressWrapper: {
    marginTop: 10
  },
  name: {
    marginLeft: 7,
    fontWeight: 'bold',
    fontSize: 15
  },
  addressTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3
  },
  addressText: {
    marginLeft: 10,
    color: '#9e9e9e'
  }
})
export default Delivery;