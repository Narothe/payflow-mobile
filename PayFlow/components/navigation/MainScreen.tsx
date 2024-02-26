/* eslint-disable */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Payments from "./screens/ Payments.tsx";
import Home from "./screens/Home.tsx";
import Accounts from "./screens/Accounts.tsx";

const Tab = createBottomTabNavigator();

function Tabs() : React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Payments" component={Payments} />
        <Tab.Screen name="Accounts" component={Accounts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Tabs;
