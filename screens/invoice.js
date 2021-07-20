import React from 'react';
import {View, Text, StyleSheet,ImageBackground,FlatList,Pressable } from 'react-native';
import {Icon} from 'react-native-elements';
import InvoiceItem from '../components/invoiceItem';
import Delivery from '../components/delivery';
import InvoiceAttachment from '../components/invoiceAttachment';

const Invoice = ({navigation}) => {
  const items = [
      {
          id: "ueuedk",
          name: 'Business card',
          quantity: 100,
          price: '800',
          category: 'D1',
      },
      {
        id: "ueuddk",
        name: 'Catalogs',
        quantity: 100,
        price: '800',
        category: 'D1',
    },
    {
        id: "ueu445k",
        name: 'Printed envilopes',
        quantity: 100,
        price: '800',
        category: 'D1',
    }

  ]
  return (
    <View style={styles.container}>
         <View style={styles.header}>
           <ImageBackground 
           source={require("../assets/images/invoice-gradient.png")}
           style={styles.image}
           imageStyle = {{borderRadius: 5}}
           >
          <View style={styles.headerContent}>
            <Icon
                name='recommend'
                color='#ffff' style={styles.headerIcon} 
            />
            <View>
                <Text style={styles.headerText}>
                    A4 Document Template
                </Text>
                <Text style={styles.headerSmallText}>John mall, May 12 2021</Text>
            </View>
           
          </View>
          </ImageBackground>
          </View>

          <View style={styles.listContainer}>
          <FlatList
            data={items}
            ListHeaderComponent={() => <Text style={styles.itemListTitle}>ITEMS</Text>}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <InvoiceItem item={item} />
            )}
          />
          </View>
          <Delivery/>
          <InvoiceAttachment/>
          <View>
           <Pressable style={styles.button} 
            onPress = {() => navigation.navigate("receipt")} >
               <Text style={styles.buttonText}
               >Next Step</Text>
               <Icon 
                  name="east"
                  color="#ffff"
               />
           </Pressable>
           </View>
    </View>
  )
}
export default Invoice;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        height: '100%',
    },
    header: {
        borderRadius: 5,
        height: 90
    },
    image: {
        flex: 1,
        justifyContent: "space-around",
        width: '100%',
        height: '100%',
      
      },
    headerContent: {
        display: 'flex',
        flexDirection:'row',
        width: '55%',
        justifyContent:'space-between',
        height: '70%',
        paddingLeft: 20
      },
    headerIcon: {
        fontSize: 25

    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold'
    },
    headerSmallText: {
        color: 'white',
        marginTop: 5
    },
    listContainer: {
      backgroundColor: 'white',
      padding: 10,
      marginTop: 15,
      borderRadius: 5
    },
    itemListTitle: {
        fontSize: 13,
        color: '#bdbdbd',
        fontWeight: 'bold',
        marginLeft: 7
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#46a6fa',
        marginVertical: 55,
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