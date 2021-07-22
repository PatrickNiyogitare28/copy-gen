import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../screens/onboard';
import Configuration from '../screens/configuration';
import Invoice from '../screens/invoice';
import OrderReceipt from '../screens/receipt';
import InvoicesList from '../screens/invoicesList';
import Profile from '../screens/profile';
import Preview from '../screens/preview';
import Clients from '../screens/clients';
import DeliveryStatus from '../screens/deliveryStatus';


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>

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
       name="invoicesList"
       component={InvoicesList}
       options={{
         title:'Invoices',
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
       name="profile"
       component={Profile}
       options={{
         title:'Profile',
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
       name="preview"
       component={Preview}
       options={{
         title:'3D Preview',
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
       name="clients"
       component={Clients}
       options={{
         title:'Clients',
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
       name="deliveryStatus"
       component={DeliveryStatus}
       options={{
         title:'Delivery Status',
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

export default AppStack;