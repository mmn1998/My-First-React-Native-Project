import { StyleSheet, View, Text } from 'react-native';
import React,{ useState } from 'react';
import {AppLoading} from 'expo';
import * as Font from 'expo-fonnt';
import MyButton from './conponents/MyButton';
import MyText from './conponents/MyText';
import Navigator from './routes/drawer';
const onPress=()=>{
  alert(':)');
}
const getFonts = () => Font.loadAsync({
     'B Nazanin':require('./assets/fonts/BNAZANIN.TTF'),
     'B Yekan':require('./assets/fonts/BYEKAN.TTF'),
     'B Mitra':require('./assets/fonts/BMITRA.TTF'),
     'Mj Flow':require('./assets/fonts/MJ FlOW.TTF')
  });

export default function App() {
  const [fontsLoaded,setFontsLoaded]=useState(false);
  if(fontsLoaded){
    
    return (
      <View style={styles.container}>
        <MyButton text='salam' onPress={onPress}/>
        <MyText>salam</MyText>
        {/* <Navigator /> */}
        <Text>Open up App.js to start working on your app!</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    );

  } else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

