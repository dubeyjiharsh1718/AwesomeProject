import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EntryListScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const savedEntries = await AsyncStorage.getItem('journalEntries');
      if (savedEntries) {
        setEntries(JSON.parse(savedEntries));
      }
    } catch (error) {
      console.error('Error loading entries: ', error);
    }
  };

  return (
    <View>
      <Text>Journal Entries</Text>
      <Button
        title="Add New Entry"
        onPress={() => navigation.navigate('EntryDetails')}
      />
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.description}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('EntryDetails', { entry: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default EntryListScreen;
