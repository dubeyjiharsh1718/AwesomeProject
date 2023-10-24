import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ApiCall from './ApiCall';
import Icon from 'react-native-vector-icons/Ionicons';
import Newsh from './Newscategory/Newsh';
import Technolgy from './Newscategory/Technolgy';
import Sport from './Newscategory/Sport';




const newsh = 'Newsh';
const apiCall = 'ApiCall';
const technolgy = 'Technolgy';
const sport = 'Sport';
const Tab = createBottomTabNavigator();

const News = () => {
  return (
    
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
      
          if (route.name === newsh) {
            iconName = focused ? 'home' : 'home-outline';
          } 
        //   else if (route.name === apiCall) {
        //     iconName = focused ? 'person' : 'person-outline';
        //   } 
          else if (route.name === technolgy) {
            iconName = focused ? 'laptop' : 'laptop-outline';
          } else if (route.name === sport) {
            iconName = focused ? 'football' : 'football-outline';
          }
      
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      

      >
        <Tab.Screen name={newsh} component={Newsh} />
        
        {/* <Tab.Screen name={apiCall} component={ApiCall}  /> */}
        <Tab.Screen name={technolgy} component={Technolgy}  />
        <Tab.Screen name={sport} component={Sport}  />
      </Tab.Navigator>
      
    // </NavigationContainer>
  );
};

export default News;
