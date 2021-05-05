import React from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantsInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
