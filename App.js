import Design from "./src/screens/Design";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, FontAwesome,Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Group screenOptions={{headerShown: false}}>
      <Tab.Screen name="Dashboard" component={Design} options={{
        tabBarIcon: () => <Entypo name="home" size={24} color="#094F29" />
      }} />
        <Tab.Screen name="My Budget" component={Design} options={{
        tabBarIcon: () => <FontAwesome name="money" size={24} color="#094F29" />
      }}/>
        <Tab.Screen name="Insite" component={Design} options={{
        tabBarIcon: () => <Entypo name="area-graph" size={24} color="#094F29" />
      }}/>
        <Tab.Screen name="Expances" component={Design} options={{
        tabBarIcon: () => <AntDesign name="setting" size={24} color="#094F29" />
      }}/>
        <Tab.Screen name="Settings" component={Design} options={{
        tabBarIcon: () => <AntDesign name="setting" size={24} color="#094F29" />
      }}/>
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
   //<Design/>
  );
}
