import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../screens/onboard';
import Configuration from '../screens/configuration';
import Invoice from '../screens/invoice';
import OrderReceipt from '../screens/receipt';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="home" 
        component={Onboard} 
        options={{headerShown: false}}/>
      <Stack.Screen 
       name="configuration"
       component={Configuration}
       options={{
         title:'Configure',
         headerStyle: {
          elevation: 0,
         },
         headerTitleStyle: {
          fontWeight: 'normal',

        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerBackTitle: 'Back',
        headerBackTitleStyle: {
          color: '#BFBFBF'
        }
         }}/>
       <Stack.Screen 
       name="invoice"
       component={Invoice}
       options={{
         title:'Create Invoice',
         headerStyle: {
          elevation: 0,
         },
         headerTitleStyle: {
          fontWeight: 'normal',

        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerBackTitle: 'Back',
        headerBackTitleStyle: {
          color: '#BFBFBF'
        }
         }}/>
       <Stack.Screen 
       name="receipt"
       component={OrderReceipt}
       options={{
         title:'Order Receipt',
         headerStyle: {
          elevation: 0,
         },
         headerTitleStyle: {
          fontWeight: 'normal',

        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerBackTitle: 'Back',
        headerBackTitleStyle: {
          color: '#BFBFBF'
        }
         }}/>
    </Stack.Navigator>
  );
  
}

export default MyStack;