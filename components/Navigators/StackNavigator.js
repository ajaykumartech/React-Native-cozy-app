import React, { useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home';
import { Colors } from '../../constants/styles';
import WelcomeScreen from '../../screens/WelcomeScreen';
import MainScreen from '../../screens/MainScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import CardScreen from '../../screens/CardScreen';
import ItemDetail from '../../screens/ItemDetail';
import CartScreen from '../../screens/CartScreen';
import ReviewScreen from '../../screens/ReviewScreen';
import AddReviewScreen from '../../screens/AddReviewScreen';
import IconButton from '../ui/IconButton';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const drawer = useRef(null);
    return (
<Stack.Navigator
screenOptions={{
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTintColor: "black",
  contentStyle: { backgroundColor: Colors.primary },
}}
>
<Stack.Screen
  name="home"
  component={HomeScreen}
  options={{
    headerStyle: {
      backgroundColor: "#fff",
    },
    headerTintColor: "#181823", // Color of the back button and title
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25,
    },
    headerTitleAlign: "center",
    headerTitleContainerStyle: {
      width: "80%", // Adjust the width of the title container
    },
    statusBarStyle: "dark-content",
    headerLeft: ({ tintColor }) => (
      <IconButton
        icon="menu"
        color={tintColor}
        size={25}
        onPress={() => {
          drawer.current.openDrawer();
        }}
      />
    ),
    title: "Clozy",
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
  }}
/>
<Stack.Screen
  name="welcome"
  component={WelcomeScreen}
  options={{
    headerStyle: {
      backgroundColor: "#fff",
    },
    headerTintColor: "#181823", // Color of the back button and title
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25,
    },
    headerTitleAlign: "center",
    headerTitleContainerStyle: {
      width: "80%", // Adjust the width of the title container
    },
    statusBarStyle: "dark-content",
    headerLeft: ({ tintColor }) => (
      <IconButton
        icon="menu"
        color={tintColor}
        size={25}
        onPress={() => {
          drawer.current.openDrawer();
        }}
      />
    ),
    title: "Clozy",
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
  }}
/>
<Stack.Screen
  name="Main"
  component={MainScreen}
  options={{
    title: "Home",
    gestureEnabled: false,
    headerLeft: ({ tintColor }) => (
      <IconButton
        icon="menu"
        color={tintColor}
        size={24}
        onPress={() => drawer.current.openDrawer()}
      />
    ),
  }}
/>
<Stack.Screen
  name="profile"
  component={ProfileScreen}
  options={{
    headerLeft: ({ tintColor }) => (
      <IconButton
        icon="menu"
        color={tintColor}
        size={24}
        onPress={() => drawer.current.openDrawer()}
      />
    ),
  }}
/>
<Stack.Screen
  name="card"
  component={CardScreen}
  options={{
    headerLeft: ({ tintColor }) => (
      <IconButton
        icon="menu"
        color={tintColor}
        size={24}
        onPress={() => drawer.current.openDrawer()}
      />
    ),
  }}
/>

<Stack.Screen name="ItemDetail" component={ItemDetail} />
<Stack.Screen name="cart" component={CartScreen} />
<Stack.Screen name="review" component={ReviewScreen}  options={{headerTitle:'Reviews'}}/>
<Stack.Screen name="addreview" component={AddReviewScreen} options={{headerTitle:'Add Review'}}/>
</Stack.Navigator>

)};

export default StackNavigator;