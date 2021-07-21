import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const ProfileItem = ({item}) => {
    const {name, icon, color , count} = item;

    return (
      <TouchableOpacity style={styles.container}>
          <View  style={styles.labelWrapper}>
            <View style={{backgroundColor: color, width: 30, height: 30, borderRadius: 5, padding: 2}}>
                <Icon name = {icon} color='white' />
            </View>
            <Text style={styles.name}>{name}</Text> 
          </View>
          <View>
             <Text style={{color: color, fontSize: 14}}>{count}</Text>
          </View>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  container: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#F0F0F0C9',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20
  },
  labelWrapper: {
      width: '28%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'

  },
  name: {
      width: 200,
      paddingLeft: 20,
      fontWeight: 'bold',
      color: '#757575',
      fontSize: 15
  }

})

export default ProfileItem;