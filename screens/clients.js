import React from 'react';
import {View, Text, Image, Pressable, StyleSheet,FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import SearchBox from '../components/searchBox';
import FilterTabs from '../components/clientsFilterTabs';
import ClientCard from '../components/clientCard';

const Clients = ({navigation}) => {
    const clients = [
        {
            id: "1",
            name: "Joon doe",
            email: 'john@gmail.com'

        },
        {
            id: '2',
            name: "Eric Bonner",
            email: 'ericbonner@gmail.com'

        },
        {
            id: '3',
            name: "Luc Mike",
            email: 'lucmi@gmail.com'

        },
        {
            id: '4',
            name: "Nadia Meddy",
            email: 'nadimeddy@gmail.com'

        },
        {
            id: '5',
            name: "Josua Belix",
            email: 'joshbelix@gmail.com'

        },
        {
            id: '6',
            name: "Nina Nickita",
            email: 'ninickita@gmail.com'

        },
        {
            id: '7',
            name: "Emmy David",
            email: 'davemmy5@gmail.com'

        },
     
    ]
    return(
        <View style={styles.container}>
           <SearchBox />
           <FilterTabs />
           <FlatList
            style={styles.list}
            data={clients}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ClientCard client={item} />
            )}
          />
        <View style={styles.buttonsContainer}>
           <Pressable style={styles.saveButton} >
               <Text style={styles.buttonText}
               >Save</Text>
           </Pressable>
           <Pressable style={styles.continueButton} 
            onPress = {() => navigation.navigate("deliveryStatus")} >
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
        height: '100%',
        backgroundColor: 'white'
    },
    list:{
        height:'80%'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 10
    },
    saveButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderRadius: 4,
      backgroundColor: '#8638E0C4',
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

export default Clients;