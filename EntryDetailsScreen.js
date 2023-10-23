// EntryDetailsScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EntryDetailsScreen = ({ navigation, route }) => {
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);

  const saveEntry = async () => {
    if (!description || !photo || !location) {
      Alert.alert('Incomplete Entry', 'Please fill out all fields.');
      return;
    }

    const newEntry = {
      description,
      photo,
      location,
    };

    try {
      const savedEntries = await AsyncStorage.getItem('journalEntries');
      const entries = savedEntries ? JSON.parse(savedEntries) : [];
      entries.push(newEntry);
      await AsyncStorage.setItem('journalEntries', JSON.stringify(entries));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving entry: ', error);
    }
  };

  return (
    <View>
      <Text>Add New Journal Entry</Text>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <Button
        title="Take Photo"
        onPress={() => {
          // Implement camera/photo capture logic here
        }}
      />
      {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />}
      <Text>Location: {location}</Text>
      <Button title="Save Entry" onPress={saveEntry} />
    </View>
  );
};

export default EntryDetailsScreen;
