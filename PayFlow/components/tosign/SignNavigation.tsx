/* eslint-disable */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import PasswordForm from "./PasswordForm.tsx";
import SignResult from "./SignResult.tsx";

const Stack = createNativeStackNavigator();
const SignNavigation = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordForm"
          component={PasswordForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignResult"
          component={SignResult}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default SignNavigation
