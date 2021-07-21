import React from 'react';
import {StyleSheet , View, Text, TouchableOpacity} from 'react-native';

const Quiz = () => {
    return (
        <View style={styles.container}>
           <View>
               <Text style={styles.question}>Q. Answer to this quest</Text>
           </View>
           <View style={styles.options}>
               <TouchableOpacity>
                   <Text>Option 1</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text>Option 2</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text>Option 3</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text>Option 3</Text>
               </TouchableOpacity>
           </View>
           <View style={styles.bottom}>
               <TouchableOpacity style={styles.button}>
                   <Text style={styles.buttonText}>SKIP</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>NEXT</Text>
               </TouchableOpacity>
               {/* <TouchableOpacity>
                    <Text>END</Text>
               </TouchableOpacity> */}
           </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    top: {
        marginVertical: 16,
        flex: 1
    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    bottom: {

        paddingVertical: 16,
        justifyContent:'space-between',
        flexDirection: 'row'
    },
    button:{
        backgroundColor: '#1A759F',
        padding: 16,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems:'center',
        marginBottom: 30
   
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white'
   
    },
    question:{
        fontSize: 25,
        fontWeight: '100'
    }

})

export default Quiz;