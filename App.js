import React from 'react';
import { Text,View,Button,Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './Todo';
import ApiCall from './ApiCall';
import Navigatetab from './Navigatetab';
import News from './News';
import Newsh from './Newscategory/Newsh';
import Sport from './Newscategory/Sport';
import Technolgy from './Newscategory/Technolgy';
import RegistrationForm from './RegistrationForm';
import CounterApp from './CounterApp';
import Themeas from './Themeas'; 
import Latitude from './Latitude';
import Camera from './Camera';
import EntryDetailsScreen from './EntryDetailsScreen';
import EntryListScreen from './EntryListScreen';
// import Animated from 'react-native-reanimated';
import AnimatedComponent from './Animated';
// import Camera from './Camera ';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import HomeScreen from './HomeScreen';
import PropertyListScreen from './PropertyListScreen';
import PropertyDetailsScreen from './PropertyDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () =>{
 

  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Registration">
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Registration" component={RegistrationScreen} />
<Stack.Screen name="PropertyList" component={PropertyListScreen} />
<Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
<Stack.Screen name="HomeScreen" component={HomeScreen} />
     
<Stack.Screen name='Home' component={Home} />
<Stack.Screen name='Todo' component={Todo} />
<Stack.Screen name='ApiCall' component={ApiCall} />
<Stack.Screen name='Navigatetab' component={Navigatetab} />
<Stack.Screen name='News' component={News} />
<Stack.Screen name='Newsh' component={Newsh} />
<Stack.Screen name='Sport' component={Sport} />
<Stack.Screen name='Technolgy' component={Technolgy} />
<Stack.Screen name='RegistrationForm' component={RegistrationForm} />
<Stack.Screen name='CounterApp' component={CounterApp} />
<Stack.Screen name='Themeas' component={Themeas} />
<Stack.Screen name='Latitude' component={Latitude} />
<Stack.Screen name='Camera' component={Camera} />

<Stack.Screen name='EntryDetailsScreen' component={EntryDetailsScreen} />
<Stack.Screen name='EntryListScreen' component={EntryListScreen} />
<Stack.Screen name='AnimatedComponent' component={AnimatedComponent} />
{/* <Stack.Screen name='Camera' component={Camera} /> */}
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
      <Button title='Go to Navigatetab Page' onPress={()=> props.navigation.navigate('Navigatetab')} />
      <Button title='Go to News Page' onPress={()=> props.navigation.navigate('News')} />
      <Button title='Go to Registration Page' onPress={()=> props.navigation.navigate('RegistrationForm')} />
      <Button title='Go to CounterApp Page' onPress={()=> props.navigation.navigate('CounterApp')} />
      <Button title='Go to Themejs Page' onPress={()=> props.navigation.navigate('Themeas')} />
      <Button title='Go to Latitude Page' onPress={()=> props.navigation.navigate('Latitude')} />
      <Button title='Go to EntryDetailsScreen Page' onPress={()=> props.navigation.navigate('EntryDetailsScreen')} />
      <Button title='Go to EntryListScreen Page' onPress={()=> props.navigation.navigate('EntryListScreen')} />
      <Button title='Go to AnimatedComponent Page' onPress={()=> props.navigation.navigate('AnimatedComponent')} />
      <Button title='Go to AnimatedComponent Page' onPress={()=> props.navigation.navigate('AnimatedComponent')} />
      <Button title='Go to HomeScreen' onPress={()=> props.navigation.navigate('HomeScreen')} />
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
