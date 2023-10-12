import React from 'react';
import { Text,View,Button,Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './Todo';
import ApiCall from './ApiCall';

 
const Stack = createNativeStackNavigator();

const App = () =>{
 

  return (
<NavigationContainer>
  <Stack.Navigator>
<Stack.Screen name='Home' component={Home} />
<Stack.Screen name='Todo' component={Todo} />
<Stack.Screen name='ApiCall' component={ApiCall} />

  </Stack.Navigator>

</NavigationContainer>
  )
};


const Home = (props) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title='Go to Todo list Page' onPress={()=> props.navigation.navigate('Todo')} />
      <Button title='Go to ApiCll Page' onPress={()=> props.navigation.navigate('ApiCall')} />

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1',
        }}
      />
      <Text style={styles.text}>Hello,Harsh React Native!</Text>
      <View style={styles.subContainer}>
        <Text style={styles.subText}>This is a sub-component.</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Box 3</Text>
      </View>




    </View>
  
    )
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  subText: {
    fontSize: 16,
    color: 'black',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});


export default App;
