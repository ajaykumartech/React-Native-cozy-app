import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from '../store/auth-context';
import IconButton from '../components/ui/IconButton';
import Card from '../components/ui/Card';
import data from '../store/data.json';
function WelcomeScreen() {
  const items=data.length;
  const [fetchedData, setFetchedData] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  
  useEffect(()=>{
    axios.get('https://react-native-udemy-3ad52-default-rtdb.firebaseio.com/message.json?auth='+token)
    .then((response) =>{
      setFetchedData(response.data);
    })
  },[token])

  return (
 <>
    <View style={styles.rootContainers}>
      <View style={{padding:0}}>
    <IconButton icon="search" color='black' size={20} onPress={() => {navigation.navigate('Main')}}  />
    </View>
    <TextInput  style={{ flex: 1, marginLeft: 1,fontWeight: '400',fontSize:15}} placeholder="Search..."/>
    <View style={{padding:0}}>
    <IconButton icon="mic" color='black' size={20} onPress={() => {navigation.navigate('Main')}}  />
    </View>
    </View>
    <View style={{flexDirection:'row', width: '95%',justifyContent:'space-between', margin:10,}}>
      <View>
        <Text style={{fontWeight:'bold',fontSize:17}}>{items} Items</Text>
        <Text style={{fontSize:15,fontWeight: 400,}} >Available in stock</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <IconButton style={{margin:0,padding:0}} icon="filter" color='black' size={20} onPress={() => {navigation.navigate('Main')}}  />
      <Text>{fetchedData}</Text>
      </View>
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
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    height: 45,
    padding: 10 ,
    gap:50,
    flexShrink:0,
    margin:10,
    backgroundColor: '#F5F6FA'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
