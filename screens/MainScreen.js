import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/ui/IconButton'
import { AuthContext } from '../store/auth-context';
import axios from 'axios';

function MainScreen() {
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
<View>
  <View>
    <Text>Welcome!</Text>
    <Text>You authenticated successfully!</Text>
    <IconButton icon="card-outline" color='black' size={24} onPress={authCtx.logout} >My Cards</IconButton>
   </View>
    <Text>{fetchedData}</Text>
  </View>
  </>
)

};

export default MainScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
});
