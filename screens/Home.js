// HomeScreen.js
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../store/auth-context";
import IconButton from "../components/ui/IconButton";
import Card from "../components/ui/Card";
import data from "../store/data.json";
import { useNavigation } from "@react-navigation/native";

const image = [
  require("../assets/images/newarrivals.jpg"),
  require("../assets/images/men.jpg"),
  require("../assets/images/women.jpg"),
  require("../assets/images/kid.jpg"),
];
const brands = [
  { image: require("../assets/images/Adidas.jpg"), description: "Adidas" },
  { image: require("../assets/images/Nike.jpg"), description: "Nike" },
  { image: require("../assets/images/fila.jpg"), description: "Fila" },
  { image: require("../assets/images/puma.jpg"), description: "Puma" },
];
const ImageCard = ({ imageSource }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.image} />
  </View>
);

const BrandCard = ({ brand }) => (
  <View style={styles.brandCard}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.bimageContainer}>
        <View style={{width:40,height:40,backgroundColor:'#ffafa'}}>
        <Image source={brand.image} style={styles.brandImage} />
        </View> 
        <Text style={styles.brandText}>{brand.description}</Text>
      </View>
    </View>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const [fetchedData,setFetchedData] =useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://react-native-udemy-3ad52-default-rtdb.firebaseio.com/message.json?auth=" +
          token
        );
        setFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    getData();
  }, [token]);
  

  useEffect(() => {
    console.log(fetchedData); // Log fetchedData when it updates
  }, [fetchedData]);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 24,margin:10 }}>Hello</Text>
        </View>
        <View style={styles.rootContainers}>
          <View style={{ padding: 0 }}>
            <IconButton
              icon="search"
              color="black"
              size={20}
              onPress={() => {
                navigation.navigate("Main");
              }}
            />
          </View>
          <TextInput
            style={{ flex: 1, marginLeft: 1, fontWeight: "400", fontSize: 15 }}
            placeholder="Search..."
          />
          <View style={{ padding: 0 }}>
            <IconButton
              icon="mic"
              color="black"
              size={20}
              onPress={() => {
                navigation.navigate("Main");
              }}
            />
          </View>
        </View>
      </View>

      {/* Carousel of category */}
      <View style={styles.container}>
        <FlatList
          data={image}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ImageCard imageSource={item} />}
        />
      </View>
      {/* Carousel of category Ends */}

      {/* Carousel of brands */}
      <View
        style={{
          flexDirection: "row",
          width: "95%",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <Text style={{fontWeight:'500',fontSize:17}}>Choose Brand</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("welcome");
          }}
        >
          <Text style={{ marginRight: 20, color: "#8F959E" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={brands}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <BrandCard brand={item} />}
        />
      </View>
      {/* Carousel of brands Ends*/}

      <View
        style={{
          flexDirection: "row",
          width: "95%",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <Text style={{fontWeight:'500',fontSize:17}}>New Arrival</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("welcome");
          }}
        >
          <Text style={{ marginRight: 20, color: "#8F959E" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data} // Use the imported JSON data
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              title={item.title}
              image={item.image} // Import images using require
              originalPrice={item.originalPrice}
              discountedPrice={item.discountedPrice}
              discount={item.discount}
              description={item.description}
              category={item.category}
              itemTitle={item.itemTitle}
              images={item.images}
              sizes={item.sizes}
              colors={item.colors}
              reviews={item.reviews}
            />
          )}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainers: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    height: 45,
    padding: 10,
    gap: 20,
    flexShrink: 0,
    margin: 10,
    backgroundColor: "#F5F6FA",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  container: {
    paddingTop: 5,
  },
  card: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    border: 1,
    shadowColor: "gray",
  },
  image: {
    width: 86,
    height: 86,
    resizeMode: "cover",
  },
  brandCard: {
    width: 115,
    height: 50,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    margin: 10,
  },
  brandImage: {
    width: 25,
    height: 17,
    marginTop:17,
    marginLeft:12,
    marginRight:18,

  },
  brandText: {
    width: 49,
    height: 16,
    marginTop: 17,
    marginBottom: 16,
    marginLeft:12,
  },
  bimageContainer : {
    flexDirection:'row',

  }
});
