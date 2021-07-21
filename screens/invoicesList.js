import React from 'react';
import {View, Text, StyleSheet,FlatList,Pressable} from 'react-native';
import InvoiceCard from '../components/invoiceCard';
import {Icon} from 'react-native-elements';


const InvoicesList  = ({navigation}) => {
    const invoices = [
        {
            id: "20056",
            date: "12 May, 2021",
            ownerName: "John Doe",
            ownerEmail:"john@gmali.com",
            avatar: "../assets/images/avatar-1.jpg",
            date:"12, May 2021",
            status: 'Active'
        },
         {
            id: "20029",
            date: "02 Jan, 2021",
            ownerName: "Eric Smith",
            ownerEmail:"smith5@gmali.com",
            avatar: "../assets/images/avatar-1.jpg",
            date:"12, May 2021",
            status:'Active'

        },
        {
            id: "30875",
            date: "11 June, 2021",
            ownerName: "Ivan Donny",
            ownerEmail:"ivan3@gmali.com",
            avatar: "../assets/images/avatar-1.jpg",
            date:"12, May 2021",
            status: 'Draft'

        },
         {
            id: "70020",
            date: "22 July, 2021",
            ownerName: "Alia Kenny",
            ownerEmail:"kenny@gmali.com",
            avatar: "../assets/images/avatar-1.jpg",
            date:"12, May 2021",
            status: 'Draft'

        },
    ];
    return (
        <View style={styles.container}>
           <FlatList
            data={invoices}
            keyExtractor={(invoice) => invoice.id}
            renderItem={({ item }) => (
              <InvoiceCard invoice={item} />
            )}
          />
           <View>
           <Pressable style={styles.button} 
            onPress = {() => navigation.navigate("profile")} >
               <Text style={styles.buttonText}
               >Add Client</Text>
               <Icon 
                  name="add"
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
        backgroundColor: '#f0f0',
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
});
export default InvoicesList;
