import React, { useContext } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { useProduct } from '../store/ProductContext'
import ReviewCard from '../components/ui/ReviewCard';
import { Ionicons } from '@expo/vector-icons';
import Button from "../components/ui/Button";
import { Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import datas from '../store/data.json';

const STAR_SIZE = 20;
const ProductReview = ({ review }) => {
   const renderStars = () => {
      const rating = Math.floor(review.rating); // Assuming rating is between 0 and 5
      const stars = [];
  
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(<Ionicons key={i} name="star" size={STAR_SIZE} color="gold" />);
        } else {
          stars.push(<Ionicons key={i} name="star-outline" size={STAR_SIZE} color="gold" />);
        }
      }
  
      return stars;
    };
   return(
   <View style={{margin:10}}>
   <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15,width:390,height:55 }}>
     <View style={{ width: '70%', flexDirection: 'row' }}>
       <Image style={{ width: 40, height: 40, borderRadius: 15 }} source={{ uri: review.reviewerImage }} resizeMode='center' />
       <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{review.name}</Text>
     </View>
     <View style={{ width: '30%', }}>
       <Text>{review.rating} rating</Text>
     <View style={{display:'flex', flexDirection:'row'}}>
     {renderStars()}
     </View>
     </View>
     
   </View>
   <Text style={{ fontSize: 15, fontWeight: '400', color: '#8F959E' }}>{review.comment}</Text>
   </View>
   )
};

function ReviewScreen({id}) {

   const productData = useProduct();
   const navigation = useNavigation();
   const renderReviewItem = ({ item }) => <ProductReview review={item} />;
   const addReview =() =>{
    navigation.navigate('addreview');   
   }
   console.log(id)
   const products = productData.cartItem.products[0];
   console.log(productData.cartItem.products,"hfugufygdsfbf")
   return(
    <View style={{margin:10}}>
      <View style={{flexDirection:'row',display:'flex',justifyContent:"space-between"}}>
         <View>
            <Text style={{fontWeight:"500"}}>{ products.reviews.length} Reviews</Text>
             <View style={{display:'flex', flexDirection:'row'}}>
              </View>
         </View>
         <View>
           <Button color='black' tintColor='white' onPress={addReview}><Feather name="edit" size={16} color="white" />{' '}Add Review</Button>
            </View>
      </View>
       <FlatList
        data={products.reviews}
        renderItem={renderReviewItem}
        keyExtractor={(item, index) => index.toString()}
      />
     
 </View>
  )
}

export default ReviewScreen