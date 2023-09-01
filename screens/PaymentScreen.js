import React, { useState } from 'react';
import { View, Button, TextInput, FlatList, Text, Switch, StyleSheet } from 'react-native';
import { useCardContext } from '../store/cardContext';
import Input from '../components/Auth/Input';
import { useNavigation } from '@react-navigation/native';

function PaymentScreen() {
  const navigation =useNavigation();
  const { cardDetailsList, addCard, removeCard } = useCardContext();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiry,setExpiry] =useState('');
  const [cvv,setCvv] = useState('');
  
  const [isPrimary, setIsPrimary] = useState(cardDetailsList.isPrimary);

  const handleTogglePrimary = () => {
    // Toggle the isPrimary state
    setIsPrimary(!isPrimary);
  };

  const addCardHandler = () => {
    const newCard = {
      cardNumber,
      cardHolderName,
      expiry,
      cvv
      // Other card details...
    };
    addCard(newCard);
    // Reset input states
    setCardNumber('');
    setCardHolderName('');
    setExpiry(' ');
    setCvv('');
    navigation.navigate('cart');
    // Reset other input states...
  };


  return (
   <View style={{margin:15}}>
     <FlatList
        data={cardDetailsList}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.cardContainer}>
      <Text style={styles.cardNumber}>{item.cardNumber}</Text>
      <Text style={styles.cardHolderName}>{item.cardHolderName}</Text>
      <Text style={styles.expirationDate}>{item.expiry}</Text>
      <Text style={styles.expirationDate}>{item.type}</Text>
      <Button title="Remove Card" onPress={() => removeCard(index)} />
    </View>
        )}
        contentContainerStyle={styles.container}
      />
     <Button title="Add New Card" onPress={()=>{navigation.navigate('addcard')}} />
      <Input label={'Card Owner'}  placeholder="Card Owner"
        value={cardHolderName}
        onUpdateValue={setCardHolderName} />

<Input label={'Card Number'}  placeholder="Card Number"
        value={cardNumber}
        onUpdateValue={setCardNumber} />

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
            value={expiry}
            placeholder={"Enter Expiry Date"}
            label={"Expiry"}
            onUpdateValue={setExpiry}
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
          <Input value={cvv} placeholder={"Enter CVV"} label={"CVV"} onUpdateValue={setCvv}/>
        </View>
       
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:12}}>

        <Text style={{fontWeight:'600',fontSize:14}}>Save card Info</Text>
        <Switch
          value={isPrimary}
          onValueChange={handleTogglePrimary}
          thumbColor={isPrimary ? 'green' : 'white'}
        />
      </View>
      {/* Other input fields */}
      <Button title="save Card" onPress={addCardHandler} />

     
    </View>
  )
}

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
    marginRight: 16,
    borderRadius: 10,
    width: 280,
    height:190, // Set the width of each card
    flexDirection: 'column', // Vertical layout
    justifyContent: 'space-between', // Align items to top and bottom
  },
  cardNumber: {
    fontSize: 16,
  },
  cardHolderName: {
    fontSize: 16,
    marginTop: 8,
  },
  expirationDate: {
    fontSize: 16,
    marginTop: 8,
  },
  removeButton: {
    alignSelf: 'flex-end',
    alignItem:'center', // Align the button to the bottom
  },
});