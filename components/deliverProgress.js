import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const DeliveryProgress = ({navigation}) => {
    return(
        <View style={styles.container}>
           <View style={styles.period}>
            <View style={styles.date}>
                <Text style={styles.dateText}>04 December</Text>
            </View>
            <Image source={
                require("../assets/images/done.png")
            } />
            <View style={styles.event}>
                <Text  style={styles.eventText}> Order started</Text>
            </View>
           </View>

           

           <View style={styles.period}>
            <View style={styles.date}>
                <Text style={styles.dateText}>09 December</Text>
            </View>
            <Image source={
                require("../assets/images/done.png")
            } />
            <View style={styles.event}>
                <Text style={styles.eventText}>In the progress</Text>
            </View>
           </View>


           <View style={styles.period}>
            <View style={styles.date}>
                <Text  style={styles.dateText}>12 December</Text>
            </View>
            <Image source={
                require("../assets/images/inprogress.png")
            } />
            <View style={styles.event}>
                <Text style={styles.eventText}>Packing</Text>
            </View>
           </View>


           <View style={styles.period}>
            <View style={styles.date}>
                <Text  style={styles.dateText}>14 December</Text>
            </View>
            <Image source={
                require("../assets/images/notdone.png")
            } />
            <View style={styles.event}>
                <Text style={styles.eventText}> Transaction</Text>
            </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height:'55%',
        backgroundColor: 'white'
    },
    period: {
        flexDirection:'row',
        height: 80,
        justifyContent:'space-between'
    },
    date: {
        width: '30%'
    },
    event: {
        width: '30%'
    },
    dateText: {
        fontSize: 16,
        color: 'black',
        fontWeight:'bold'
    },
    eventText: {
        fontSize: 16,
        color: '#2492d6',
        fontWeight:'bold'
    }
   
})

export default DeliveryProgress;