import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start from './components/Start';
import Chat from './components/Chat';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Create the navigator
const Stack = createNativeStackNavigator();

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


  return (
    <NavigationContainer>
            <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat">
          {props => <Chat db={db} {...props} />}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;