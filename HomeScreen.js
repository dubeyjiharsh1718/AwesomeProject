import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Property Listing App</Text>
      <Button
        title="Browse Properties"
        onPress={() => navigation.navigate('PropertyList')}
      />
    </View>
  );
}

export default HomeScreen;
