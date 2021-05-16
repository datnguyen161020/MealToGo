import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { Text } from "../typrography/text.component";
import { WebView } from "react-native-webview";

const MyView = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const MyImage = styled.Image`
  border-radius: 10px;
  height: 80px;
  width: 120px;
`;
const MyWebView = styled(WebView)`
  border-radius: 10px;
  height: 80px;
  width: 120px;
`;
const platform = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = platform ? MyWebView : MyImage;
  return (
    <MyView>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variants="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </MyView>
  );
};
