import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './Todo';
import ApiCall from './ApiCall';
import Icon from 'react-native-vector-icons/Ionicons';

const todo = 'Todo';
const apiCall = 'ApiCall';
const Tab = createBottomTabNavigator();

const Navigatetab = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === todo) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === apiCall) {
            iconName = focused ? 'person' : 'person-outline';
          } 

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Tab.Screen name={todo} component={Todo} />
        <Tab.Screen name={apiCall} component={ApiCall}  />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default Navigatetab;
