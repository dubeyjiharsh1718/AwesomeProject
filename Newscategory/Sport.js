import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Swiper from 'react-native-swiper';

const Sport = () => {
  const [data, setdata] = useState([]);

  const getAPIData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/news');
      setdata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <View>
        <Swiper loop showsPagination={true}>
          {data.length ? (
            data.map((item) => (
              <View key={item.id}>
                {Array.isArray(item.content) ? (
                  item.content.map((contentItem) => (
                    <View key={contentItem.id} style={styles.ListContainer}>
                      {contentItem.img && (
                        <Image
                          source={{ uri: contentItem.img }}
                          style={{ width: '100%', height: 250 }}
                        />
                      )}
                      {contentItem.name && (
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                          {contentItem.name}
                        </Text>
                      )}
                      {contentItem.descriptipon && <Text>{contentItem.descriptipon}</Text>}
                      <Button>Read More</Button>
                    </View>
                  ))
                ) : (
                  <Text>Content: {item.content}</Text>
                )}
              </View>
            ))
          ) : (
            <Text>No data available</Text>
          )}
        </Swiper>
      </View>
    </ScrollView>
  );
};

export default Sport;

const styles = StyleSheet.create({
  ListContainer: {
    marginVertical: 10,
    marginHorizontal: 16,
    paddingBottom: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 16,
  },
});
