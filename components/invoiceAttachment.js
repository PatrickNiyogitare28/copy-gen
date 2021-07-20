import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const InvoiceAttachment  = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
               <Text style={styles.heading}>ATTACHMENT</Text>
               <TouchableOpacity style={styles.editWrapper}>
                   <Text style={styles.label}>...</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.attWrapper}>
                <View style={styles.attTextWrapper}>
                    <Icon name="description" color="#30c7ae" />
                    <Text style={styles.attText}>Components cost list</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 15,
      paddingTop: 0,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      marginTop: 15
  },
  headerWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'

  },
  heading: {
      fontWeight: 'bold',
      color: '#9e9e9e'
  },
  editWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '13%',
      justifyContent:'space-between',
      alignItems:'center'
  },
  label: {
    color: '#777777',
    fontSize: 30
  },
  attWrapper: {
    marginTop: 10,
    height: 45
  },
  name: {
    marginLeft: 7,
    fontWeight: 'bold',
    fontSize: 15
  },
  attTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  attText: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#6D6F6F'
  }
})
export default InvoiceAttachment;