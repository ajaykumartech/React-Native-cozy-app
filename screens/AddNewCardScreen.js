import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "../components/Auth/Input";
import { useCardContext } from "../store/cardContext";
import { useNavigation } from "@react-navigation/native";

function AddNewCardScreen() {
  const navigation = useNavigation();
  const { cardDetailsList, addCard, removeCard } = useCardContext();
  const paymentMethods = [
    { id: 'master', image: require("../assets/images/master.png") },
    { id: 'paypal', image: require("../assets/images/paypal.png") },
    { id: 'American Express', image: require("../assets/images/ameri.png") },
  ];
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [type,setType] = useState("");

  const addCardHandler = () => {
    const newCard = {
      cardNumber,
      cardHolderName,
      expiry,
      cvv,
      type
      // Other card details...
    };
    addCard(newCard);
    // Reset input states
    setCardNumber("");
    setCardHolderName("");
    setExpiry("");
    setCvv("");
    setType("");
    navigation.navigate("payment");
    // Reset other input states...
  };

  const handleMethodPress = (method) => {
    setType(method);
  };

  return (
    <View style={{ margin: 15, flex: 1, justifyContent: "flex-start" }}>
       <View style={styles.container}>
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          onPress={() => handleMethodPress(method.id)}
          style={[
            styles.imageLayout,
            type === method.id && styles.selectedImage
          ]}
        >
          <Image source={method.image} />
        </TouchableOpacity>
      ))}
    </View>
      <Input value={cardHolderName} label={"Card Owner"} placeholder={"Enter your Name"}  onUpdateValue={setCardHolderName} />
      <Input value={cardNumber} label={"Card Number"} placeholder={"Enter Card Number"}  onUpdateValue={setCardNumber}/>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            rowGap: 5,
            margin: 5,
          }}
        >
          <Input value={expiry} placeholder={"EXP"} label={"EXP"}  onUpdateValue={setExpiry} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            rowGap: 5,
            margin: 5,
          }}
        >
          <Input value={cvv} placeholder={"CVV"} label={"CVV"} onUpdateValue={setCvv}/>
        </View>
      </View>
      <Button title="Add Card" onPress={addCardHandler} />
    </View>
  );
}

export default AddNewCardScreen;

const styles = StyleSheet.create({
 
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  imageLayout: {
    display: "flex",
    width: 100,
    height: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    border:2,
    borderRadius:12,
    borderColor: '#ccc',
    backgroundColor:'#f5f6fa'
  },
  selectedImage: {
    borderColor: 'red',
    backgroundColor:'#ffeee3'
  },
});
