import React, { useState } from "react";
import { Image, StyleSheet, Text, View ,Button} from "react-native";
import { useCart } from "../store/cartContext";

import { Ionicons } from "@expo/vector-icons";
import FlatButton from "../components/ui/FlatButton";
import { useNavigation } from "@react-navigation/native";
import { useAddressContext } from "../store/addressContext";
import { useCardContext } from "../store/cardContext";
import { useProduct } from "../store/ProductContext";


function CartScreen({ route }) {
  const {address,updateAddress} = useAddressContext();
  const {cardDetailsList} = useCardContext();
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const { item } = route.params;
  const { cartItems,addItemToCart } = useCart();
  const { cartItem,addItemToCarts } = useProduct();


  console.log(cartItems,"cart")
  const handleAddToCart = () => {
    console.log(item) // Create an item object with the provided ID
    addItemToCart(item);
    navigation.navigate('order');
  };

  return (
    <View style={{ margin: 10 ,flex:1,justifyContent:'space-around'}}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemTitle}>{item?.itemTitle}</Text>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.price}>${item.originalPrice} (-$4.00 Tax)</Text>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.countContainer}>
              <Ionicons
                disabled={count === 0}
                name="chevron-down-circle-outline"
                size={25}
                color="#8f959e"
                onPress={() => setCount(count - 1)}
              />
              <Text style={styles.countText}>{count}</Text>
              <Ionicons
                name="chevron-up-circle-outline"
                size={25}
                color="#8f959e"
                onPress={() => setCount(count + 1)}
              />
            </View>
            <View>
              <Ionicons
                name="md-trash-outline"
                size={25}
                color="#8f959e"
                onPress={() => setCount(0)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.addressContainer}>
        <Text style={{ fontSize: 17, fontWeight: "500" }}>
          Delivery Address
        </Text>
        <Ionicons
          name="chevron-forward"
          size={25}
          color="#8f959e"
          onPress={() => navigation.navigate("address")}
        />
      </View>

      <View style={styles.addressContainer1}>
         <Image source={require('../assets/images/map.png')}/>
         <View>
          <Text >{address.address}</Text>
          <Text style={styles.price}>{address.city}</Text>
         </View>
         <Ionicons name="checkmark-circle-sharp" size={24} color="#4BC76D" style={{display:'flex',flexBasis:'auto'}} />
      </View>
 
      <View style={styles.addressContainer}>
        <Text style={{ fontSize: 17, fontWeight: "500" }}>
          Payment Method
        </Text>
        <Ionicons
          name="chevron-forward"
          size={25}
          color="#8f959e"
          onPress={() => navigation.navigate("payment")}
        />
      </View>
      
      <View style={styles.addressContainer1}>
         <Image source={require('../assets/images/visa.jpg')}/>
         <View>
          <Text >{cardDetailsList[0].type}</Text>
          <Text style={styles.price}>{cardDetailsList[0].cardNumber}</Text>
         </View>
         <Ionicons name="checkmark-circle-sharp" size={24} color="#4BC76D" style={{display:'flex',flexBasis:'auto'}} />
      </View>
      <View style={{margin:15}}>
        <Text style={{fontWeight:'500',fontSize:18}}>Order Info</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
          <Text style={{color:'#8f959e'}}>Subtotal</Text>
          <Text>${item.originalPrice}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
          <Text style={{color:'#8f959e'}}>Shipping cost</Text>
          <Text>$50</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
          <Text style={{color:'#8f959e'}}>Total</Text>
          <Text>${item.originalPrice +50}</Text>
        </View>
      </View>
      <Button title={"Checkout"} onPress={handleAddToCart} />
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    height: 120,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
    marginTop:15
  },
  imageContainer: {
    width: "30%",
    padding: 8,
  },
  image: {
    width: 80,
    height: 96,
    backgroundColor: "#f5f6fa",
  },
  detailsContainer: {
    flex: 1,
    padding: 6,
  },
  itemTitle: {
    fontSize: 13,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    marginTop: 8,
    marginBottom: 8,
    color: "#8F959E",
    fontSize: 11,
  },
  countContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countText: {
    fontSize: 18,
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:12,
    gap:15
  },
  addressContainer1: {
    display: "flex",
    flexDirection: "row",
    marginTop:12,
    justifyContent: "space-evenly",
    gap:15

  },
});
