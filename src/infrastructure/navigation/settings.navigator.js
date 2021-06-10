import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingScreens } from "../../features/settings/screens/setting.screens";
import { FavouritesScreens } from "../../features/settings/screens/favourites.screens";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ navigation, route }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={SettingScreens}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreens} />
    </SettingsStack.Navigator>
  );
};
