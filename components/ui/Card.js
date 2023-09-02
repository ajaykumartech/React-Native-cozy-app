import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../store/cartContext";

function Card({ id,title, image, originalPrice, discountedPrice,reviews, discount, description,category, itemTitle, images,sizes,colors }) {
    const [isLiked, setIsLiked] = useState(false);
    const {addItemToCart,  } =useCart();
    const navigation = useNavigation();
    const toggleLike = () => {
        setIsLiked(!isLiked);
      };

      const navigateToDetail = () => {
        navigation.navigate('ItemDetail', { id,title, image, originalPrice, reviews, sizes, colors, discountedPrice, discount, description,category, itemTitle, images });
      };

    return (
        <TouchableOpacity style={styles.card} onPress={navigateToDetail}>
       
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <TouchableOpacity
          onPress={toggleLike}
          style={styles.likeIconContainer}
        >
          <Image
            source={require('../../assets/images/Heart.png')} // Replace with your like icon source
            style={[
                styles.likeIcon,
                isLiked ? styles.likedIcon : null,
              ]}
          />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>${discountedPrice}</Text>{' '}
          <Text style={styles.originalPrice}>${originalPrice}</Text> 
          {discount && <Text style={styles.discount}>{discount}% off</Text>}
        </Text>
      </TouchableOpacity>
      );
}

export default Card;

const styles = StyleSheet.create({
    card: {
      width: '48%', // Adjust the width as needed for your grid
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      elevation: 3,
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: 220,
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    likeIcon: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 24,
      height: 24,
    },
    title: {
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 5,
      marginTop: 2,
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    originalPrice: {
      textDecorationLine: 'line-through',
      color: '#999',
    },
    discountedPrice: {
      color: '#333',
      fontWeight: 'bold',
    },
    discount: {
      color: 'green',
      fontWeight: 'bold',
    },
    likeIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 24,
        height: 24,
      },
      likeIcon: {
        width: '100%',
        height: '100%',
      },
      likedIcon: {
        tintColor: 'red', // Change the color when the item is liked
      },
  });