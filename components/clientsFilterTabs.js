import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const ClientsFilterTabs = ({navigation}) => {
    return(
        <View style={styles.container}>
           <View style={styles.active}>
             <Text style={styles.activeLabel}>Recent</Text>
           </View>
           <View style={styles.tab}>
             <Text style={styles.label}>In Order</Text>
           </View>
           <View style={styles.tab}>
             <Text style={styles.label}>Partners</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 8,
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%'
    },
    tab: {
       width: '33%',
       alignItems: 'center',
       padding: 20,
       height: '100%',
       alignItems:'center',
       justifyContent:'space-around'
    },
    active: {
        backgroundColor: '#37a9f0',
        width: '33%',
        alignItems: 'center',
        padding: 20,
        height: '100%',
        alignItems:'center',
        justifyContent:'space-around',
        color: 'white',
        borderRadius: 8,
        borderColor: '#37a9f0'
    },
    label: {
        color: '#a6a6a6',
        fontSize: 15
    },
    activeLabel: {
        color: 'white',
        fontSize: 15

    }
})

export default ClientsFilterTabs;