import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import of useeffect and react native components

//const chat
const Chat = ({route, navigation}) => {
  const { name } = route.params;

  useEffect(() => {
    navigation.setOptions({title: name});
  }, []);

 return (
   <View style={styles.container}>
     <Text>Hello Chat!</Text>
   </View>
 );
}

//const styles flexbox
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});


export default Chat;