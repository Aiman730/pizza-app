import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome icons

import About from "./screens/About.js";
import Menu from "./screens/Menu.js";
import Cart from "./screens/Cart.js";
import Contact from "./screens/Contact.js";
import Checkout from './screens/Checkout.js';
import Login from './screens/login.js';
import Signup from './screens/signUp.js';
import Header from "./components/header.js";
import MenuAdmin from "./screens/MenuCRUD.js";
import { Provider } from './components/context.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigator for main screens
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Sign Up"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Sign Up") iconName = "user"; 
          else if (route.name === "About Us") iconName = "map-marker";
          else if (route.name === "Menu") iconName = "th-large";
          else if (route.name === "Cart") iconName = "shopping-cart";
          else if (route.name === "Contact") iconName = "phone";

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#b91c1c",
          height: 70,
        },
        tabBarLabelStyle: { display: "none" },
      })}
    >
       <Tab.Screen name="Sign Up" component={Signup} />
      <Tab.Screen name="About Us" component={About} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}

// Main App with Stack Navigator
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Show Tab Navigator as the default screen */}
          <Stack.Screen 
            name="Home" 
            component={TabNavigator} 
            options={{ headerShown: false }} 
          />
          
          {/* Other screens */}
          <Stack.Screen name="Sign Up" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Admin" component={MenuAdmin} />
          <Stack.Screen name="Header" component={Header} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
