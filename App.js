import {
  NavigationContainer,
  StackActions,
  useNavigation,
  useNavigationState,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext, useEffect, useRef, useState } from "react";
import IconButton from "./components/ui/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import {
  DrawerLayoutAndroid,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "./components/ui/Button";
import FlatButton from "./components/ui/FlatButton";
import { login } from "./util/auth";
import data from "./store/data.json";
import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/Home";
import CardScreen from "./screens/CardScreen";
import ItemDetail from "./screens/ItemDetail";
import SplashScreen from "./components/ui/Splash";
import CartScreen from "./screens/CartScreen";
import ReviewScreen from "./screens/ReviewScreen";
import ProductContext, {
  ProductProvider,
  ProductsProvider,
} from "./store/ProductContext";
import AddReviewScreen from "./screens/AddReviewScreen";
import { CartProvider } from "./store/cartContext";
import StackNavigator from "./components/Navigators/StackNavigator";
import BottomTabNavigator from "./components/Navigators/BottomTabNavigator";
import AddressScreen from "./screens/AddressScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { AddressProvider } from "./store/addressContext";
import { CardProvider } from "./store/cardContext";
import AddNewCardScreen from "./screens/AddNewCardScreen";
import OrderConfirmScreen from "./screens/OrderConfirmScreen";
import axios from "axios";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary },
        title: "",
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack({ navigation }) {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const drawer = useRef(null);
  const [fetchedData, setFetchedData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get(
          "https://react-native-udemy-3ad52-default-rtdb.firebaseio.com/expenses/data.json?auth=" +
            token
        )
        .then((response) => setFetchedData(response.data))
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    getData();
  }, [token]);

  useEffect(() => {
    // Log fetchedData when it updates
  }, [fetchedData]);

  const navigationView = () => (
    <View style={styles.navigationContainer}>
      <View style={{ marginTop: 25 }}>
        <IconButton
          icon="menu"
          color="gray"
          size={32}
          onPress={() => {
            drawer.current.closeDrawer(), navigation.navigate("home");
          }}
        />
      </View>
      <View
        style={{
          marginTop: 25,
          marginBottom: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: fetchedData.image }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
            }}
            resizeMode="center"
          />
          <View style={{ marginLeft: 10 }}>
            <Text>{fetchedData.name}</Text>
            <Text>
              Verified Profile{" "}
              <Ionicons name="checkmark-circle" size={14} color="green" />
            </Text>
          </View>
        </View>
        <View>
          <Button
            title="hello"
            style={styles.button}
            color={"gray"}
            tintColor={"white"}
          >
            <Text>{fetchedData.orders} Orders</Text>
          </Button>
        </View>
      </View>
      <View>
        {/*<Text>{JSON.stringify({user})}</Text>*/}
        <Text style={styles.menuButtons}>
          {" "}
          <IconButton
            icon="md-information-circle-outline"
            color="black"
            size={24}
            onPress={() => {
              drawer.current.closeDrawer(), navigation.navigate("profile");
            }}
          >
            Account Information
          </IconButton>
        </Text>
        <Text style={styles.menuButtons}>
          {" "}
          <IconButton
            icon="lock-closed-outline"
            color="black"
            size={24}
            onPress={authCtx.logout}
          >
            Passsword
          </IconButton>
        </Text>
        <Text style={styles.menuButtons}>
          {" "}
          <IconButton
            icon="cart-outline"
            color="black"
            size={24}
            onPress={() => {
              drawer.current.closeDrawer(), navigation.navigate("Main");
            }}
          >
            Orders
          </IconButton>
        </Text>
        <Text style={styles.menuButtons}>
          {" "}
          <IconButton
            icon="card-outline"
            color="black"
            size={24}
            onPress={() => {
              drawer.current.closeDrawer(), navigation.navigate("card");
            }}
          >
            My Cards
          </IconButton>
        </Text>
        <Text style={styles.menuButtons}>
          {" "}
          <IconButton
            icon="heart-outline"
            color="black"
            size={24}
            onPress={authCtx.logout}
          >
            Wishlist
          </IconButton>
        </Text>
        <Text style={styles.menuButtons}>
          {" "}
          <IconButton
            icon="settings-outline"
            color="black"
            size={24}
            onPress={authCtx.logout}
          >
            settings
          </IconButton>
        </Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.menuButtons}>
          {" "}
          <IconButton
            icon="exit-outline"
            color="red"
            size={24}
            onPress={authCtx.logout}
          >
            Logout
          </IconButton>{" "}
        </Text>
      </View>
    </View>
  );

  const drawerLayout = (
    <>
      <DrawerLayoutAndroid
        renderNavigationView={navigationView}
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
      >
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
          <Stack.Screen
            name="review"
            component={ReviewScreen}
            options={{ headerTitle: "Reviews" }}
          />
          <Stack.Screen
            name="addreview"
            component={AddReviewScreen}
            options={{ headerTitle: "Add Review" }}
          />
          <Stack.Screen
            name="address"
            component={AddressScreen}
            options={{ headerTitle: "Address" }}
          />
          <Stack.Screen
            name="payment"
            component={PaymentScreen}
            options={{ headerTitle: "Payment" }}
          />
          <Stack.Screen
            name="addcard"
            component={AddNewCardScreen}
            options={{ headerTitle: "Add New Card" }}
          />
          <Stack.Screen
            name="order"
            component={OrderConfirmScreen}
            options={{ headerTitle: "" }}
          />
         
        </Stack.Navigator>
      </DrawerLayoutAndroid>
    </>
  );

  return drawerLayout;
}

const initialProductData = data;
function Navigation() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1 }}>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && (
          <CartProvider>
            <AddressProvider>
              <ProductProvider>
                <CardProvider>
                  <AuthenticatedStack navigation={navigation} />
                </CardProvider>
              </ProductProvider>
            </AddressProvider>
          </CartProvider>
        )}
      </View>
    </>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const [showSplash, setShowSplash] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    // Simulate a delay for the splash screen (adjust the time as needed)
    setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 3000 milliseconds = 3 seconds
  }, []);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  return showSplash ? <SplashScreen /> : <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
};

const styles = StyleSheet.create({
  paragraph: { color: "black" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bottom: {
    marginTop: 60,
    flex: 3,
  },
  navigationContainer: {
    flex: 1,
    margin: 15,
  },
  menuButtons: {
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007BFF", // Background color
    borderRadius: 5, // Border radius
    color: "red",
  },
  buttonText: {
    color: "gray", // Text color
    fontSize: 12, // Font size
    fontWeight: "bold", // Font weight
  },
});
