import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Sport from "./Sport"; 
import Technolgy from "./Technolgy";

const Newsh = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.categoryHeading}>Sports News</Text>
        <Sport />
        <Text style={styles.categoryHeading}>Technology News</Text>
        <Technolgy />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Newsh;
