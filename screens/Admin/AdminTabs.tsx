import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Color from '@/constanst/Color';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Admin from './Admin';
import Category from './Category';
import Products from './Products';

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  const navigation = useNavigation();
  return (
   
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarStyle: {
                backgroundColor: Color.bigColor,
                borderTopWidth: 0,
                padding: 0,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
              },
              tabBarShowLabel: false,
              tabBarActiveTintColor: Color.black,
              tabBarInactiveTintColor: '#999',
              headerTransparent: true,
              headerTitle: "",
              // headerLeft: () => {
              //   if (route.name === 'Home') {
              //       return (
              //         <TouchableOpacity
              //           onPress={() => {}}
              //           style={{ paddingHorizontal: 16}}
              //         >
              //           <Image
              //             source={require('../../assets/images/profile1.png')}
              //             style={{
              //               width: 50,
              //               height: 50,
              //               marginLeft: 20,
              //               borderRadius: 10,
              //             }}
              //           />
              //         </TouchableOpacity>
              //       );
              //     }
              //     return null;
              // },
            //   headerRight: () => {
            //     if (route.name === 'Home') {
            //         return (            
            //           <TouchableOpacity
            //             onPress={() => {
            //               navigation.navigate('Notification')
            //             }}
            //             style={{
            //               marginRight: 20,
            //               borderRadius: 10,
            //               backgroundColor: 'white',
            //               padding: 10,
            //               shadowColor: '#171717',
            //               shadowOffset: { width: 2, height: 4 },
            //               shadowOpacity: 0.2,
            //               shadowRadius: 3,
                      
            //             }}
            //           >
            //             <Ionicons name="notifications" size={30} color={Color.black} />
            //           </TouchableOpacity>
              
            //         );
            //       }
            //       return null;
            //     },
              })}
      >
        <Tab.Screen name="Home" component={Admin} 
         options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="compass" size={30} color={color} />
            ),
          }}
        />
          <Tab.Screen name="Bookmark" component={Category}
         options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="book" size={30} color={color} />
            ),
          }}
         />
           <Tab.Screen name="Settings" component={Products}
         options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" size={30} color={color} />
            ),
          }}
         />
      </Tab.Navigator>

  );
}

export default AdminTabs;
