import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TouchableHighlight, Image, Text } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { Feather } from '@expo/vector-icons';
import ItemListing from "../components/ItemListing";
import Following from "../components/Following";

function HomeScreen({navigation}) {
  const [highlightExplore, setHighlightExlore] = useState(true);
  const [highlightFollowing, sethighlightFollowing] = useState(false);
  const exploreClicked = () => {
      setHighlightExlore(true);
      sethighlightFollowing(false);
  };
  const followingClicked = () => {
      sethighlightFollowing(true);
      setHighlightExlore(false);
  };  
  return (
    
    <Screen>
      <View style={styles.headerStyle}>
        <Image style={[styles.logo]} source={require("../assets/AppLogoBlack.png")} />
        <View style={styles.headerFilter}>
          <TouchableOpacity onPress={exploreClicked}>
            {
            highlightExplore ?
            <AppText style={styles.headerFilterStyleHighlight}>Exlpore</AppText> :
            <AppText style={styles.headerFilterStyle}>Exlpore</AppText>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={followingClicked}>
            {
            highlightFollowing ?
            <AppText style={styles.headerFilterStyleHighlight}>Following</AppText> :
            <AppText style={styles.headerFilterStyle}>Following</AppText> 
            }
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Feather name="search" size={22} color={colors.primaryText} />
        </TouchableOpacity>
      </View>
      {
        highlightExplore && <ItemListing navigation={navigation}/>
      }
      {
        highlightFollowing && <Following navigation={navigation}/>
      }
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 2,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
    marginLeft: 10,
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: 1,
    marginRight: 10,
  },
  headerFilter: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
    flex: 0.65
  },
  headerFilterStyle: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.shade
  },
  headerFilterStyleHighlight: {
    fontWeight: "bold",
    fontSize: 16,
  }
});

export default HomeScreen;
