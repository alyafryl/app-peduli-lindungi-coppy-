import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  Imunisasi,
  CovidTestScreen,
  Ehac
} from "./pages";

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
<Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Imunisasi"//jjjjjjj
        component={Imunisasi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CovidTestScreen"
        component={CovidTestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ehac"
        component={Ehac}
        options={{ headerShown: false }}
      />
<Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
  );
};