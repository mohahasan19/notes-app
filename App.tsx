import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Notes from './Notes';
import Fasting from './Fasting';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
  TextInput,
  useColorScheme,
  Button,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { NativeBaseProvider, Text, Heading, Container, Center } from "native-base";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  

  const [numTextInputs,setNumTextInputs] = React.useState(0);

  return (
<NavigationContainer>
  <NativeBaseProvider>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name= "Home" component={Notes}></Stack.Screen>
    <Stack.Screen name= "Fasting" component={Fasting}></Stack.Screen>
  </Stack.Navigator>
  </NativeBaseProvider>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: "pink"
  },
});

export default App;
