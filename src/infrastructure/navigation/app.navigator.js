import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreens } from "../../features/map/screens/map.screens";

const bottomTab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Setting: "md-settings",
};

const setting = () => {
  return <></>;
};

const createScreenOption = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        screenOptions={createScreenOption}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <bottomTab.Screen name="Restaurant" component={RestaurantNavigator} />
        <bottomTab.Screen name="Map" component={MapScreens} />
        <bottomTab.Screen name="Setting" component={setting} />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
};
