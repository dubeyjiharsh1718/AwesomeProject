import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Themeas = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load the user's theme preference from AsyncStorage when the component mounts
    getUserPreference('theme').then((storedTheme) => {
      if (storedTheme) {
        setTheme(storedTheme);
      }
    });
  }, []);

  const storeUserPreference = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const getUserPreference = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
    return null;
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    storeUserPreference('theme', newTheme);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme === 'light' ? 'white' : 'black' }}>
      <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>
        Current Theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default Themeas;
