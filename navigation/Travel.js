import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import List from "../screens/List";
import Article from "../screens/Article";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/Welcome";
import Profile from "../screens/Profile";
import Recommended from "../screens/Recommended";
import Bookmarks from "../screens/Bookmarks";

import { auth } from "../firebase";

const Stack = createNativeStackNavigator();

const Travel = () => {
  const [currUser, setCurrUser] = useState(null);
  // const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrUser(user);
      } else {
        setCurrUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <NavigationContainer>
      {!currUser ? (
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen
            name="List"
            component={List}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Article"
            component={Article}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Bookmarks"
            component={Bookmarks}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Recommended"
            component={Recommended}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Travel;
