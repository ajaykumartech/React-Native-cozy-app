import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "../components/Auth/Input";
import { RangeSlider, Slider } from "@react-native-assets/slider";
import { useNavigation } from "@react-navigation/native";

function AddReviewScreen() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(2);
  const navigation = useNavigation();

  const handleRatingChange = (value) => {
    setRating(value);
  };

  function updateInputHandler(e) {
    setName(e);
  }
  function submitComment() {
 navigation.navigate('review');
  }
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Name</Text>
      <Input
        value={name}
        onUpdateValue={updateInputHandler}
        placeholder="Enter your Name"
      />
      <Text>{name}</Text>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>
        How was your experience?
      </Text>
      <View
        style={{
          backgroundColor: "#f2f2f2",
        }}
      >
        <TextInput
          editable
          multiline
          numberOfLines={15}
          maxLength={1200}
          placeholder="Describe your experience?"
        />
      </View>

      <View style={{marginTop:10}}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Star</Text>
      <View style={styles.appContainer}>
        <View
          style={{ justifyContent: "center", alignItems: "center", padding: 2 }}
        >
          <Text>0.1</Text>
        </View>
        <Slider
          style={styles.slider}
          value={rating}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor="grey"
          maximumTrackTintColor="#F5F6FA"
          step={0}
          onValueChange={handleRatingChange}
        />
        <Text>5.0</Text>
      </View>
      </View>
      <View style={{justifyContent:'center',width:'100%',alignItems:'center',marginTop:100,padding:10}}>
      <Button onPress={submitComment} title="Submit Review" style={{backgroundColor:"#007bff",gap:10,padding:10,borderRadius:10}}/>
      </View>
    </View>
  );
}

export default AddReviewScreen;

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  slider: {
    width: "80%",
    backgroundColor: "white",
  },
});
