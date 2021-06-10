import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurants-info-card.component";
import { TouchableOpacity } from "react-native";
import { RestaurantsList } from "../../restaurants/components/restaurants-list.component";
import { Spacer } from "../../../components/spaces/space.component";
import { Text } from "../../../components/typrography/text.component";
import styled from "styled-components/native";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreens = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <RestaurantsList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetail", { restaurant: item });
              }}
            >
              <Spacer position="bottom" size="large">
                <RestaurantsInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text variant="label">No favourites yet</Text>
    </NoFavouritesArea>
  );
};
