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

function ItemListing({navigation}) {
    return (

          <FlatList
          numColumns={2}
          data={listings}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item, index }) => {
              const lastItem = index === listings.length - 1;
              return (
              <View style={{ flex: 1, padding: 2, maxWidth: lastItem ? '50%' : '100%' }} >
                  <ItemCard
                  title={item.title}
                  subTitle={"$" + item.price}
                  image={item.image}
                  onPress={() => navigation.navigate("ItemDetail")}
                  />
              </View>                
              )
            }
          }
          />

    );
}

export default ItemListing;