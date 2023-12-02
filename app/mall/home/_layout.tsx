import { Slot } from 'expo-router';
import { View } from 'react-native';
import FloatMenu from '../components/FloatMenu';
export default function Layout() {
  return (
    <View>
      <FloatMenu/>
      <Slot />
    </View>
  );
}
