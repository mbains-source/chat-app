import { useEffect } from "react";

import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

import { useNetInfo } from "@react-native-community/netinfo";

import { getStorage } from "firebase/storage";

import Start from "./components/Start";
import Chat from "./components/Chat";

const App = () => {

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

        // define state for connection status 
  const connectionStatus = useNetInfo();

  // check connection status and disable/enable network accordingly
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              db={db}
              storage={storage}
              isConnected={connectionStatus.isConnected}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;