import React from "react";
import { FlatList, View } from "react-native";
import ItemCard from "../components/ItemCard";

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

function ItemListing({navigation, numOfColumns, showIcons, itemCardStyle, imageStyle, listStyle}) {
    return (
        <FlatList
          	numColumns={numOfColumns}
          	data={listings}
         	keyExtractor={(item, index) => item.id.toString()}
          	renderItem={({ item, index }) => {
              	const lastItem = index === listings.length - 1;
              	return (
              		<View style={listStyle} >
                  		<ItemCard
							cardStyle ={itemCardStyle}
							showIcons = {showIcons}
							title={item.title}
							subTitle={"$" + item.price}
							image={item.image}
							imageStyle={imageStyle}
							onPress={() => navigation.navigate("ItemDetail")}
                  		/>
              		</View>                
              	)
            }}
        />
    );
}

export default ItemListing;