## Chat App :U+1FDE3:

This is a React Native app for a chat application that allows users to chat with each other in real-time. The app is built using Firebase as the backend service provider and built 
with React-Native on the Frontend.

## Prerequisites

- Install Node.js and Expo CLI
- Create a Firebase account

## Objectives 

- To build a chat app for mobile devices using React Native. 
- To build an app that will provide users with a chat interface and options to share images and their location.

## Application Features

- UI Optimization: A user-friendly React Native interface that allows users to choose a name and background colour before joining chat
- Online & offline browsing: Users can use the app in online and offline mode as data is stored locally and on the Google Firestore database.
- Accessibility: Chat app is compatible with screen readers for users with visual impairments.
- Location Sharing: Locations access is enabled in order for users to share their location in map view format
- Image Sharing: Using google firebase storage, users can pick and send images from the phone’s image library or take pictures with the device’s camera app.
- Authentication: Anonymous user authentication through Google Firebase

## Technologies Used

- React Native
- Expo
- Firebase (Firestore, Storage)
- React Native Gifted Chat
- Node.js

## Setup & Installation

- Step #1: Install Expo CLI and set up [Android Studio](https://developer.android.com/studio?gclid=EAIaIQobChMIzLjbzvmAggMVxDetBh1wwg-REAAYASAAEgI2GfD_BwE&gclsrc=aw.ds) for Android Emulation

- Step #2: Firebase installation. Create a new project in Firebase Console, Configure Firestore Database and Firebase Authentication and replace the Firebase configuration in the project with your Firebase project credentials.

- Step #3: Install dependencies required to run the app by running the following npm terminal commands
  - npm install @react-native-async-storage/async-storage
  - npm install @react-native-community/netinfo
  - npm install @react-navigation/native
  - npm install @react-navigation/native-stack
  - npm install expo
  - npm install firebase
  - npm install react-native
  - npm install react-native-gifted-chat
  - npm install react-native-safe-area-context
  - npm install react-native-screens  
  - npm install expo-image-picker
  - npm install expo-location
  - npm install react-native-maps

