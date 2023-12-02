import { useRef } from 'react';
import { Text, View, StyleSheet, Animated, PanResponder } from 'react-native';
const styles = StyleSheet.create({
  moveBtn: {
    position: 'fixed',
    zIndex: 99,
    right: 16,
    bottom: 30,
    width: 54,
    height: 54,
    backgroundColor: '#000',
  },
});

const FloatMenu = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: pan.y }]),
    }),
  ).current;
  return (
    <Animated.View
      style={[
        styles.moveBtn,
        {
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <View></View>
    </Animated.View>
  );
};

export default FloatMenu;
