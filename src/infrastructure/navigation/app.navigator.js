import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreens } from "../../features/map/screens/map.screens";

import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
const bottomTab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Setting: "md-settings",
};

const createScreenOption = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <bottomTab.Navigator
            screenOptions={createScreenOption}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <bottomTab.Screen
              name="Restaurant"
              component={RestaurantNavigator}
            />
            <bottomTab.Screen name="Map" component={MapScreens} />
            <bottomTab.Screen name="Setting" component={SettingsNavigator} />
          </bottomTab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
