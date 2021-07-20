import React from 'react';
import {View, Text, StyleSheet, ImageBackground,TextInput, Image,Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import SelectInput from 'react-native-select-input-ios'

const Configuration = () => {
  const options = [
      { value: 0,label: 'Binding' },
      { value: 1,label: 'Basic' },
      { value: 2,label: 'Regular Plan' },
    ]
  return (
      <View style={styles.container}>
          <View style={styles.header}>
           <ImageBackground 
           source={require("../assets/images/conf-gradient.png")}
           style={styles.image}
           imageStyle = {{borderRadius: 5}}
           >
          <View style={styles.headerContent}>
            <Icon
                name='description'
                color='#ffff' style={styles.headerIcon} 
            />
            <Text style={styles.headerText}>A4 Document Template</Text>
          </View>
          </ImageBackground>
          </View>
          
          <View style={styles.formContainer}>
               <TextInput style={styles.input} placeholder="Order name"/>
               <TextInput style={styles.input} placeholder="Serial number"/>
               <SelectInput style={styles.select} value={0} options={options} />
               <SelectInput style={styles.select} value={2} options={options} />

           </View>
           <View style={styles.sortingContainer}>
             <Text style={styles.sortingHeader}>SORTING</Text>
             <View style={styles.docsContainer}>
                 <View style={styles.leftCard}>
                    <Image source={
                        require("../assets/icons/envilop.png")
                    }
                    style={styles.iconImage}
                    
                    />
                    <Text style={styles.cardText}>Sets</Text>
                 </View>
                 <View style={styles.rightCard}>
                 <Image source={
                        require("../assets/icons/envilop.png")
                    } 
                    style={styles.iconImage}
                    
                    />
                    <Text style={styles.cardText}>Copies</Text>
                 </View>
             </View>
           </View>
           <View style={styles.attContainer}>
               <Text  style={styles.sortingHeader}>ATTACHMENTS</Text>
               <View style={styles.attCard}>
                    <Icon
                        name='folder'
                        color='#4890bd' 
                    />
                    <Text style={styles.attText}>Browse your file</Text>
               </View>
           </View>
           <View>
           <Pressable style={styles.button} 
            onPress = {() => navigation.navigate("configuration")} >
               <Text style={styles.buttonText}
               >Log in</Text>
           </Pressable>
           </View>
      </View>

  )
}
const styles = StyleSheet.create({
    container: {
      height: '100%',
      padding: 20,
      backgroundColor: 'white'
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
        height: '30%',
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
     formContainer: {
        marginTop: 10
    },
    input: {
       borderRadius: 5,
       backgroundColor: '#f0f0f0',
       padding: 15,
       fontSize: 15,
       marginVertical: 10

    },
    select: {
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        padding: 5,
        marginVertical: 10,
     },
     sortingHeader: {
      color: 'grey',
      fontWeight:'bold'
     },
     sortingContainer: {
        width: '100%',
        paddingVertical:10
     },
     docsContainer: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:10
     },
     rightCard: {
        width:'47%',
        display:'flex',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#46a6fa',
        alignItems:'center'

     },
     leftCard: {
        width:'47%',
        display:'flex',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'grey',
        alignItems:'center'
     },
     cardText: {
        color: 'grey',
        fontSize: 15,
        paddingLeft: 10
     },
     iconImage: {
         width: 50,
         height: 40
     },
     attContainer: {
         marginTop: 5
     },
     attCard: {
         borderRadius: 10,
         borderStyle: 'dashed',
         borderColor: '#46a6fa',
         borderWidth: 2,
         display:'flex',
         flexDirection:'row',
         marginTop: 20,
         padding: 20,
         justifyContent:'center',

         
     },
     attText: {
         color: '#46a6fa',
         marginLeft: 10
     },
     button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#46a6fa',
        marginVertical: 10
      },
      buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    
   
})
export default Configuration;