import React, { useState } from "react";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetail = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchtExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinktExpanded, setDrinkExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => {
            setBreakfastExpanded(!breakfastExpanded);
          }}
        />

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => {
            setLunchtExpanded(!lunchExpanded);
          }}
        />

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={drinktExpanded}
          onPress={() => {
            setDrinkExpanded(!drinktExpanded);
          }}
        />

        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={dinnerExpanded}
          onPress={() => {
            setDinnerExpanded(!dinnerExpanded);
          }}
        />
      </ScrollView>
    </SafeArea>
  );
};
