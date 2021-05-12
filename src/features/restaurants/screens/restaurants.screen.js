import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spaces/space.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { error, isLoading, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animation={true} color={Colors.red400} size={50} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantsList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
