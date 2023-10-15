import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import Swiper from "react-native-swiper"; 

const Technolgy = () => {
    const [data, setdata] = useState([]);
  
    const getAPIData = async () => {
      const url = "http://10.0.2.2:3000/news";
      let result = await fetch(url);
      result = await result.json();
      setdata(result);
    };
  
    useEffect(() => {
      getAPIData();
    }, []);
  
    return (
      <ScrollView>
        <View>
          <Swiper loop={false} showsPagination={true}>
            {data.length ? (
              data.map((item) => (
                <View key={item.id}>
                  {Array.isArray(item.technology) ? (
                    item.technology.map((technologyItem) => (
                      <View key={technologyItem.id} style={styles.ListContainer}>
                        {technologyItem.img && (
                          <Image
                            source={{ uri: technologyItem.img }}
                            style={{width: '100%', height: 250 }}
                          />
                        )}
                        {technologyItem.name && (
                          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                            {technologyItem.name}
                          </Text>
                        )}
                        {technologyItem.descriptipon && (
                          <Text>{technologyItem.descriptipon}</Text>
                        )}
                        <Button>Read More</Button>
                      </View>
                    ))
                  ) : (
                    <Text>technology: {item.technology}</Text>
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
  
  export default Technolgy;
  
  const styles = StyleSheet.create({
    ListContainer: {
      marginVertical: 10,
      marginHorizontal: 16,
      paddingBottom: 32,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      elevation: 5,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      padding: 16,
    },
  });
  