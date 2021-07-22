import React from 'react';
import {View, Text, StyleSheet,Image,Pressable} from 'react-native';
import Barcode from "react-native-barcode-builder";

import {Icon} from 'react-native-elements';


const OrderReceipt = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.receiptCard}>
              <View style={styles.header}>
                <Image source={
                  require("../assets/images/shield.png")
                }   
                style={styles.headerImage}
                />
                <Text style={styles.headerText}>Payment Successful</Text>
              </View>
              <View style={styles.invoItemsContainer}>
              <View style={styles.invoItem}>
                  <Text style={styles.leftItemText}>Order Date</Text>
                  <Text style={styles.rightItemText}>12 Match, 2021</Text>
              </View>
              <View style={styles.invoItem}>
                  <Text style={styles.leftItemText}>Order ID</Text>
                  <Text style={styles.rightItemText}>3DADE33480DDVEEE23</Text>
              </View>
              <View style={styles.invoItem}>
                  <Text style={styles.leftItemText}>Payment</Text>
                  <Text style={styles.rightItemText}>VISA - 28384</Text>
              </View>
              <View style={styles.invoItem}>
                  <Text style={styles.leftItemText}>Address</Text>
                  <Text style={styles.rightItemText}>Kigali, Rwanda KK44</Text>
              </View>
              </View>

              <View style={styles.infoContainer}>
              <View style={styles.invoItem}>
                  <Text style={styles.leftItemText}>Sub Total</Text>
                  <Text style={styles.rightItemText}>$ 355</Text>
              </View>
              <View style={styles.invoItem}>
                  <Text style={styles.leftItemText}>Service fee</Text>
                  <Text style={styles.rightItemText}>$ 56</Text>
              </View>
              <View style={styles.invoItem}>
                  <Text style={styles.leftItemText}>Derivery fee</Text>
                  <Text style={styles.rightItemText}>$ 45</Text>
              </View>
             
              </View>
              <View style={styles.invoItemsContainer}>
              <View style={styles.invoItem}>
                  <Text style={styles.totalLeftItemText}>Total</Text>
                  <Text style={styles.totalRightItemText}>$ 623</Text>
              </View>
              </View>
              <View>
              <Text style={styles.barcode} >
                <Barcode value="incodable values" format="CODE128" />;
                </Text>
              </View>
            
             
           </View>
           <View>
                {/* <Barcode value="Hello World" format="CODE128" />; */}
           </View>
           <View style={styles.buttonsContainer}>
           <Pressable style={styles.saveButton} >
               <Text style={styles.buttonText}
               >Save</Text>
           </Pressable>
           <Pressable style={styles.continueButton} 
            onPress = {() => navigation.navigate("invoicesList")} >
               <Text style={styles.buttonText}
               >Continue</Text>
               <Icon 
                  name="east"
                  color="#ffff"
               />
           </Pressable>
           
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    height: '100%',
  },
  receiptCard: {
      height: "90%",
      backgroundColor: 'white',
      elevation: 2,
      borderRadius: 5

  },
  header: {
      padding: 20,
      alignItems:'center',
      height: '30%'
  },
  headerImage: {
      width: 110,
      height: 110
  },
  headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 5
  },
  invoItemsContainer: {
    padding: 20
  },
  invoItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      marginTop: 5
  },
  leftItemText: {
      color: 'grey',
      fontSize: 15
  },
  totalLeftItemText: {
    fontSize: 18,
    fontWeight:'bold',
    color: 'black',

  },
  rightItemText: {
      color: 'grey',
      textAlign: 'right',
      fontSize: 15

  },
  totalRightItemText: {
    color: 'black',
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold'


},
  infoContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',

  },
  barcode: {
    display:'flex',
    width: '70%',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  buttonsContainer: {
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-between'
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#8638E0C4',
    marginTop: 20,
    display:'flex',
    flexDirection:'row',
    width: "48%"
  },
  continueButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#46a6fa',
    marginTop: 20,
    display:'flex',
    flexDirection:'row',
    width: "48%"
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

export default OrderReceipt;