import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import GetSvg from '../../components/GetSvg';
import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => <GetSvg name='home' color={color} />,
        }}
      />
      <Tabs.Screen
        name="cloud"
        options={{
          title: '云店铺',
          tabBarIcon: ({ color }) => <GetSvg name='cloud' color={color} />,
        }}
      />
      <Tabs.Screen
        name="plat"
        options={{
          title: '平台易货',
          tabBarIcon: ({ color }) => <GetSvg name='plat' color={color} />,
        }}
      />
      <Tabs.Screen
        name="underline"
        options={{
          title: '线下门店',
          tabBarIcon: ({ color }) => <GetSvg name='underline' color={color} />,
        }}
      />
      <Tabs.Screen
        name="mine"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <GetSvg name='mine' color={color} />,
        }}
      />
    </Tabs>
  );
}
