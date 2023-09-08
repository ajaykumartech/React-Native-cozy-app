import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import IconButton from "../components/ui/IconButton";
import ReviewCard from "../components/ui/ReviewCard";
import { useCart } from "../store/cartContext";

const { height } = Dimensions.get("window");

const ImageCard = ({ imageSource }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageSource }} style={{ width: 75, height: 90 }} resizeMode="stretch"/>
  </View>
);

const ColorIcon = ({ color }) => (
  <View style={[styles.colorIcon, { backgroundColor: color }]} />
);
function ItemDetail({ route }) {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#fff", // Set your desired background color
      },
      headerTintColor: "black", // Set the color of the back button and title text
      headerTitleStyle: {
        fontWeight: "bold", // Set title text style
      },
      headerTitle: "",
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="cart-outline"
          color={tintColor}
          size={25}
          onPress={() => {
            navigation.navigate("Main");
          }}
        />
      ),
    });
  }, []);

  const {
    id,
    title,
    image,
    originalPrice,
    reviews,
    discountedPrice,
    sizes,
    colors,
    description,
    category,
    itemTitle,
    images,
  } = route.params;
  const {addItemToCart } = useCart();

  const handleAddToCart = () => {
    const item = {
      id,
      title,
      image,
      originalPrice,
      discountedPrice,
      sizes,
      colors,
      description,
      category,
      itemTitle,
      images
    };
    addItemToCart(item);
    navigation.navigate('cart', { item }); // Pass the item's ID to the cart screen
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Text style={{ color: "#8F959E" }}>
            {category} {itemTitle}
          </Text>
          <Text style={{ color: "#8F959E" }}>Price</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>${discountedPrice}</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <FlatList
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ImageCard imageSource={item} />}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", width: "95%" }}>
            <View
              style={{
                flexDirection: "row",
                width: "40%",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Size</Text>
              <Text style={{ color: "#8F959E" }}>Size Guide</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "60%",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Colors</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "95%" }}>
          <View style={{ width: "75%" }}>
            <FlatList
              data={sizes}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 40,
                    height: 39,
                    gap: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 5,
                    backgroundColor: "#f5f6fa",
                    borderRadius: 7,
                    flexDirection: "column",
                  }}
                >
                  <Text
                    style={{
                      padding: 3,
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={{ flexDirection: "row", width: "25%" }}>
            <View style={styles.containerc}>
              {colors &&
                colors.map((color, index) => (
                  <ColorIcon key={index} color={color} />
                ))}
            </View>
          </View>
        </View>
        <Text style={styles.title}>Description</Text>
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#8F959E" }}>
          {description}{" "}
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#181823" }}>
            Read More...
          </Text>
        </Text>
        {/* Reviews starts */}
        <ReviewCard data={reviews} id={id} />
        {/* Reviews Ends */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>Total Price</Text>
            <Text style={{ fontSize: 9, color: "#8f959e" }}>with VAT,GST</Text>
          </View>
          <View>
            <Text>${discountedPrice + 100}</Text>
          </View>
        </View>
        <Button
          style={{ width: "60%" }}
          title="Add to Cart"
          onPress={handleAddToCart}
        />
      </View>
    </ScrollView>
  );
}

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    margin: 8,
    height: height * 0.6, // 50% of screen height
  },
  textContainer: {
    flex: 1, // Takes the remaining space
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  discount: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
  },
  card: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    border: 1,
    shadowColor: "gray",
  },
  containerc: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 1,
  },
  colorIcon: {
    width: 18.69,
    height: 18,
    borderRadius: 25, // To make it a circle
    marginHorizontal: 5,
  },
});
