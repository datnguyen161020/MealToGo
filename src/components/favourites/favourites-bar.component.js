import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spaces/space.component";
import { CompactRestaurantInfo } from "../restaurants/compact-restaurant-info";
import { Text } from "../typrography/text.component";

const FavouriterWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriterWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantDetail", restaurant);
                }}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriterWrapper>
  );
};
