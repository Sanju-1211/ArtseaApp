import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ItemListing from "../components/ItemListing";

const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 3,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 4,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 5,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 6,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 7,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 8,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },    
];

function CartScreen({navigation}) {
    return (
        <Screen>
			<AppText style={styles.cartHeader}>Cart</AppText>
			<AppButton title="Proceed To Buy" 
				onPress={()=>console.log("Message button pressed")} 
				buttonStyle={styles.buyButton}
			/>  
          	<View style={{marginBottom:200, flexDirection:"row"}}>
				<ItemListing 
                    navigation={navigation}
					numOfColumns={1} 
					showIcons={false} 
					imageStyle={styles.itemImageStyle} 
					itemCardStyle={styles.cardStyle}
				/>
			</View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    cartHeader:{
		fontSize: 20,
		textAlign:"center",
		marginTop: 10,
		marginBottom: 10
    },
    cardStyle:{
		flexDirection:"row",
		marginBottom: 2
    },
    buyButton:{
		marginRight: 5,
		height: 40,
		marginBottom:10,
		padding: 8,
	},  
	itemImageStyle: {
		width: 100,
		height: 100,
	},

});
export default CartScreen;