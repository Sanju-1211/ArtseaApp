import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Entypo  } from '@expo/vector-icons';
import { TouchableHighlight } from "react-native-gesture-handler";
import AppText from "./AppText";
import colors from "../config/colors";

function ItemCard({ title, subTitle, image, imageStyle, onPress }) {
  const [itemLiked,setItemLiked] = useState(false);

  const clickedHeart = () => {
    if (itemLiked == true) {
      setItemLiked(false);
    }

    else {
      setItemLiked(true);
    }
  };

  return (
    <View style={styles.card}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.imageBorder}><Image style={[styles.image,imageStyle]} source={image} /></View>
      </TouchableHighlight>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.iconContainer}>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
          <View style = {styles.iconsRow}>
            {itemLiked ? 
            <Entypo name="heart" size={24} color="#E34290" style={styles.icon} onPress={()=>clickedHeart()}/>:
            <Entypo name="heart-outlined" size={24} color="white" style={styles.icon} onPress={()=>clickedHeart()} />
            }
            <Entypo name="paper-plane" size={24} color="white" style={styles.icon}/>
          </View>        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondryBackground,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eed7c5",
    borderRadius:10
  },

  iconsRow:{
    flexDirection: "row"
  },
  imageBorder:{
    //borderBottomWidth: 1,
    //borderColor:"#eed7c5",
  },
  image: {
    width: "100%",
    height: 200,
  },
  icon:{
    paddingRight: 10,
  },
  iconContainer:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subTitle: {
    color: colors.primaryText,
    fontSize: 13
  },
  title: {
    color: colors.secondaryText,
    marginBottom: 7,
    
  },
});

export default ItemCard;
