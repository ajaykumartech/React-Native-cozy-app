import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

function ReviewCard({data,id}) {
  
  const navigation =useNavigation();

  return (
   <View style={{marginBottom:10}}>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <Text style={{fontWeight:'500',fontSize:17}}>Reviews</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("review",data,id);
          }}
        >
          <Text style={{ marginRight: 20, color: "#8F959E" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-between',marginBottom:15}}>
        <View style={{width:'70%',flexDirection:'row'}}>
            {data && <Image style={{width:40,height:40,borderRadius:15}} source={{uri: data[id].reviewerImage}} resize='cover' />}
            <Text style={{marginLeft:10}}>{data[0].name}</Text>
        </View>
        <View style={{width:'30%',justifyContent:'flex-end'}}>
           <Text>{data[id].rating} rating</Text>    
        </View>
      </View>
      <Text style={{fontSize:15, fontWeight:'400',color: '#8F959E'}}>{data[id].comment}</Text>
   </View>
  )
}

export default ReviewCard