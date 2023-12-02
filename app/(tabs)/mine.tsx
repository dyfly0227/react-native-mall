import { Text } from "react-native";
import {Tab} from "@rneui/base";
import {Link} from "expo-router";
export default function TabTwoScreen() {
  return (
      <>
        <Tab value={1} dense>
          <Tab.Item>Tab1</Tab.Item>
          <Tab.Item>Tab2</Tab.Item>
        </Tab>
        <Link href={'/login/login'}>Login</Link>
      </>
  );

}
