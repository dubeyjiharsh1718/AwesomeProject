import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const CounterApp = () => {
 
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', margin: 20 }}>
        Count: {state.count}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          title="Increment"
          onPress={() => dispatch({ type: 'INCREMENT' })}
        />
        <Button
          title="Decrement"
          onPress={() => dispatch({ type: 'DECREMENT' })}
        />
        <Button title="Reset" onPress={() => dispatch({ type: 'RESET' })} />
      </View>
    </View>
  );
};

export default CounterApp;
