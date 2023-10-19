import Chat from "./components/Chat";
import Start from "./components/Start";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Firestore
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { Alert } from "react-native";
import { getStorage } from "firebase/storage";

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyC2vifjqq8LWXhxTfqd8YNf4W3jstI220k",
    authDomain: "chat-app-f6beb.firebaseapp.com",
    projectId: "chat-app-f6beb",
    storageBucket: "chat-app-f6beb.appspot.com",
    messagingSenderId: "356935907600",
    appId: "1:356935907600:web:95b5e1bb6475cfa0234d95",
    measurementId: "G-VH0EWNWZ1G"
  };
  
    // initialize Firebase and Firebase Storage handlers
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

  const storage = getStorage(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Welcome" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;