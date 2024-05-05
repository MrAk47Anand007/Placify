import React from 'react';
import { Text, View, Button } from 'react-native';
import YourStore from './yourStore';

export const CounterComponent = () => {
  const counter = YourStore.useState(s => s.counter);
  const incrementCounter = () => {
    YourStore.update(s => {
      s.counter += 1;
    });
  };

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button onPress={incrementCounter} title="Increment" />
    </View>
  );
};

export default CounterComponent;