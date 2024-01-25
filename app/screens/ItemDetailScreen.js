import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import ItemCard from "../components/ItemCard";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import UserCard from "../components/UserCard";
import { Feather  } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export default function ItemDetailScreen() {
    const [qtyCounter, setQtyCounter] = useState(0);
    const increaseQtyCount = () => {
        console.log(qtyCounter);
        setQtyCounter(qtyCounter+1);
    };     
    const decreaseQtyCount = () => {
        console.log(qtyCounter);
        if (qtyCounter>0){
            setQtyCounter(qtyCounter-1);
        }
    };  
    return (
        <Screen style={styles.screen}>
        <ScrollView>
            <ItemCard
                title = "Title"
                image = {require("../assets/couch.jpg")}
                subTitle = "$999999999999"
                imageStyle = {styles.imageStyle}
            />
            <View style={styles.qtyButtonRow}>
                <View style={styles.quantity}>
                    <AppText style={styles.quantityLabel}>Qty</AppText> 
                </View>
                <AppButton title="-" 
                        onPress={()=>decreaseQtyCount()} 
                        buttonStyle={styles.button}
                        buttonTextStyle={styles.buttonText}/>                  
                <View style={styles.quantity}>
                    <AppText style={styles.quantityLabel}>{qtyCounter}</AppText>
                </View>
                <AppButton title="+" 
                        onPress={()=>increaseQtyCount()} 
                        buttonStyle={styles.button}
                        buttonTextStyle={styles.buttonText}/>    
            </View>
            <View style={styles.addToCartContainerStyle}>
                <AppButton title="Add to Cart" buttonStyle={styles.addToCartStyle} onPress={()=>console.log("Button Pressed")}/>
            </View>
            <View >
                <View style={styles.userContainer}>
                    <UserCard title="samantha123" subTitle="@samantha padukone" image = {require("../assets/mosh.jpg")}></UserCard>
                    <AppButton title="Message" 
                        onPress={()=>console.log("Message button pressed")} 
                        buttonStyle={styles.messageStyle}
                        />                        
                </View>                    
                <AppText style={styles.productDetailHeading}>Product Details</AppText> 
                <AppText style={styles.productDetail}>
                    Test Description
                    Test Description
                    Test Description
                    Test Description
                    Test Description
                </AppText>
            </View>
            </ScrollView>            
        </Screen>
    );
  }
  

  const styles = StyleSheet.create({
    button: {
      width: 30,
      height: 30,
      borderRadius: 0,
      padding: 5
    },
    imageStyle:{
        height: 400,
    },
    buttonText:{
        fontSize: 15,
    },
    userContainer:{
        flexDirection: 'row',
        alignItems:"center",
        justifyContent: "space-between"
    },
    messageStyle:{
        height: 30,
        width:80
    },
    addToCartStyle:{
        height: 40,
        width:"100%"
    },
    quantityLabel:{
        fontWeight: "bold",
        padding: 10,
    },
    productDetailHeading:{
        fontWeight: "bold",
        padding: 10,
    },
    productDetail:{
        padding: 10,
        paddingBottom: 30
    },        
    quantity:{
        justifyContent: "center",
        alignItems: "center",        
    },
    qtyButtonRow:{
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 5,
        alignItems:"center"
    },
    screen: {
        padding: 2,
    },
    addToCartContainerStyle:{
        marginBottom:15,

    }
})