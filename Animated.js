import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

const AnimatedComponent = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.ease,
    }).start();

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 1,
    }).start();
  }, [fadeAnim, slideAnim, scaleAnim]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
        }}
      >
        <Text>Animated Component</Text>
      </Animated.View>
    </View>
  );
};

export default AnimatedComponent;
