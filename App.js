import { StyleSheet, View, Text } from 'react-native';

import MyButton from './conponents/MyButton';
import MyText from './conponents/MyText';
import Navigator from './routes/drawer'
const onPress=()=>{
  alert(':)');
}
export default function App() {
  return (
    <View style={styles.container}>
      <MyButton text='salam' onPress={onPress}/>
      <MyText>salam</MyText>
      {/* <Navigator /> */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

