import React, { useState } from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import Input from "../components/Auth/Input";
import { useNavigation } from "@react-navigation/native";
import { useAddressContext } from "../store/addressContext";

function AddressScreen() {
  
  
  const navigation =useNavigation();

  const {address, updateAddress} = useAddressContext();
  const [isPrimary, setIsPrimary] = useState(address.address.isPrimary);

  const handleTogglePrimary = () => {
    // Toggle the isPrimary state
    setIsPrimary(!isPrimary);
  };

  const updateInputHandler = (inputType, enteredValue) => {
    const newAddress = { ...address, [inputType]: enteredValue };
    updateAddress(newAddress);
  };

  const gotoCartScreen =() =>{
     console.log("first")
  }

  return (
    <View style={styles.container}>
        <View style={styles.content}>
      <Input
        value={address.name}
        label={'Name'}
        placeholder={"Enter your Name"}
        onUpdateValue={updateInputHandler.bind(this,'name')}
      />
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
          <Input
            value={address.country}
            placeholder={"Enter country"}
            label={"country"}
            onUpdateValue={updateInputHandler.bind(this,'country')}
          />
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
          <Input value={address.city} placeholder={"Enter city"} label={"city"} onUpdateValue={updateInputHandler.bind(this,'city')}/>
        </View>

      </View>
      <Input value={address.mobile} placeholder={'Enter phone no'} label={'Phone Number'} onUpdateValue={updateInputHandler.bind(this,'mobile')}/>
      <Input value={address.address} placeholder={'Address'} label={'Address'} onUpdateValue={updateInputHandler.bind(this,'address')}/>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:12}}>
        <Text>Save as Primary Addresss</Text>
        <Switch
          value={isPrimary}
          onValueChange={handleTogglePrimary}
          thumbColor={isPrimary ? 'green' : 'white'}
        />
      </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save Address" onPress={gotoCartScreen} />
      </View>
    </View>
  );
}

export default AddressScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between', // Aligns content vertically
    },
    content: {
      flex: 1,
      padding: 16,
    },
    buttonContainer: {
      padding: 56,
    },
  });