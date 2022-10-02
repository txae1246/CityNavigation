import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

const artImage = require('./assets/art.png')
const mileImage = require('./assets/mile.png')
const pierImage = require('./assets/pier.png')
const waterImage = require('./assets/water.png')
const willisImage = require('./assets/willis.png')

function ArtScreen({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {artImage}
      />
    </View>
  );
}

function MileScreen({ route }) {
   return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {mileImage}
      />
    </View>
  );
}

function PierScreen({ route }) {
   return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {pierImage}
      />
    </View>
  );
}

function WaterScreen({ route }) {
   return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {waterImage}
      />
    </View>
  );
}

function WillisScreen({ route }) {
   return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {willisImage}
        />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation intialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtScreen} />
        <Drawer.Screen name="Magnificient Mile" component={MileScreen} />
        <Drawer.Screen name="Navy Pier" component={PierScreen} />
        <Drawer.Screen name="Water Tower" component={WaterScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisScreen} />
      </Drawer.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  pageContainer:  {
    flex:  1,
    backgroundColor:  '#ffffff',
    alignItems:  'center'
  },
  images:  {
    height:  480,
    width:  320,
    padding:  10
  }
})
